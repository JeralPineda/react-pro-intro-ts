import { useEffect, useRef, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounterState] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounterState((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  console.log(counterRef.current);

  useEffect(() => {
    if (counter <= 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black;');
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterRef}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
