import { react } from "react";
import { useState } from "react";
import "./App.css";
import ColorCards from "./ColorCards";
import { nanoid } from "nanoid";
import NewColorForm from "./NewColorForm";

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
  function deleteCard(singleCard) {
    setColorCards(
      colorCards.filter((colorCard) => {
        return colorCard.id !== singleCard.id;
      })
    );
  }

  function addCard(color) {
    setColorCards([...colorCards, { id: nanoid(), colorCode: color }]);
  }
  return (
    <div className="App">
      <article className="site__segment site__segment--first">
        <NewColorForm addCards={addCard} />
      </article>
      <article className="site__segment">
        {colorCards.map((card) => {
          return <ColorCards singleCard={card} handleCards={deleteCard} />;
        })}
      </article>
    </div>
  );
}

export default App;
