import React, { useState } from "react";
import { initalState } from "../constants/consts";

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
        div.classList.toggle("scale-150");
        div.classList.toggle("cursor-zoom-out");
        div.classList.toggle("cursor-zoom-in");
      }
    }
  };

  return (
    <div className="flex gap-6">
      <div
        className=" md:text-5xl cursor-pointer flex items-center "
        onClick={(e) => handleRightClick(e)}
      >
        <div className="w-10 h-10 hover:scale-150 ease-in duration-150  ">
          {"<"}
        </div>
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <div
            key={index}
            onClick={(e) => choosePhoto(e)}
            className={
              index === 1
                ? "w-52 z-10 h-52 shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] rounded-xl  hover:animate-hoverShadow cursor-zoom-in  "
                : "max-w-xs  rounded-xl h-44 self-end shrink shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]  hover:animate-hoverShadowSecondary"
            }
            id={index}
          >
            <img
              data-id={index}
              className={
                index === 1
                  ? "opacity-100 w-52 h-52 object-fill rounded-xl "
                  : "opacity-30 w-44 h-44 object-fill rounded-xl shrink "
              }
              src={card.url}
              alt=""
            />
          </div>
        ))}
      <div
        className="flex items-center md:text-5xl cursor-pointer"
        onClick={(e) => handleLeftClick(e)}
      >
        <div className="w-10 h-10 hover:scale-150 ease-in duration-150">
          {">"}
        </div>
      </div>
    </div>
  );
}
export default Carousel;
