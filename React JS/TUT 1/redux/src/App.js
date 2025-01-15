import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/CounterSlice';

function App() {

  const count = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
