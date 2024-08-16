import {useState} from 'react';
import {usePersistentState, useSessionState} from '../hooks';
import {MappedData} from '../interfaces.ts';

const String = () => {
  const [nickname, setNickname] = useState<string>('');
  const [persistentState, setPersistentState] = usePersistentState<string>('');
  const [sessionState, setSessionState] = useSessionState<string>('');

  const stringData: MappedData<string>[] = [
    {
      name: 'useState',
      state: nickname,
      setState: setNickname,
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
      <h2>String</h2>
      {stringData.map(({name, state, setState}) => (
        <div className="card" key={name}>
          <h4>{name}</h4>
          <div>
            <input
              type="text"
              placeholder="Nickname"
              onChange={e => setState(e.target.value)}
              value={state}
            />
            <button onClick={() => setState('')}>Clear</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default String;
