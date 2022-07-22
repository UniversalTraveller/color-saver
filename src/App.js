import { react } from "react";
import { useState } from "react";
import "./App.css";
import ColorCards from "./ColorCards";
import { nanoid } from "nanoid";

function App() {
  const [colorCards, setColorCards] = useState([
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
  ]);
  return (
    <div className="App">
      {colorCards.map((card) => {
        return (
          <ColorCards
            singleCard={card}
            cardSet={colorCards}
            handleCards={setColorCards}
          />
        );
      })}
    </div>
  );
}

export default App;
