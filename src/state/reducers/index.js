import { combineReducers } from "redux";
import { category } from "./category";
import { fav } from "./fav";
import { items } from "./items";
import { cart } from "./cart";
import { total } from "./total";
export const reducer = combineReducers({
  category,
  fav,
  items,
  cart,
  total,
});
