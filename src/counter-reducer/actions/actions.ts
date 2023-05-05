//Type porque no va crecer, no va cambiar y no va a extenderse para otras cosas
export type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };

// export const doReset = (): CounterAction => {
//   return {
//    type: 'reset'
//   };
// };
export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});
