import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

type MathFunction = (a: number, b: number) => number;
type Setter = Dispatch<SetStateAction<number>>;

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const MATH_FUNCTIONS = new Map([
  [add, '➕'],
  [subtract, '➖'],
  [multiply, '✖️'],
  [divide, '➗'],
]);

const buildOnChange = (setter: Setter): ChangeEventHandler<HTMLInputElement> => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setter(value ? parseFloat(value) : 0);
  };
};

export function StoringFunctions(): JSX.Element {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [mathFunction, setMathFunction] = useState<MathFunction>(() => add);

  const buildClickHandler = (fn: MathFunction) => {
    return () => {
      setMathFunction(() => fn);
    };
  };

  return (
    <>
      <div>Storing function in useState</div>
      <div style={{ display: 'flex', gap: '4px', marginTop: '16px' }}>
        <button onClick={buildClickHandler(add)} disabled={mathFunction === add}>
          {MATH_FUNCTIONS.get(add)} Add
        </button>
        <button onClick={buildClickHandler(subtract)} disabled={mathFunction === subtract}>
          {MATH_FUNCTIONS.get(subtract)} Subtract
        </button>
        <button onClick={buildClickHandler(multiply)} disabled={mathFunction === multiply}>
          {MATH_FUNCTIONS.get(multiply)} Multiply
        </button>
        <button onClick={buildClickHandler(divide)} disabled={mathFunction === divide}>
          {MATH_FUNCTIONS.get(divide)} Divide
        </button>
      </div>

      <div style={{ display: 'flex', gap: '4px', marginTop: '16px' }}>
        <input type="number" value={a} onChange={buildOnChange(setA)} />
        <div style={{ minWidth: 10, textAlign: 'center' }}>{MATH_FUNCTIONS.get(mathFunction)}</div>
        <input type="number" value={b} onChange={buildOnChange(setB)} />
        <span> = {mathFunction ? mathFunction(a, b) : ''}</span>
      </div>
    </>
  );
}
