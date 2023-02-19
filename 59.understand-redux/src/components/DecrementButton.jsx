import { useStoreActions } from "easy-peasy";

const DecrementButton = () => {
  const { count, history } = useStoreActions((actions) => actions.count);

  const handleClick = () => {
    count.decrement(1);
    history.clearHistory({ actions: "decrement", count: 1 });
  };
  return <button onClick={handleClick}>-</button>;
};

export default DecrementButton;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { addHistory, DECREMENT, decrement } from "../store2";

// const DecrementButton = () => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(decrement(1));
//     dispatch(addHistory({ action: DECREMENT, count: 1 }));
//   };
//   return <button onClick={handleClick}>-</button>;
// };

// export default DecrementButton;
