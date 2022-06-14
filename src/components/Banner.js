import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner limited">
        <h1 className="title">Order Your Clothes</h1>
        <h1 className="subtitle">#Free Delivery</h1>
        {/* <form action="">
          <div className="icon-wrap">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="text" placeholder="Search your clothes" />
          <button className="send">Search</button>
        </form> */}
        {/* #ff6978 */}
        <div className="design-elements-wrap">
          {/* <div className="first-el"></div> */}
          <div className="square"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
