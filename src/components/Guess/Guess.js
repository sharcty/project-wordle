import React from "react";
import { range } from "../../utils";
import { checkGuess } from "/src/game-helpers.js";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ result, answer }) {
  const check = checkGuess(result, answer);
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <Cell
            key={i}
            letter={check ? check[i].letter : undefined}
            status={check ? check[i].status : undefined}
          ></Cell>
        );
      })}
    </p>
  );
}

export default Guess;
