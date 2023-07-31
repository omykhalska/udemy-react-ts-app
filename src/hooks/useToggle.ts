import { useReducer, useState } from 'react';

type ToggleReducer = (state: boolean) => boolean;
type Toggle = [boolean, () => void];

export const useToggle = (initialValue: boolean) => {
  return useReducer<ToggleReducer>(state => !state, initialValue || false);
};

export const useToggleWithUseState = (initialState: boolean): Toggle => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(value => !value);

  return [state, toggle];
};
