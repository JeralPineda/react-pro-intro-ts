import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <CounterBy initialValue={10} />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
    </>
  );
}

export default App;
