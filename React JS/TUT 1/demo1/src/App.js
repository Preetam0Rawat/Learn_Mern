import React from 'react';
import './App.css';
import ComponentA from './useContext/ComponentA';
import Fetching from './useEffect/Fetching';
import Fetching2 from './useEffect/Fetching2';
import UseEffectHook1 from './useEffect/UseEffectHook1';
import UseEffectHook2 from './useEffect/UseEffectHook2';
import UseStateHook1 from './useState/UseStateHook1';
import UseStateHook2 from './useState/UseStateHook2';
import UseStateHook3 from './useState/UseStateHook3';
import UseStateHoook3_1 from './useState/UseStateHoook3_1';


export const userContext = React.createContext()
export const idContext = React.createContext()

function App() {
  return (
    <div>
      {/* <UseStateHook1/> */}
      {/* <UseStateHook2/> */}
      {/* <UseStateHook3/> */}
      {/* <UseStateHoook3_1/> */}
      {/* <UseEffectHook1/> */}
      {/* <UseEffectHook2/> */}
      {/* <Fetching/> */}
      {/* <Fetching2/> */}


      <userContext.Provider value={'Preetam'}>
        <idContext.Provider value={'69'}>
          <ComponentA />
        </idContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
