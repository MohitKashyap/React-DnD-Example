import logo from './logo.svg';
import './App.css';
import Kanban from './Kanban';
import Scheduler from './scheduler/Scheduler';
import { useState } from 'react';
function App() {
  const [module, setModule] = useState(true)

  return (
    <div className="App">
      <div className="App-header">
        <button className="button" onClick={() => { setModule(!module) }}>{module ? "Scheduler" : "Kanban"}</button>
      </div>
      {module === true ? <Scheduler /> : <Kanban />}
    </div>
  );
}

export default App;
