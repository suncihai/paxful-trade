import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import counterReducer from './counter';
import isBuyerReducer from './isBuyer';
import tradeListReducer from './tradeList';
import tradeItemReducer from './tradeItem';
import tradeChatReducer from './tradeChat';
import chatMapReducer from './chatMap';

const rootReducer = combineReducers({
  count: counterReducer,
  isBuyer: isBuyerReducer,
  tradeList: tradeListReducer,
  tradeItem: tradeItemReducer,
  tradeChat: tradeChatReducer,
  chatMap: chatMapReducer
});

export interface State {
  count: number;
  router: RouterState;
}

export interface ITradeItem {
  tradeId: string;
  traderName: string;
  paymentType: string;
  usd: string;
  btc: string;
  hash: string;
  posRepu: number;
  negRepu: number;
  trades: number;
  avatar: string;
  isBuy: boolean;
  isPaid: boolean;
  isReleased: boolean;
  isRead: boolean;
  isActive: boolean;
}

export interface IChat {
  chatList: Map<string, Array<IChatItem>>;
}

//since it is hard code, avatar depend on if user is buyer or not instead of url
export interface IChatItem {
  message: string;
  timestamp: number;
  isUser: boolean;
}

export default rootReducer;
