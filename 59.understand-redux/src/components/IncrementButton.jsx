import { useStoreActions } from "easy-peasy";

const IncrementButton = () => {
  const { count, history } = useStoreActions((actions) => actions);

  const handleClick = () => {
    count.increment(1);
    history.addHistory({ actions: "increment", count: 1 });
  };
  return <button onClick={handleClick}>+</button>;
};

export default IncrementButton;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { addHistory, increment, INCREMENT } from "../store2";

// const IncrementButton = () => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(increment(1));
//     dispatch(addHistory({ action: INCREMENT, count: 1 }));
//   };
//   return <button onClick={handleClick}>+</button>;
// };

// export default IncrementButton;
