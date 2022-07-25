import "./colorCards.css";
import "./NewColorForm.css";
import React, { useState } from "react";

export default function NewColorForm({ addCards }) {
  const [inputValue, setInputValue] = useState("#777777");
  return (
    <div className="new-color-form" style={{ backgroundColor: inputValue }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (/^#([0-9A-F]{3}){1,2}$/i.test(inputValue)) {
            addCards(inputValue);
          } else {
            setInputValue("Not a color!");
          }
        }}
      >
        <input
          className="new-color-form__element"
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <input
          className="new-color-form__element"
          type="color"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button className="new-color-form__element" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
