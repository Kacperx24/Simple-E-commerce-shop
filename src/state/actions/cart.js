import { actionType } from "./actionType";
const {
  ADD_TO_CART,
  DEC_CART_ITEM,
  INC_CART_ITEM,
  DELETE_CART_ITEM,
  SHOW_TOTAL,
} = actionType;
export const addToCart = (item, size) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
      size,
    },
  };
};

export const decCountOfItem = (item) => {
  return {
    type: DEC_CART_ITEM,
    payload: {
      item,
    },
  };
};
export const incCountOfItem = (item) => {
  return {
    type: INC_CART_ITEM,
    payload: {
      item,
    },
  };
};

export const deleteCartItem = (item) => {
  return {
    type: DELETE_CART_ITEM,
    payload: {
      item,
    },
  };
};

export const showTotalPrice = (items) => {
  return {
    type: SHOW_TOTAL,
    payload: {
      items,
    },
  };
};
