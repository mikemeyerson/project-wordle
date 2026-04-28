import React from "react";
import Keyboard from "../Keyboard";

function Input({ disabled, guesses, onSubmit }) {
  const id = React.useId();
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(guess);
    setGuess("");
  };

  const onKeyPress = (letter) => {
    setGuess(guess + letter);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor={id}>Enter guess:</label>
      <input
        disabled={disabled}
        id={id}
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        maxLength={5}
        required
      />
      <Keyboard
        disabled={disabled || guess.length === 5}
        guesses={guesses}
        onKeyPress={onKeyPress}
      />
    </form>
  );
}

export default Input;
