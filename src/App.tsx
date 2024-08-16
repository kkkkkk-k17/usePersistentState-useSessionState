import './App.css';
import {Number, String, Array, Object} from './components';

const clearAll = () => {
  localStorage.clear();
  sessionStorage.clear();
};

function App() {
  return (
    <>
      <div className="row">
        <button onClick={() => sessionStorage.clear()}>Clear session storage</button>
        <button onClick={() => clearAll()}>Clear all</button>
        <button onClick={() => localStorage.clear()}>Clear local storage</button>
      </div>
      <div className="layout">
        <String />
        <Number />
        <Array />
        <Object />
      </div>
    </>
  );
}

export default App;
