import "./colorCards.css";
import React from "react";

export default function ColorCards({ singleCard, cardSet, handleCards }) {
  return (
    <div
      className="colorCards"
      style={{
        background: singleCard.colorCode,
      }}
      key={singleCard.id}
    >
      {" "}
      <button
        type="button"
        className="colorButton"
        onClick={() =>
          handleCards(
            cardSet.filter((colorCard) => {
              return colorCard.id !== singleCard.id;
            })
          )
        }
      >
        x
      </button>
      <button
        type="button"
        className="colorButton"
        onClick={() => navigator.clipboard.writeText(singleCard.colorCode)}
      >
        {singleCard.colorCode}
      </button>
    </div>
  );
}
