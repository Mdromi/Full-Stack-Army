import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import shortid from 'shortid'
import CreateTask from '../tasks/CreateTask'
import ShowTasks from '../tasks/ShowTasks'


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState('all');

    const addNewTask = (text) => {
        const task = {
            text,
            isCompleted: false,
            createdAt: new Date(),
            id: shortid.generate()
        }
        setTasks([task, ...tasks])
    }

    const toggleComplete = (id) => {
        const newTasks = tasks.map((item) => {
            if(item.id === id)  item.isCompleted = !item.isCompleted
            return item
        })
        setTasks(newTasks)
    }
    
    const handleVisibility = (text) => {
        setVisibility(text)
    }

    let getFilteredTasks = () =>{
        if(visibility === 'completed') return tasks.filter(item => item.isCompleted)
        if(visibility === 'inCompleted') return tasks.filter(item => !item.isCompleted)
        return tasks
    }

    return (
        <Layout>
            <h1>TODO List</h1>
            <CreateTask addNewTask={addNewTask} /> 
            <div>
                <button onClick={() => handleVisibility('all')}>All</button>
                <button onClick={() => handleVisibility('completed')}>Completed</button>
                <button onClick={() => handleVisibility('inCompleted')}>Non Completed</button>
            </div>
            <div>
                selected visibility: {visibility}
            </div>
            <ShowTasks tasks={getFilteredTasks()} toggleComplete={toggleComplete}/>
        </Layout>
    );
}

export default Tasks;
