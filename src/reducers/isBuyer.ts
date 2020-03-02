//initial as a seller if no cache
import Cookie from 'js-cookie';

let isBuyer = Cookie.get('isPaxfulBuyer') === 'true' ? true : false;

const isBuyerReducer = (state = isBuyer, action): boolean => {
  switch (action.type) {
    case 'SWITCH_BUY_SELL':
      return action.payload;
    default:
      return state;
  }
};

export default isBuyerReducer;
