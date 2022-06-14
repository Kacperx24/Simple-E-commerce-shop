import { menClothes, womenClothes } from "../../images";
import { actionType } from "../actions/actionType";

const { UPDATE_FAV_STATUS } = actionType;
const initialState = [menClothes, womenClothes];

export const items = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAV_STATUS: {
      console.log(state);
      let trueItem = null;
      let index = null;
      let newState = [...state];
      let key = null;
      let arrI = null;
      const item = state.forEach((items, arrIndex) => {
        const keys = Object.keys(items);
        keys.forEach((k) => {
          items[k].find((item, i) => {
            if (item.id === action.payload.id) {
              index = i;
              key = k;
              arrI = arrIndex;
            }
            return item.id === action.payload.id;
          });
        });
      });
      const filteredState = state.filter((el) => state.indexOf(el) !== arrI);
      const items = state[arrI][key].map((item) => {
        console.log(item.id, action.payload.id, item.isFav);
        if (item.id === action.payload.id) {
          return { ...item, isFav: !item.isFav };
        }
        return item;
      });
      newState =
        arrI === 0
          ? [
              {
                ...state[arrI],
                [key]: items,
              },
              ...filteredState,
            ]
          : [
              ...filteredState,
              {
                ...state[arrI],
                [key]: items,
              },
            ];
      return newState;
    }
    default:
      return state;
  }
};
