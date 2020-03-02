import React from 'react';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITradeItem } from '../reducers';
import TradeItem from './TradeItem';
import styled from 'styled-components';
import { lightGray } from '../theme';
import { selectTradeItem, getInitialItem } from '../actions';
import Cookie from 'js-cookie';
import { history } from '../index';

const Wrapper = styled.div`
  width: 300px;
  box-shadow: 5px 0 5px -5px ${lightGray};
  z-index: 1;
`;

const TradeList = (props: StateProps & DispatchProps) => {
  useEffect(() => {
    props.getInitialItem(props.tradeList);
    let tradeId = Cookie.get('paxfulTradeItem');
    history.push(`/trade/${props.isBuyer ? 'buy' : 'sell'}/${tradeId}`);
  }, []);

  return (
    <Wrapper>
      {props.tradeList
        .filter(item => item.isBuy !== props.isBuyer)
        .map((ele, index) => {
          return (
            <TradeItem
              onClick={() =>
                props.selectTradeItem(
                  ele.tradeId,
                  props.isBuyer,
                  props.tradeList
                )
              }
              item={ele}
              key={index}
            />
          );
        })}
    </Wrapper>
  );
};

interface StateProps {
  tradeList: Array<ITradeItem>;
  isBuyer: boolean;
}

interface DispatchProps {
  selectTradeItem: (
    tradeId: string,
    isBuyer: boolean,
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
  getInitialItem: (
    tradeList: Array<ITradeItem>
  ) => {
    type: string;
    payload_list: Array<ITradeItem>;
    payload_item: object;
  };
}

const mapStateToProps = state => ({
  tradeList: state.tradeList,
  isBuyer: state.isBuyer
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  selectTradeItem: (
    tradeId: string,
    isBuyer: boolean,
    tradeList: Array<ITradeItem>
  ) => dispatch(selectTradeItem(tradeId, isBuyer, tradeList)),
  getInitialItem: (tradeList: Array<ITradeItem>) =>
    dispatch(getInitialItem(tradeList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeList);
