import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeItem } from '../reducers';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { InfoCell } from '../common/InfoCell';
import { Avatar } from '../common/Avatar';
import styled from 'styled-components';
import { lightGray, bitGray } from '../theme';
import { releaseBTC, switchBuySell } from '../actions';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';
import _ from 'lodash';

const Wrapper = styled.div`
  width: 300px;
  box-shadow: -5px 0 5px -5px ${lightGray};
  padding: 30px;
  text-align: center;
  z-index: 1;
`;

const BlurArea = styled.div`
  filter: blur(${props => props.blur});
`;

const Row = styled.div`
  width: 100%;
  display: block;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const TradeInfo = (props: StateProps & DispatchProps) => {
  const isBuyerIsReleased = (
    <Text mb="40px" bold>
      You informed {props.tradeItem.traderName} to release BTC.
    </Text>
  );
  const isBuyerNotReleased = (
    <Button
      type="submit"
      mb="25px"
      disabled={!props.tradeItem.isPaid}
      onClick={() => {
        props.releaseBTC(props.tradeItem.tradeId, props.tradeList);
      }}
    >
      Send a reminder
    </Button>
  );
  const notBuyerIsReleased = (
    <Text mb="40px" bold>
      Your BTC is released to {props.tradeItem.traderName}
    </Text>
  );
  const notBuyerNotReleased = (
    <Button
      type="submit"
      mb="25px"
      disabled={!props.tradeItem.isPaid}
      onClick={() => {
        props.releaseBTC(props.tradeItem.tradeId, props.tradeList);
      }}
    >
      Release bitcoins
    </Button>
  );

  return (
    <Wrapper>
      <BlurArea blur={_.isEmpty(props.tradeItem) ? '5px' : '0'}>
        <Row>
          <Text>{`You are trading with ${props.tradeItem.traderName}`}</Text>
          {/* hard code time here */}
          <Text type="sub-text" mb="30px">
            Started 23 minutes ago
          </Text>
          {props.isBuyer
            ? props.tradeItem.isReleased
              ? isBuyerIsReleased
              : isBuyerNotReleased
            : props.tradeItem.isReleased
            ? notBuyerIsReleased
            : notBuyerNotReleased}
        </Row>
        <Flex>
          <InfoCell rb="1px" bb="1px">
            <Avatar
              src={props.isBuyer ? avatar_seller : avatar_buyer}
              mb="2px"
            />
            <Row>
              <Text type="green-text" inline bold>
                +{props.tradeItem.posRepu}
              </Text>
              <Text inline bold>
                /
              </Text>
              <Text type="red-text" inline bold>
                -{props.tradeItem.negRepu}
              </Text>
            </Row>
          </InfoCell>
          <InfoCell bb="1px">
            <Text uppercase bold>
              # Of Trades
            </Text>
            <Text>{props.tradeItem.trades}</Text>
          </InfoCell>
        </Flex>
        <Flex>
          <InfoCell rb="1px" bb="1px">
            <Text uppercase bold>
              Trade Status
            </Text>
            <Text
              type={props.tradeItem.isPaid ? 'green-text' : 'sub-text'}
              bold
            >
              {props.tradeItem.isPaid ? 'PAID' : 'NOT PAID'}
            </Text>
          </InfoCell>
          <InfoCell bb="1px">
            <Text uppercase bold>
              Trade Hash
            </Text>
            <Text type="sub-text">{props.tradeItem.hash}</Text>
          </InfoCell>
        </Flex>
        <Flex>
          <InfoCell rb="1px" bb="1px">
            <Text uppercase bold>
              Amount USD
            </Text>
            <Text>{props.tradeItem.usd}</Text>
          </InfoCell>
          <InfoCell bb="1px">
            <Text uppercase bold>
              Amount BTC
            </Text>
            <Text type="sub-text">{props.tradeItem.btc}</Text>
          </InfoCell>
        </Flex>
      </BlurArea>
      <Row>
        <Button
          type="primary"
          mt="80px"
          mb="10px"
          onClick={() => {
            props.switchBuySell(props.isBuyer, props.tradeList);
          }}
        >
          {props.isBuyer ? 'I want to Sell' : 'I want to Buy'}
        </Button>
        <Row>
          <Text inline mr="5px">
            I am a
          </Text>
          <Text inline bold>
            {props.isBuyer ? 'Buyer' : 'Seller'}
          </Text>
        </Row>
      </Row>
    </Wrapper>
  );
};

interface StateProps {
  tradeList: Array<ITradeItem>;
  tradeItem: ITradeItem;
  isBuyer: boolean;
}

interface DispatchProps {
  releaseBTC: (
    tradeId: string,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
  switchBuySell: (
    isBuyer: boolean,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload: boolean;
  };
}

const mapStateToProps = state => ({
  tradeList: state.tradeList,
  tradeItem: state.tradeItem,
  isBuyer: state.isBuyer
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  releaseBTC: (tradeId: string, tradeList: Array<ITradeItem>) =>
    dispatch(releaseBTC(tradeId, tradeList)),
  switchBuySell: (isBuyer: boolean, tradeList: Array<ITradeItem>) =>
    dispatch(switchBuySell(isBuyer, tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeInfo);
