import { actionType } from "../actions/actionType";
import { useSelector } from "react-redux";
const { ADD_FAV, DELETE_FAV } = actionType;
export const fav = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV: {
      const item = action.payload;
      return [...state, item];
    }
    case DELETE_FAV: {
      let item = action.payload;
      item = { ...item, isFav: !item.isFav };
      return state.filter((el) => el.id !== item.id);
    }
    default:
      return state;
  }
};
