import { tradeList, chatMap } from '../initialData';
import { IChatItem } from '.';

const chatMapReducer = (
  state = chatMap,
  action
): Map<string, Array<IChatItem>> => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload_map;
    case 'DELETE_TRADE_ITEM':
      return action.payload_map;
    default:
      return state;
  }
};

export default chatMapReducer;
