import React, { useState } from "react";
import { initalState } from "../../constants/consts";
import CarouselCard from "./CarouselCard";

function Carousel() {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (e) => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

    prevState.find((f) => f.active === false).active = true;
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;

    prevState.find((f) => f.active === false).active = true;
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    setCards(prevState);
  };

  const choosePhoto = (e) => {
    const div = e.target.closest("div");
    switch (div.id) {
      case "0":
        handleRightClick();
        break;
      case "2":
        handleLeftClick();
        break;
      case "1": {
        div.classList.toggle("scale-[1.5]");
        div.classList.toggle("cursor-zoom-out");
        div.classList.toggle("cursor-zoom-in");
      }
    }
  };

  return (
    <div className="carousel_wrapper">
      <div
        className=" carouselRightArrow_wrapper "
        onClick={(e) => handleRightClick(e)}
      >
        <div className=" carouselRightArrow_div  ">
          <img
            className=" carosusel_rightArrowImage"
            src="../../img/ar.png"
            alt=""
          />
        </div>
      </div>
      <CarouselCard choosePhoto={choosePhoto} cards={cards} />
      <div
        className="carouselLeftArrow_wrapper"
        onClick={(e) => handleLeftClick(e)}
      >
        <div className=" carouselLeftArrow_div">
          <img
            className="carouselLefttArrow_image"
            src="../../img/ar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
