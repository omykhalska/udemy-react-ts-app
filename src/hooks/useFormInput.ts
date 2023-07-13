import { useState } from 'react';
import { DeepPartial } from 'tsdef';
import { merge, cloneDeep } from 'lodash';

export interface InitialData {
  name: string;
  surname: string;
  age: number;
}

type UseFormInput<T> = [T, (newData: DeepPartial<T>) => void];

export const useFormInput = <T>(initialValue: T): UseFormInput<T> => {
  const [data, setData] = useState(initialValue);

  const updateData = (newData: DeepPartial<T>) => {
    setData(prevData => {
      const copy = cloneDeep(prevData);
      return merge(copy, newData);
    });
  };

  return [data, updateData];
};
