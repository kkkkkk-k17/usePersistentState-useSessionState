import {useState} from 'react';
import {usePersistentState, useSessionState} from '../hooks';
import {FullName, MappedData} from '../interfaces.ts';

const Object = () => {
  const [fullName, setFullName] = useState<FullName>({});
  const [persistentState, setPersistentState] = usePersistentState<FullName>({});
  const [sessionState, setSessionState] = useSessionState<FullName>({});

  const objectData: MappedData<FullName>[] = [
    {
      name: 'useState',
      state: fullName,
      setState: setFullName,
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
      <h2>Object</h2>
      {objectData.map(({name, state, setState}) => (
        <div className="card" key={name}>
          <h4>{name}</h4>
          <div>
            <input
              type="text"
              placeholder="First name"
              onChange={e => setState({...state, firstName: e.target.value})}
              value={state.firstName}
            />
            <button onClick={() => setState({...state, firstName: ''})}>Clear</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              onChange={e => setState({...state, lastName: e.target.value})}
              value={state.lastName}
            />
            <button onClick={() => setState({...state, lastName: ''})}>Clear</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Object;
