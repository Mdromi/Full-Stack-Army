import { useStoreState } from "easy-peasy";

const Count = () => {
  const { value } = useStoreState((state) => state.count);
  return (
    <div>
      <h2>Counter: {value}</h2>
    </div>
  );
};

export default Count;

// import { useSelector } from "react-redux";
// import {} from "../store2";

// const Count = () => {
//   const count = useSelector((state) => state.count);
//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//     </div>
//   );
// };

// export default Count;
