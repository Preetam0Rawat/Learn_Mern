import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Submit from './Submit';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import About from './About';
import Videos from './Videos';
import Notes from './Notes';
import User from './User';
import Userdetails from './Userdetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>                     {/* Type 1: Routing without parameters */}
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/submit' element={<Submit />}></Route>


        <Route path='*' element={<NoMatch />}></Route>               {/* Type 4: Default route */}


        <Route path='/about' element={<About />}>                  {/* Type 3: Nested route */}
          <Route path='videos' element={<Videos />} />
          <Route path='notes' element={<Notes />} />
        </Route>

        <Route path='/user' element={<User/>}></Route>
        <Route path='/user/:userid' element={<Userdetails/>}></Route>    {/* Type 2: Routing wiht parameters aka dynamic routing */}
        </Routes>
    </div>
  );
}

export default App;
