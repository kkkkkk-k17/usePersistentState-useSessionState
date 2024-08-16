import {useState} from 'react';
import {usePersistentState, useSessionState} from '../hooks';
import {MappedData} from '../interfaces.ts';

const Number = () => {
  const [count, setCount] = useState<number>(0);
  const [persistentState, setPersistentState] = usePersistentState<number>(0);
  const [sessionState, setSessionState] = useSessionState<number>(0);

  const numberData: MappedData<number>[] = [
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
      <h2>Number</h2>
      {numberData.map(({name, state, setState}) => (
        <div className="card" key={name}>
          <h4>{name}</h4>
          <div>
            <button onClick={() => setState(state + 1)}>count is {state}</button>
            <button onClick={() => setState(0)}>Reset</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Number;
