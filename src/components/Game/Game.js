import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleSubmitGuesses(guess) {
    let result = {
      guess,
      id: crypto.randomUUID(),
    };
    let newResults = [...results, result];
    setResults(newResults);
    if (guess === answer) {
      setStatus("won");
    }
    else if (results.length+1 >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("loss");
    }
  }

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput
        handleSubmitGuesses={handleSubmitGuesses}
        status={status}
        setStatus={setStatus}
      />
      <Banner status={status} numGuesses={results.length}></Banner>
    </>
  );
}

function Banner({ status, numGuesses }) {
  return (
    <>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}</strong>.
          </p>
        </div>
      )}
      {status === "loss" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
