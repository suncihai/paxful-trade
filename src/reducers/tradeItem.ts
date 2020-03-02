import { tradeList } from '../initialData';
import { ITradeItem } from '.';

const tradeItem = tradeList.filter(ele => ele.isActive)[0];

const tradeItemReducer = (state = tradeItem, action): ITradeItem => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return action.payload_item;
    case 'GET_INITIAL_ITEM':
      return action.payload_item;
    case 'DELETE_TRADE_ITEM':
      return action.payload_item;
    case 'RELEASE_BTC':
      return action.payload_item;
    case 'SWITCH_BUY_SELL':
      return action.payload_item;
    default:
      return state;
  }
};

export default tradeItemReducer;
