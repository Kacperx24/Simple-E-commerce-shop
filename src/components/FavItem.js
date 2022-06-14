import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromFav } from "../state/actions/fav";
import { updateFavStatus } from "../state/actions/item";

const FavItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFav = () => {
    console.log(item);
    dispatch(deleteFromFav(item));
    dispatch(updateFavStatus(item));
  };
  return (
    <div className="fav-item">
      <div className="image-wrap">
        <img src={item.img} alt="" />
      </div>
      <div className="content-wrap">
        <div className="left-side">
          <h3 className="name">{item.name}</h3>
          <p className="desc">{item.desc}</p>
        </div>
        <div className="right-side">
          <p className="price">{`${item.price}0 $`}</p>
        </div>
      </div>
      <div className="delete-fav">
        <div onClick={removeFav} className="icon-wrap">
          {" "}
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
