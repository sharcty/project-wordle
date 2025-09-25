import React from "react";

function GuessInput({ handleSubmitGuesses }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuesses(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextPrompt = event.target.value.toUpperCase();
          setGuess(nextPrompt);
        }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
