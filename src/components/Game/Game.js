import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guesses from "../Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const newAnswer = sample(WORDS);
    console.info({ answer: newAnswer });
    return newAnswer;
  });
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

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer: newAnswer });
    setGuesses([]);
    setEndType(null);
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
        <Banner
          type={endType}
          numGuesses={guesses.length}
          answer={answer}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
