import React from "react";

const ShowTasks = ({ tasks, toggleComplete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Task Found</p>
      )}
    </div>
  );
};

export default ShowTasks;
