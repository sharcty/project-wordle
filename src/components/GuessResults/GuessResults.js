import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          className="guess"
          answer={answer}
          result={results[num]?.guess}
        ></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
