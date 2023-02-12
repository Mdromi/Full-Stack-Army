import { useState } from 'react';
import LocalClock from "./components/local-clock/index";
import ClockList from "./components/clock-list/index";
import useClock from "./hooks/useClock";


const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});

  const updateLocalClock = data => {
    setLocalClock({
      ...localClock,
      ...data,
    })
  }
  return (
    
    <div className="App">
      <LocalClock clock={localClock} updateClock={updateLocalClock}/>
      <ClockList />
    </div>
  );
}

export default App;
