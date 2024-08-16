import {useEffect, useRef, useState} from 'react';
import {InitialValue, StateAction} from '../interfaces.ts';

let externOrder = 0;

const useSessionState = (initialValue: InitialValue): StateAction => {
  const globalCallCountRef = useRef(externOrder);

  if (globalCallCountRef.current === externOrder) {
    globalCallCountRef.current += 1;
    externOrder += 2;
  }

  const key = `sessionState_${globalCallCountRef.current}`;
  const [state, setState] = useState<InitialValue>(() => {
    const value = sessionStorage.getItem(key);
    return value ? (JSON.parse(value) as InitialValue) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
export default useSessionState;
