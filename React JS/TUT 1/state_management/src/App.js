import './App.css';
import Counter from './Counter';
import { CounterContext } from './Context/CounterContext'
import { useContext } from 'react';


function App() {
  const ctrContext = useContext(CounterContext)
  
  return (
    
    <div className="App">
      This is State management tutorial
      <h1>The count is {ctrContext.count}</h1>
      <Counter/>
    </div>
  );
}

export default App;
