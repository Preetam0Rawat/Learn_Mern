import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/signin' element = {<Signin/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
