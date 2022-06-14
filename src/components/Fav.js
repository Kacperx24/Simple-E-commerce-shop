import React from "react";
import { useSelector } from "react-redux";
import FavItem from "./FavItem";
const Fav = ({ favCartRef, favRef }) => {
  const { fav } = useSelector((store) => store);
  const createFavItem = () => {
    return fav.map((item, i) => {
      return <FavItem favRef={favRef} key={i} item={item} />;
    });
  };
  return (
    <div ref={favCartRef} className="fav-wrapper">
      <div className="fav">{createFavItem()}</div>
    </div>
  );
};

export default Fav;
