import React, { useState } from "react";
import {initalState} from "../constants/consts";

function Carousel() {

    const [cards, setCards] = useState(initalState);

    const handleLeftClick = (isLeft) => {
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

    return (
        <div className="flex gap-6">
            <div
                className=" md:text-5xl cursor-pointer flex items-center"
                onClick={() => handleLeftClick()}
            >
                <div className="w-10 h-20">
                {"<"}
                </div>
            </div>
            {cards
                .filter((f) => f.active === true)
                .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                .map((card, index) => (
                    <div data-id={index} className= {index===1?"w-52 h-52 shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]":"max-w-xs rounded-xl h-44 self-end shrink shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]"} key={index}  ><img className={index===1?"opacity-100 w-52 h-52 object-fill rounded-xl scale-110":"opacity-30 w-44 h-44 object-fill rounded-xl shrink " } src={card.url} alt=""/></div>
                ))}
            <div
                className="flex items-center md:text-5xl cursor-pointer"
                onClick={() => handleRightClick()}
            >
                <div className="w-10 h-20">
                    {">"}
                </div>
            </div>
        </div>
    );
}
export default Carousel;