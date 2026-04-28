import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guesses from "../Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endType, setEndType] = React.useState(null);

  const handleSubmit = (text) => {
    const guess = checkGuess(text, answer);
    setGuesses([...guesses, { id: crypto.randomUUID(), guess }]);

    if (guess.every((letter) => letter.status === "correct")) {
      setEndType("happy");
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setEndType("sad");
    }
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <Input
        guesses={guesses}
        onSubmit={handleSubmit}
        disabled={endType !== null}
      />
      {endType && (
        <Banner type={endType} numGuesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
