import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { menClothes, womenClothes } from "../images";

import Item from "./Item";
const ShoppingItems = ({ type, setType, gender, setGender }) => {
  const { items } = useSelector((state) => state);
  const renderItems = () => {
    if (gender === "All") {
      return items.map((gender) => {
        const keys = Object.keys(gender);
        return keys.map((type) => {
          return gender[type].map((item) => {
            return <Item item={item} />;
          });
        });
      });
    }
    const series = gender === "Men" ? items[0] : items[1];
    if (type === "All") {
      const keys = Object.keys(series);
      return keys.map((type) => {
        return series[type].map((item) => {
          return <Item item={item} />;
        });
      });
    }

    return series[type].map((item) => {
      console.log(item);
      return <Item item={item} />;
    });
  };

  return (
    <section id="items">
      <div className="items-wrap">{renderItems()}</div>
    </section>
  );
};

export default ShoppingItems;
