import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ])

    const removeTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }



    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }




    return (
        <div className="App">
            <Todolist title='What to learn' tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter} />
            {/* <Todolist title='Songs' tasks={tasks2} /> */}
        </div>
    );
}

export default App;
