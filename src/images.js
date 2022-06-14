import shirt1 from "./images/m-shirt-1.jpg";
import shirt2 from "./images/m-shirt-2.jpg";
import shirt3 from "./images/m-shirt-3.jpg";
import shirt4 from "./images/m-shirt-4.jpg";
import jacket1 from "./images/m-jacket-1.jpg";
import jacket2 from "./images/m-jacket-2.jpg";
import jacket3 from "./images/m-jacket-3.jpg";
import shorts1 from "./images/m-shorts-1.jpg";
import shorts2 from "./images/m-shorts-2.jpg";
import sweatshirt1 from "./images/m-sweatshirt-1.jpg";
import sweatshirt2 from "./images/m-sweatshirt-2.jpg";
import sweatshirt3 from "./images/m-sweatshirt-3.jpg";
import wshirt1 from "./images/w-shirt-1.jpg";
import wshirt2 from "./images/w-shirt-2.jpg";
import wshirt3 from "./images/w-shirt-3.jpg";
import wshirt4 from "./images/w-shirt-4.jpg";
import dress1 from "./images/w-dress-1.jpg";
import dress2 from "./images/w-dress-2.jpg";
import dress3 from "./images/w-dress-3.jpg";
import dress4 from "./images/w-dress-4.jpg";
import coat1 from "./images/w-coat-1.jpg";
import coat2 from "./images/w-coat-2.jpg";
import coat3 from "./images/w-coat-3.jpg";
import jeans1 from "./images/w-jeans-1.jpg";
import jeans2 from "./images/w-jeans-2.jpg";
import jeans3 from "./images/w-jeans-3.jpg";

let id = 0;

export const menClothes = {
  Shirt: [
    {
      name: "Pier One",
      desc: "T-shirt z nadrukiem - white",
      img: shirt1,
      id: ++id,
      isFav: false,
      price: 11.9,
    },
    {
      name: "Pier One",
      desc: "T-shirt basic - red",
      img: shirt2,
      id: ++id,
      isFav: false,
      price: 9.9,
    },
    {
      name: "WE Fashion",
      desc: "T-shirt z nadrukiem - light green",
      img: shirt3,
      id: ++id,
      isFav: false,
      price: 12.9,
    },
    {
      name: "Zign",
      desc: "T-shirt basic - black",
      img: shirt4,
      id: ++id,
      isFav: false,
      price: 14.9,
    },
  ],
  Jacket: [
    {
      name: "Redefined Rebel",
      desc: "Kurtka zimowa - dark",
      img: jacket1,
      id: ++id,
      isFav: false,
      price: 55.9,
    },
    {
      name: "Denim Project",
      desc: "Kurtka zimowa - black",
      img: jacket2,
      id: ++id,
      isFav: false,
      price: 49.9,
    },
    {
      name: "Trendyol",
      desc: "Kurtka zimowa - navy blue",
      img: jacket3,
      id: ++id,
      isFav: false,
      price: 61.9,
    },
  ],
  Shorts: [
    {
      name: "Danim Project",
      desc: "Szorty jeansowe - black",
      img: shorts1,
      id: ++id,
      isFav: false,
      price: 22.9,
    },
    {
      name: "Southpole",
      desc: "Szorty jeansowe - basic-denim",
      img: shorts2,
      id: ++id,
      isFav: false,
      price: 27.9,
    },
  ],
  Sweatshirt: [
    {
      name: "Brave Soul",
      desc: "Bluza - grey marl",
      img: sweatshirt1,
      id: ++id,
      isFav: false,
      price: 19.9,
    },
    {
      name: "WÓLCZANKA",
      desc: "Bluza - khaki",
      img: sweatshirt2,
      id: ++id,
      isFav: false,
      price: 22.9,
    },
    {
      name: "G-star",
      desc: "Bluza - granite",
      img: sweatshirt3,
      id: ++id,
      isFav: false,
      price: 25.9,
    },
  ],
};

export const womenClothes = {
  Dress: [
    {
      name: "Greenpoint",
      desc: "Sukienka Letnia - white",
      img: dress1,
      id: ++id,
      isFav: false,
      price: 19.9,
    },
    {
      name: "WÓLCZANKA",
      desc: "Sukienka letnia - blue",
      img: dress2,
      id: ++id,
      isFav: false,
      price: 26.9,
    },
    {
      name: "Bershka",
      desc: "Sukienka etui - sand",
      img: dress3,
      id: ++id,
      isFav: false,
      price: 22.9,
    },
    {
      name: "Greenpoint",
      desc: "Sukienka letnia - pattern",
      img: dress4,
      id: ++id,
      isFav: false,
      price: 21.9,
    },
  ],
  Shirt: [
    {
      name: "Sir Raymond Tailor",
      desc: "T-shirt basic - white",
      img: wshirt1,
      id: ++id,
      isFav: false,
      price: 8.9,
    },
    {
      name: "Ellesse",
      desc: "T-shirt z nadrukiem - black",
      img: wshirt2,
      id: ++id,
      isFav: false,
      price: 11.9,
    },
    {
      name: "U.S. Polo Assn.",
      desc: "Bluzka - white",
      img: wshirt3,
      id: ++id,
      isFav: false,
      price: 10.9,
    },
    {
      name: "Anna Field",
      desc: "T-shirt z nadrukiem - black",
      img: wshirt4,
      id: ++id,
      isFav: false,
      price: 13.9,
    },
  ],
  Coat: [
    {
      name: "ONLY",
      desc: "Parka - pumice stone",
      img: coat1,
      id: ++id,
      isFav: false,
      price: 32.9,
    },
    {
      name: "Top Secret",
      desc: "Krótki płaszcz - fioletowy",
      img: coat2,
      id: ++id,
      isFav: false,
      price: 35.9,
    },
    {
      name: "ONLY",
      desc: "Parka - kalamata",
      img: coat3,
      id: ++id,
      isFav: false,
      price: 34.9,
    },
  ],
  Jeans: [
    {
      name: "Lee",
      desc: "Jeansy Skinny Fit",
      img: jeans1,
      id: ++id,
      isFav: false,
      price: 27.9,
    },
    {
      name: "Cross Jeans",
      desc: "Jeansy Skinny Fit - jasny niebieski",
      img: jeans2,
      id: ++id,
      isFav: false,
      price: 24.9,
    },
    {
      name: "ONLY",
      desc: "Jeansy Skinny Fit - white",
      img: jeans3,
      id: ++id,
      isFav: false,
      price: 21.9,
    },
  ],
};
