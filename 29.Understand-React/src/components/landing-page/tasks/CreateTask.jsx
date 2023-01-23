// CreateTask.jsx

import { useState } from 'react';

const CreateTask = ({ addNewTask }) => {
    const [text, setText] = useState('sample task');

    return (
        <div>
            <input
                type="text"
                placeholder="type your task"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button
                onClick={() => {
                    if(text) {
                        addNewTask(text);
                    setText('');
                    } else {
                        alert('Fill up input from')
                    }
                }}
            >
                Create Task
            </button>
        </div>
    );
};

export default CreateTask;
