import { actionType } from "./actionType";
const { UPDATE_FAV_STATUS } = actionType;
export const updateFavStatus = (item) => {
  return {
    type: UPDATE_FAV_STATUS,
    payload: item,
  };
};
