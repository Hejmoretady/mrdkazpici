import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [doubleMode, setDoubleMode] = useState(false);

  const increment = () => {
    if (count < 10) setCount(count + (doubleMode ? 2 : 1));
  };

  const decrement = () => {
    if (count > -10) setCount(count - (doubleMode ? 2 : 1));
  };

  const reset = () => setCount(0);

  return (
    <div>
      <p>Počet: {count}</p>
      <button onClick={increment}>Přidat</button>
      <button onClick={decrement}>Odebrat</button>
      <button onClick={reset}>Resetovat</button>
      <button onClick={() => setDoubleMode(!doubleMode)}>
        {doubleMode ? "Vypnout dvojitý mód" : "Zapnout dvojitý mód"}
      </button>
    </div>
  );
};
