import "./colorCards.css";
import React from "react";
import { nanoid } from "nanoid";

export default function ColorCards() {
  const colorCards = [
    {
      id: nanoid(),
      colorCode: "#ccc",
    },
    {
      id: nanoid(),
      colorCode: "#4c6ef5",
    },
    {
      id: nanoid(),
      colorCode: "#82c91e",
    },
    {
      id: nanoid(),
      colorCode: "#12b886",
    },
    {
      id: nanoid(),
      colorCode: "#82c91e",
    },
    {
      id: nanoid(),
      colorCode: "#ccc",
    },
  ];
  return (
    <>
      {colorCards.map((card) => {
        return (
          <div
            className="colorCards"
            style={{
              background: card.colorCode,
            }}
            key={card.id}
          >
            <button type="button" className="colorButton">
              {card.colorCode}
            </button>
          </div>
        );
      })}
    </>
  );
}
