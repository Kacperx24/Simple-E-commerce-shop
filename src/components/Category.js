import React, { useEffect, useState } from "react";
import axios from "axios";
const menCategories = ["All", "Shirt", "Jacket", "Shorts", "Sweatshirt"];
const womenCategories = ["All", "Dress", "Shirt", "Coat", "Jeans"];

const Category = ({ type, setType, gender, setGender }) => {
  const setCategories = () => {
    if (gender === "All") return null;
    if (gender === "Men") {
      return menCategories.map((el, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setType(el);
            }}
            className="category-btn"
          >
            {el}
          </button>
        );
      });
    }
    if (gender === "Women") {
      return womenCategories.map((el, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setType(el);
            }}
            className="category-btn"
          >
            {el}
          </button>
        );
      });
    }
  };
  return (
    <section id="category">
      <div className="headings-wrap">
        <h2 className="heading">Category</h2>
        <h3 className="tag">{gender}</h3>
      </div>
      <div className="gender">
        <div
          className={`men-wrap ${gender === "Men" ? "picked" : null}`}
          onClick={(e) => {
            setGender("Men");
            setType("All");
          }}
        >
          <div className="icon-wrap">
            <i className="fa-solid fa-person"></i>
          </div>
          <p className="name">Men</p>
        </div>
        <div
          className={`women-wrap ${gender === "Women" ? "picked" : null}`}
          onClick={() => {
            setGender("Women");
            setType("All");
          }}
        >
          <div className="icon-wrap">
            <i className="fa-solid fa-person-dress"></i>
          </div>
          <p className="name">Women</p>
        </div>
      </div>
      {gender !== "All" ? (
        <div className="categories-wrap">
          <div className="categories">{setCategories()}</div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Category;
