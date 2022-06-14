import React from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  decCountOfItem,
  incCountOfItem,
  deleteCartItem,
} from "../state/actions/cart";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDecClick = () => {
    dispatch(decCountOfItem(item));
  };
  const onIncClick = () => {
    dispatch(incCountOfItem(item));
  };
  const onDeleteClick = () => {
    dispatch(deleteCartItem(item));
  };
  return (
    <div className="cart-item">
      <div className="image-wrap">
        <img src={item.img} alt="" />
      </div>
      <div className="content-wrap">
        {" "}
        <div className="top-side-wrap">
          <div className="left-side">
            <h3 className="name">{item.name}</h3>
            <p className="desc">{item.desc}</p>
            <p className="size">
              Size: <span>{item.size}</span>
            </p>
          </div>
          <div className="right-side">
            <div className="delete-icon" onClick={onDeleteClick}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
        <div className="bottom-side-wrap">
          <div className="price-box">
            <p className="price">{item.price}0 $</p>
          </div>
          <div className="count-wrap">
            <div className="dec" onClick={onDecClick}>
              <i className="fa-solid fa-circle-chevron-down"></i>
            </div>
            <p className="count">{item.count}</p>
            <div className="inc" onClick={onIncClick}>
              <i className="fa-solid fa-circle-chevron-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
