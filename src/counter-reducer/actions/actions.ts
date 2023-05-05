//Type porque no va crecer, no va cambiar y no va a extenderse para otras cosas
export type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };
