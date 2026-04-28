import React from 'react';

function Input({ onSubmit }) {
  const id = React.useId();
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor={id}>Enter guess:</label>
      <input id={id} type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} pattern="[A-Za-z]{5}" maxLength={5} minLength={5} required />
    </form>
  )

}

export default Input;
