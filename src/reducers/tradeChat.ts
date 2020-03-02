import { tradeList, chatMap } from '../initialData';
import { IChatItem } from '.';
import Cookie from 'js-cookie';

let tradeId: string = '';
if (Cookie.get('paxfulTradeItem')) {
  tradeId = Cookie.get('paxfulTradeItem');
} else {
  tradeId = tradeList.filter(ele => ele.isActive)[0].tradeId;
}
const chatList: Array<IChatItem> = chatMap.get(tradeId);

const tradeChatReducer = (state = chatList, action): Array<IChatItem> => {
  switch (action.type) {
    case 'SELECT_TRADE_ITEM':
      return [...chatMap.get(action.payload_item.tradeId)];
    case 'DELETE_TRADE_ITEM':
      return [...action.payload];
    case 'SEND_MESSAGE':
      return [...action.payload_chatList];
    case 'SWITCH_BUY_SELL':
      return [...action.payload_chat];
    default:
      return state;
  }
};

export default tradeChatReducer;
