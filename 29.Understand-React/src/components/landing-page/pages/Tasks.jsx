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
    

    return (
        <Layout>
            <h1>TODO List</h1>
            <CreateTask addNewTask={addNewTask} />
            <ShowTasks tasks={tasks} />
        </Layout>
    );
}

export default Tasks;
