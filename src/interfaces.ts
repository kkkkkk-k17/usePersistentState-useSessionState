import {Dispatch, SetStateAction} from 'react';

export interface MappedData<T> {
  name: string;
  state: T;
  setState: Dispatch<SetStateAction<T>>;
}
export type FullName = {firstName: string; lastName: string} | Record<string, string>;
export type InitialValue = string | number | string[] | FullName;
export type StateAction = [InitialValue, Dispatch<SetStateAction<InitialValue>>];
