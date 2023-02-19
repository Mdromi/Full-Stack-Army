import { useStoreActions, useStoreState } from "easy-peasy";

const History = () => {
  const { items } = useStoreState((state) => state.history);
  const { clearHistory } = useStoreActions((actions) => actions.history);
  return (
    <div>
      <p>
        History <button onClick={clearHistory()}>Clear History</button>
      </p>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              {item.action} - {item.count} - {item.time.toISOString()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default History;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearHistory } from "../store2";

// const History = () => {
//   const history = useSelector((state) => state.history);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <p>
//         History{" "}
//         <button onClick={() => dispatch(clearHistory())}>Clear History</button>
//       </p>
//       <ul>
//         {history.map((item) => (
//           <li key={item.id}>
//             {item.action} - {item.count} - {item.time.toISOString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default History;
