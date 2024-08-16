import {useState, useEffect, useRef} from 'react';
import {InitialValue, StateAction} from '../interfaces.ts';

let externOrder = 0;

const usePersistentState = (initialValue: InitialValue): StateAction => {
  const globalCallCountRef = useRef(externOrder);

  if (globalCallCountRef.current === externOrder) {
    globalCallCountRef.current += 1;
    externOrder += 2;
  }

  const key = `persistentState_${globalCallCountRef.current}`;

  const [state, setState] = useState<InitialValue>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as InitialValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistentState;
