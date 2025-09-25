import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const result = guess ? guess.toString().split("") : "";
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span key={i} className="cell">
            {result[i] ? result[i] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
