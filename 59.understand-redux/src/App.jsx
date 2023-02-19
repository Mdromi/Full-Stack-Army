import Count from "./components/Count";
import IncrementButton from "./components/IncrementButton";

function App() {
  //   const state = useSelector((state) => state);
  //   console.log("All Store", state);
  return (
    <div className="App">
      <Count />
      <IncrementButton />
      {/* <DecrementButton />
      <History /> */}
    </div>
  );
}

export default App;
