import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";

function Guesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowCount) => (
        <p key={rowCount} className="guess">
          {range(0, WORD_LENGTH).map((colCount) => (
            <span key={colCount} className="cell">{guesses[rowCount]?.[colCount] ?? ''}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
