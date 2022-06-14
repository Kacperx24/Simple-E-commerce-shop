import { actionType } from "../actions/actionType";
const { ADD_TO_CART, DEC_CART_ITEM, INC_CART_ITEM, DELETE_CART_ITEM } =
  actionType;
export const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action.payload);
      const itemExist = state.find(
        (el) =>
          el.id === action.payload.item.id && el.size === action.payload.size
      );
      let newState;
      if (itemExist) {
        const index = state.indexOf(itemExist);
        console.log(index);
        newState = state.filter(
          (el) => el.id !== itemExist.id || el.size !== itemExist.size
        );
      }
      return !itemExist
        ? [
            ...state,
            { ...action.payload.item, size: action.payload.size, count: 1 },
          ]
        : [...newState, { ...itemExist, count: itemExist.count + 1 }];
    }
    case DEC_CART_ITEM: {
      const { item } = action.payload;
      let index;
      index = state.findIndex(
        (el) => el.id === item.id && el.size === item.size
      );
      const newState = state.filter(
        (el) => el.id !== item.id || el.size !== item.size
      );
      if (item.count > 1)
        newState.splice(index, 0, { ...item, count: item.count - 1 });

      return [...newState];
    }
    case INC_CART_ITEM: {
      const { item } = action.payload;
      let index;
      index = state.findIndex(
        (el) => el.id === item.id && el.size === item.size
      );
      const newState = state.filter((el) => {
        return el.id !== item.id || el.size !== item.size;
      });
      newState.splice(index, 0, { ...item, count: item.count + 1 });
      return [...newState];
    }
    case DELETE_CART_ITEM: {
      const { item } = action.payload;
      const newState = state.filter(
        (el) => el.id !== item.id || el.size !== item.size
      );
      return [...newState];
    }

    default:
      return state;
  }
};
