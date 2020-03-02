import { ITradeItem, IChatItem } from '../reducers';
import Cookie from 'js-cookie';
import { history } from '../index';

export const selectTradeItem = (
  tradeId: string,
  isBuyer: boolean,
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let tradeItem = {};
  tradeList.forEach(ele => {
    ele.isActive = false;
  });
  tradeList.forEach(ele => {
    if (ele.tradeId === tradeId) {
      ele.isActive = true;
      ele.isRead = true;
      Cookie.set('paxfulTradeItem', tradeId);
      tradeItem = Object.assign({}, ele);
    }
  });
  history.push(`/trade/${isBuyer ? 'buy' : 'sell'}/${tradeId}`);
  return {
    type: 'SELECT_TRADE_ITEM',
    payload_list: tradeList,
    payload_item: tradeItem
  };
};

//reload from cached item
export const getInitialItem = (
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let tradeItem = {};
  if (Cookie.get('paxfulTradeItem')) {
    tradeList.forEach(ele => {
      ele.isActive = false;
    });
    tradeList.forEach(ele => {
      if (ele.tradeId === Cookie.get('paxfulTradeItem')) {
        ele.isActive = true;
        ele.isRead = true;
        tradeItem = Object.assign({}, ele);
      }
    });
  } else {
    tradeList.forEach(ele => {
      if (ele.isActive) {
        tradeItem = Object.assign({}, ele);
        Cookie.set('paxfulTradeItem', ele.tradeId);
      }
    });
  }

  return {
    type: 'GET_INITIAL_ITEM',
    payload_list: tradeList,
    payload_item: tradeItem
  };
};

export const deleteTradeItem = (
  tradeId: string,
  tradeList: Array<ITradeItem>,
  chatMap: Map<string, Array<IChatItem>>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_map: Map<string, Array<IChatItem>>;
  payload_item: object;
  payload: Array<IChatItem>;
} => {
  let target = 0;
  tradeList.forEach((ele, index) => {
    if (ele.tradeId === tradeId) {
      target = index;
      let chatList: Array<IChatItem> = new Array();
      chatMap.set(tradeId, [...chatList]);
    }
  });
  tradeList.splice(target, 1); //remove that trade
  return {
    type: 'DELETE_TRADE_ITEM',
    payload_list: tradeList,
    payload_map: chatMap,
    payload_item: Object.assign({}, {}),
    payload: []
  };
};

export const sendMsg = (
  tradeId: string,
  tradeItem: ITradeItem,
  tradeList: Array<ITradeItem>,
  message: string,
  timestamp: number,
  isUser: boolean,
  chatMap: Map<string, Array<IChatItem>>
): {
  type: string;
  payload_map: Map<string, Array<IChatItem>>;
  payload_list: Array<ITradeItem>;
  payload_chatList: Array<IChatItem>;
} => {
  let chatList: Array<IChatItem> = [];
  let chatItem: IChatItem = { message, timestamp, isUser };
  //if sender is not current selected tradeItem's sender, that trade notification should turn green
  //if sender is just current selected tradeItem's sender, no need to turn green
  if (tradeId !== tradeItem.tradeId) {
    tradeList.forEach(ele => {
      if (ele.tradeId === tradeId) {
        ele.isRead = false;
      }
    });
    chatList = chatMap.get(tradeId);
    chatList.push(chatItem);
    chatMap.set(tradeId, [...chatList]);
    chatList = chatMap.get(tradeItem.tradeId); //little tricky here, keep current item's chat list
  } else {
    chatList = chatMap.get(tradeItem.tradeId);
    chatList.push(chatItem);
    chatMap.set(tradeId, [...chatList]);
  }

  return {
    type: 'SEND_MESSAGE',
    payload_map: chatMap,
    payload_list: tradeList,
    payload_chatList: chatList
  };
};

export const releaseBTC = (
  tradeId: string,
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload_list: Array<ITradeItem>;
  payload_item: object;
} => {
  let tradeItem = {};
  tradeList.forEach(ele => {
    if (ele.tradeId === tradeId) {
      ele.isReleased = true;
      ele.trades++; //this trade is done, so trades should plus 1
      tradeItem = Object.assign({}, ele);
    }
  });
  return {
    type: 'RELEASE_BTC',
    payload_list: tradeList,
    payload_item: tradeItem
  };
};

export const switchBuySell = (
  isBuyer: boolean,
  tradeList: Array<ITradeItem>
): {
  type: string;
  payload: boolean;
  payload_list: Array<ITradeItem>;
  payload_item: object;
  payload_chat: Array<IChatItem>;
} => {
  Cookie.set('isPaxfulBuyer', !isBuyer);
  tradeList.forEach(ele => {
    ele.isActive = false;
  });
  history.push(`/trade/${!isBuyer ? 'buy' : 'sell'}`);
  return {
    type: 'SWITCH_BUY_SELL',
    payload: !isBuyer,
    payload_list: tradeList,
    payload_item: Object.assign({}, {}),
    payload_chat: []
  };
};
