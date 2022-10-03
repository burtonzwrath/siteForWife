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
        div.classList.toggle("scale-[1.5]");
        div.classList.toggle("cursor-zoom-out");
        div.classList.toggle("cursor-zoom-in");
      }
    }
  };

  return (
    <div className="flex gap-6 w-full ">
      <div
        className=" md:text-xl cursor-pointer flex items-center "
        onClick={(e) => handleRightClick(e)}
      >
        <div className="   w-6 h-6 rounded-full border-2 border-green-100 hover:border-2 hover:border-white  hover:scale-150 duration-200 ">
           <img className="  object-fill rounded-full" src="../img/ar.png" alt=""/>
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
                ? "z-10  flex align-center    shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] rounded-xl hover:shadow-sky-500 duration-200  cursor-zoom-in  "
                : " hidden    lg:block   rounded-xl  self-center   shadow-[0_0_10px_2px_rgba(0,0,0,0.6)]  hover:shadow-sky-200 duration-200"
            }
            id={index}
          >
            <img
              data-id={index}
              className={
                index === 1
                  ? "opacity-100  w-[40vmax] object-contain w-full rounded-xl "
                  : "opacity-30  w-[20vmax]  object-contain w-full  rounded-xl  "
              }
              src={card.url}
              alt=""
            />
          </div>
        ))}
      <div
        className="flex items-center md:text-xl cursor-pointer"
        onClick={(e) => handleLeftClick(e)}
      >
        <div className="   w-6 h-6 rounded-full border-2 border-green-100 hover:border-2 hover:border-white  hover:scale-150 duration-200">
          <img className=" rotate-180 object-fill rounded-full"  src="../img/ar.png" alt=""/>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
