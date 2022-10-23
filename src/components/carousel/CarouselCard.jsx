import React from "react";

function CarouselCard({ cards, choosePhoto }) {
  return (
    <div className="flex gap-4">
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <div
            key={index}
            onClick={(e) => choosePhoto(e)}
            className={index === 1 ? "carousel_midDiv  " : " carousel_sideDivs"}
            id={index}
          >
            <img
              data-id={index}
              className={
                index === 1 ? "carousel_midImage " : " carousel_sideImages  "
              }
              src={card.url}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}
export default CarouselCard;
