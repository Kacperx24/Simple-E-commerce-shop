import React from "react";

const Footer = () => {
  const goToTop = () => {
    console.log("ss");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="footer">
      <div className="content-wrap">
        <h1 className="title">Order Your Clothes</h1>
        <h1 className="subtitle">#Free Delivery</h1>
      </div>
      <div className="top-btn" onClick={() => goToTop()}>
        <i className="fa-solid fa-arrow-up-long"></i>
      </div>
    </section>
  );
};

export default Footer;
