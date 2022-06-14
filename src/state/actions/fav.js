import { actionType } from "./actionType";
const { ADD_FAV, DELETE_FAV } = actionType;

export const addToFav = (product) => {
  return {
    type: ADD_FAV,
    payload: product,
  };
};

export const deleteFromFav = (product) => {
  return {
    type: DELETE_FAV,
    payload: product,
  };
};
