import LocalClock from "./components/local-clock/index";
import ClockList from "./components/clock-list/index";
import useClock from "./hooks/useClock";

import testDate from "./test/testDate";

function App() {
  testDate();
  return (
    <div className="App">
      <LocalClock />
      <ClockList />
    </div>
  );
}

export default App;
