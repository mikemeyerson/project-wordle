import React from "react";
import { KEYBOARD_ROWS } from "../../constants";
import { getLetterStatuses } from "../../game-helpers";
import classNames from "classnames";

function Keyboard({ disabled, guesses = [], onKeyPress }) {
  const letterStatuses = getLetterStatuses(guesses);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row) => (
        <div key={row.join("-")} className="keyboard-row">
          {row.map((letter) => (
            <button
              type="button"
              className={classNames("letter", letterStatuses[letter])}
              disabled={disabled}
              key={letter}
              onClick={() => onKeyPress(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
