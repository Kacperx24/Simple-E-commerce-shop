import React, { useRef } from "react";
import Fav from "./Fav";
import { useSelector } from "react-redux";
import Cart from "./Cart";
// import { cart } from "../state/reducers/cart";
const Header = () => {
  const favCartRef = useRef();
  const cartRef = useRef();
  const toggleFavSlider = () => {
    cartRef.current.classList.remove("active");
    if (fav.length) favCartRef.current.classList.toggle("active");
  };
  const toggleCartSlider = () => {
    favCartRef.current.classList.remove("active");
    if (cart.length) cartRef.current.classList.toggle("active");
  };
  const { fav, cart } = useSelector((state) => state);
  if (favCartRef.current) {
    if (!fav.length) favCartRef.current.classList.remove("active");
    // else favCartRef.current.classList.remove("active");
  }
  if (cartRef.current) {
    if (!cart.length) cartRef.current.classList.remove("active");
    // else favCartRef.current.classList.remove("active");
  }

  return (
    <>
      <section id="header">
        <div className="header-wrapper">
          {" "}
          <header>
            <div className="logo-wrap">
              <span>e</span>Clothes
            </div>
            <div className="icons-wrap">
              <div onClick={toggleFavSlider} className="fav-wrap">
                <p className="count">{fav.length}</p>
                <i className="fa-solid fa-heart"></i>
              </div>
              <div onClick={toggleCartSlider} className="bag-wrap">
                <p className="count">{cart.length}</p>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
          </header>
        </div>

        <Fav favCartRef={favCartRef} />
        <Cart cartRef={cartRef} />
      </section>
      <section className="header-space"></section>
    </>
  );
};

export default Header;
