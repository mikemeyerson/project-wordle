import classNames from "classnames";
import React from "react";

function Banner({ type, numGuesses, answer }) {
  if (type === "happy") {
    return (
      <div className={classNames("banner", type)}>
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className={classNames("banner", type)}>
      <p>
        <strong>Sorry!</strong> The correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
