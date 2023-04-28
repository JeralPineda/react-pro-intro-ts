import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <CounterBy initialValue={10} />
      <hr />
      <CounterEffect />
      <hr />
    </>
  );
}

export default App;
