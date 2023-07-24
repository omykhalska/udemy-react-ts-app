import { useEffect, useState } from 'react';

const STYLES = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    border: 'dashed 2px tomato',
    padding: '8px',
    fontSize: '24px',
  },
  button: {
    backgroundColor: '#fff',
    padding: '10px 20px',
    border: '2px solid #bbbbbb',
    fontSize: '16px',
    fontWeight: '400',
    outline: 'none',
    cursor: 'pointer',
  },
};
const DELTA = 1;
const STORAGE_KEY = 'value';

export const LocalStorageSync = (): JSX.Element => {
  const [value, setValue] = useState<number | null>(null);

  const onIncrement = () => setValue(prevValue => (prevValue || 0) + DELTA);
  const onDecrement = () => setValue(prevValue => (prevValue || 0) - DELTA);

  useEffect(function readFromStorage() {
    try {
      const valueStored = localStorage.getItem(STORAGE_KEY) || '0';
      setValue(parseInt(valueStored));
    } catch (error) {
      console.error('could not read from a local storage');
      console.error(error);
    }
  }, []);

  useEffect(
    function writeToLocalStorage() {
      if (value === null) return;
      try {
        const stringValue = String(value);
        localStorage.setItem(STORAGE_KEY, stringValue);
      } catch (error) {
        console.error('could not write to the local storage');
        console.error(error);
      }
    },
    [value],
  );

  return (
    <div style={STYLES.container}>
      <button style={STYLES.button} onClick={onDecrement}>
        - {DELTA}
      </button>
      <span>{value ?? 0}</span>
      <button style={STYLES.button} onClick={onIncrement}>
        + {DELTA}
      </button>
    </div>
  );
};
