import "./colorCards.css";
import React from "react";

export default function ColorCards({ singleCard, handleCards }) {
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
        className="deleteButton"
        onClick={() => handleCards(singleCard)}
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
