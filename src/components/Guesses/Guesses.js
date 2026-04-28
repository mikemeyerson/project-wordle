import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import classNames from "classnames";

function Guesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowCount) => (
        <p key={guesses[rowCount]?.id ?? rowCount} className="guess">
          {range(0, WORD_LENGTH).map((colCount) => {
            const { guess = [] } = guesses[rowCount] ?? {};
            const { letter = "", status = "" } = guess?.[colCount] ?? {};

            return (
              <span key={colCount} className={classNames("cell", status)}>
                {letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
