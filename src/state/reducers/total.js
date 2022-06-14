import { actionType } from "../actions/actionType";
const { SHOW_TOTAL } = actionType;
export const total = (state = 0, action) => {
  switch (action.type) {
    case SHOW_TOTAL: {
      const { items } = action.payload;
      if (!items.length) return 0;
      const total = items.reduce((acc, current) => {
        const { price, count } = current;
        return acc + price * count;
      }, 0);
      return total;
    }

    default:
      return state;
  }
};
