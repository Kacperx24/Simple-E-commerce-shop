import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { showTotalPrice } from "../state/actions/cart";
import { useEffect } from "react";
const Cart = ({ cartRef }) => {
  const { cart, total } = useSelector((store) => store);
  const dispatch = useDispatch();
  let fixedTotal = total.toFixed(2);
  useEffect(() => {
    console.log("executed");
    dispatch(showTotalPrice(cart));
  }, [cart, dispatch]);
  const createCartItem = () => {
    return cart.map((item, i) => {
      return <CartItem key={i} item={item} />;
    });
  };

  return (
    <div ref={cartRef} className="fav-wrapper">
      <div className="fav">{createCartItem()}</div>
      {cart.length ? (
        <div className="total-wrap">
          <p className="total-price">Total: {fixedTotal}$</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
