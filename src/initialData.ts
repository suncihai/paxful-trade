import { ITradeItem, IChatItem } from './reducers/index';

export const tradeList: Array<ITradeItem> = [
  {
    tradeId: 'PX001', //indicates paxful trade id
    traderName: 'Josh', //buyer's name
    paymentType: 'Amazon Gift Card', //several payment type
    usd: '77',
    btc: '0.00542345',
    hash: '45aFD3Rr',
    posRepu: 37,
    negRepu: 1,
    trades: 4,
    avatar: 'buyer', //in real case would be a img url path
    isBuy: true,
    isPaid: true, //if buyer already paid
    isReleased: false, //if seller released bitcoin
    isRead: false, //if this msg already read
    isActive: false //if this msg box is selected
  },
  {
    tradeId: 'PX002',
    traderName: 'Ivan',
    paymentType: 'iTunes Gift Card',
    usd: '30',
    btc: '0.003746584',
    hash: 't8U82Hjdx',
    posRepu: 14,
    negRepu: 6,
    trades: 8,
    avatar: 'buyer',
    isBuy: true,
    isPaid: false,
    isReleased: false,
    isRead: false,
    isActive: false
  },
  {
    tradeId: 'PX003',
    traderName: 'Erich',
    paymentType: 'iTunes Gift Card',
    usd: '45',
    btc: '0.004764238',
    hash: 'jbDd86Ysne',
    posRepu: 103,
    negRepu: 29,
    trades: 23,
    avatar: 'buyer',
    isBuy: true,
    isPaid: true,
    isReleased: false,
    isRead: true,
    isActive: true
  },
  {
    tradeId: 'PX004',
    traderName: 'Calvin',
    paymentType: 'Paypal',
    usd: '30',
    btc: '0.003746584',
    hash: 'bvJS82GSds',
    posRepu: 42,
    negRepu: 9,
    trades: 14,
    avatar: 'buyer',
    isBuy: true,
    isPaid: false,
    isReleased: false,
    isRead: true,
    isActive: false
  },
  {
    tradeId: 'PX005',
    traderName: 'Arthur',
    paymentType: 'Wechat',
    usd: '30',
    btc: '0.003746584',
    hash: 'lskdS827Sd',
    posRepu: 28,
    negRepu: 3,
    trades: 6,
    avatar: 'seller',
    isBuy: false,
    isPaid: false,
    isReleased: false,
    isRead: true,
    isActive: false
  },
  {
    tradeId: 'PX006',
    traderName: 'Mikhali',
    paymentType: 'Chase QuickPay',
    usd: '100',
    btc: '0.01284929',
    hash: 'X7us4idsi2',
    posRepu: 94,
    negRepu: 12,
    trades: 85,
    avatar: 'seller',
    isBuy: false,
    isPaid: true,
    isReleased: false,
    isRead: false,
    isActive: false
  },
  {
    tradeId: 'PX007',
    traderName: 'Jacqueline',
    paymentType: 'Vemon',
    usd: '60',
    btc: '0.00826374',
    hash: 'h8S6hd31L',
    posRepu: 22,
    negRepu: 3,
    trades: 28,
    avatar: 'seller',
    isBuy: false,
    isPaid: true,
    isReleased: false,
    isRead: false,
    isActive: false
  }
];

export const chatList1: Array<IChatItem> = [
  {
    message: 'Hi, I want to buy your BTC',
    timestamp: 1583065114000,
    isUser: false
  },
  {
    message: 'KK, How much do u want?',
    timestamp: 1583075114000,
    isUser: true
  }
];

export const chatList2: Array<IChatItem> = [
  {
    message: 'hello',
    timestamp: 1583085114000,
    isUser: false
  },
  {
    message: `What's up?`,
    timestamp: 1583090114000,
    isUser: true
  },
  {
    message: 'Are you still selling?',
    timestamp: 1583091114000,
    isUser: false
  }
];

export const chatList3: Array<IChatItem> = [
  {
    message: 'Hi, I want to buy your BTC',
    timestamp: 1583091434000,
    isUser: false
  },
  {
    message: 'KK, How much do u want?',
    timestamp: 1583092514000,
    isUser: true
  },
  {
    message: 'Emmm... Let me see',
    timestamp: 1583093714000,
    isUser: false
  },
  {
    message:
      'Well, I wonder if you could lower down a little bit since recently BTC is going down you know? I would like to buy more if you could make price as 9880. You know I am just wondering',
    timestamp: 1583094124000,
    isUser: false
  }
];

export const chatList4: Array<IChatItem> = [
  {
    message: 'Hey man',
    timestamp: 1583067814000,
    isUser: false
  }
];

export const chatList5: Array<IChatItem> = [
  {
    message: 'Do you wanna buy?',
    timestamp: 1583067344000,
    isUser: false
  },
  {
    message: 'Yep!!!',
    timestamp: 1583067714000,
    isUser: true
  }
];

export const chatList6: Array<IChatItem> = [
  {
    message:
      'Hye, buddy, I have a bunch of BTC, I am in a hurry to sell it out. Are you interested? Just lmk',
    timestamp: 1583034344000,
    isUser: false
  },
  {
    message: 'Do you accept other payment?',
    timestamp: 1583057714000,
    isUser: true
  }
];

export const chatList7: Array<IChatItem> = [
  {
    message: 'Helloooooo, are you there?',
    timestamp: 1583039344000,
    isUser: true
  },
  {
    message: 'Are you purchasing BTC?',
    timestamp: 1583046344000,
    isUser: false
  }
];

export const chatMap: Map<string, Array<IChatItem>> = new Map();
chatMap.set('PX001', chatList1);
chatMap.set('PX002', chatList2);
chatMap.set('PX003', chatList3);
chatMap.set('PX004', chatList4);
chatMap.set('PX005', chatList5);
chatMap.set('PX006', chatList6);
chatMap.set('PX007', chatList7);
