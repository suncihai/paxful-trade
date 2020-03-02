import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeItem } from '../reducers';
import {
  green,
  bitBlue,
  bitGray,
  lightGray,
  darkGray,
  tinyGray
} from '../theme';
import styled from 'styled-components';
import { Text } from '../common/Text';
import { Avatar } from '../common/Avatar';
import _ from 'lodash';
import avatar_buyer from '../imgs/avatar_buyer.png';
import avatar_seller from '../imgs/avatar_seller.png';

const Wrapper = styled.div`
  padding: 20px;
  border-left: 1px solid ${bitGray};
  border-bottom: 1px solid ${bitGray};
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  &.isActive {
    background: ${bitBlue};
    width: 310px;
    padding-left: 10px;
    border: 2px solid ${lightGray};
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: all 0.3s ease;
  }
`;

const Slider = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftPart = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 4px;
  background: ${green};
  &.isRead {
    background: ${lightGray};
  }
  &.isActive {
    background: ${tinyGray};
  }
`;

const TextBox = styled.div``;
const RightPart = styled.div`
  width: 50px;
  text-align: center;
  padding-top: 3px;
`;

const TradeItem = (props: StateProps & OwnProps & DispatchProps) => (
  <Wrapper
    onClick={props.onClick}
    className={props.item.isActive ? 'isActive' : ''}
  >
    <Slider>
      <LeftPart>
        <Dot
          className={_.compact([
            props.item.isRead && 'isRead',
            props.item.isActive && 'isActive'
          ]).join(' ')}
        />
        <TextBox>
          <Text type="sub-text" mb="4px">{`${props.item.traderName} is ${
            props.isBuyer ? 'selling' : 'buying'
          }`}</Text>
          <Text bold mb="2px">
            {props.item.paymentType}
          </Text>
          <Text
            type="sub-text"
            nowrap
          >{`${props.item.usd} USD (${props.item.btc} BTC)`}</Text>
        </TextBox>
      </LeftPart>
      <RightPart>
        <Avatar
          src={props.item.avatar === 'buyer' ? avatar_buyer : avatar_seller}
          mb="5px"
        />
        <Text type={props.item.isPaid ? 'green-text' : 'sub-text'} bold nowrap>
          {props.item.isPaid ? 'PAID' : 'NOT PAID'}
        </Text>
      </RightPart>
    </Slider>
  </Wrapper>
);

interface StateProps {
  isBuyer: boolean;
}

interface OwnProps {
  onClick: () => void;
  item: ITradeItem;
  isBuyer: boolean;
}

const mapStateToProps = state => ({
  isBuyer: state.isBuyer
});

interface DispatchProps {}

const mapDispatchToProps = (dispatch: Dispatch<ITradeItem>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TradeItem);
