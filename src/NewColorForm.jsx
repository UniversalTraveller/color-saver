import "./colorCards.css";
import React, { useState } from "react";

export default function NewColorForm({ addCards }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="colorCards">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addCards(inputValue);
        }}
      >
        <input
          required
          type="color"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit" className="colorButton">
          Add
        </button>
      </form>
    </div>
  );
}
