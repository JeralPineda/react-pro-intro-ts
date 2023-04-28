import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounterState] = useState(5);

  const handleClick = () => {
    setCounterState((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter <= 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black;');
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
