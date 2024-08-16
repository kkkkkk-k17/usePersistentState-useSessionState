import {useState} from 'react';
import {usePersistentState, useSessionState} from '../hooks';
import {MappedData} from '../interfaces.ts';

const Array = () => {
  const [count, setCount] = useState([]);
  const [persistentState, setPersistentState] = usePersistentState([]);
  const [sessionState, setSessionState] = useSessionState([]);

  const arrayData: MappedData<string[]>[] = [
    {
      name: 'useState',
      state: count,
      setState: setCount,
    },
    {
      name: 'usePersistentState',
      state: persistentState,
      setState: setPersistentState,
    },
    {
      name: 'useSessionState',
      state: sessionState,
      setState: setSessionState,
    },
  ];

  return (
    <div className="container">
      <h2>Array</h2>
      {arrayData.map(({name, state, setState}) => (
        <div className="card" key={name}>
          <h4>{name}</h4>
          {state?.map((item, index) => <div key={index}>{item}</div>)}
          <div>
            <button onClick={() => setState([...state, 'katya'])}>Push</button>
            <button onClick={() => setState([])}>Reset</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Array;
