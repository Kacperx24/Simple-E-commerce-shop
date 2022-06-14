import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToFav, deleteFromFav } from "../state/actions/fav";
import { updateFavStatus } from "../state/actions/item";
import { addToCart } from "../state/actions/cart";

const Item = ({ item }) => {
  let { img, name, desc, id, price } = item;
  const favRef = useRef();
  const sizeAlertRef = useRef();
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const favClick = () => {
    // item.isFav = !item.isFav;
    // favRef.current.classList.toggle("is-fav");
    if (!item.isFav) dispatch(addToFav(item));
    else dispatch(deleteFromFav(item));
    dispatch(updateFavStatus(item));
  };
  const onAddToCartClick = () => {
    if (size) {
      dispatch(addToCart(item, size));
      setSize("");
    } else {
      sizeAlertRef.current.classList.add("active");
      setTimeout(() => {
        sizeAlertRef.current.classList.remove("active");
      }, 1000);
    }
  };
  return (
    <div id={id} className="item-wrap">
      <div className="item">
        <div className="image-wrap">
          <img src={img} alt="" />
          <div
            className={`fav-wrap ${item.isFav ? "is-fav" : ""}`}
            ref={favRef}
            onClick={favClick}
          >
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
        <div className="content-wrap">
          {" "}
          <h3 className="name">{name}</h3>
          <p className="desc">{desc}</p>
          <p className="price">{`${price}0 $`}</p>
          <div className="size-wrap">
            <button
              className={`${size === "XS" ? "active" : ""}`}
              onClick={() => (size === "XS" ? setSize("") : setSize("XS"))}
            >
              XS
            </button>
            <button
              className={`${size === "S" ? "active" : ""}`}
              onClick={() => (size === "S" ? setSize("") : setSize("S"))}
            >
              S
            </button>
            <button
              className={`${size === "M" ? "active" : ""}`}
              onClick={() => (size === "M" ? setSize("") : setSize("M"))}
            >
              M
            </button>
            <button
              className={`${size === "L" ? "active" : ""}`}
              onClick={() => (size === "L" ? setSize("") : setSize("L"))}
            >
              L
            </button>
            <button
              className={`${size === "XL" ? "active" : ""}`}
              onClick={() => (size === "XL" ? setSize("") : setSize("XL"))}
            >
              XL
            </button>
          </div>
          <div className="button-wrap">
            <button className="add-cart" onClick={onAddToCartClick}>
              <i className="fa-solid fa-cart-plus"></i>Add to cart
            </button>
            <div className="alert-wrap" ref={sizeAlertRef}>
              <p className="alert">Pick size!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
