import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/Category";
import { useSelector } from "react-redux/es/exports";
import Footer from "./components/Footer";
import ShoppingItems from "./components/ShoppingItems";
const App = () => {
  const [type, setType] = useState("All");
  const [gender, setGender] = useState("All");
  const favRef = useRef();
  useEffect(() => {
    const btns = document.querySelectorAll("button.category-btn");
    for (let btn of btns) {
      btn.classList = `category-btn`;
      if (btn.textContent === type) btn.classList.add("active");
    }
  }, [gender, type]);
  return (
    <div className="app-wrap">
      <Header favRef={favRef} />

      <Category
        type={type}
        setType={setType}
        gender={gender}
        setGender={setGender}
      />
      <ShoppingItems
        type={type}
        setType={setType}
        gender={gender}
        setGender={setGender}
      />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export default App;
