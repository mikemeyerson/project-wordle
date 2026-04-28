import classNames from "classnames";
import React from "react";

function Banner({ type, numGuesses, answer, onRestart }) {
  if (type === "happy") {
    return (
      <div className={classNames("banner", type)}>
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
        <button type="button" onClick={onRestart}>Restart Game</button>
      </div>
    );
  }

  return (
    <div className={classNames("banner", type)}>
      <p>
        <strong>Sorry!</strong> The correct answer is <strong>{answer}</strong>.
      </p>
      <button type="button" onClick={onRestart}>Restart Game</button>
    </div>
  );
}

export default Banner;
