import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounterState] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounterState((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!counterRef.current) return;
    console.log(counterRef.current);
  }, []);

  useEffect(() => {
    if (counter <= 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black;');
  }, [counter]);

  return {
    counter,
    counterRef,
    handleClick,
  };
};
