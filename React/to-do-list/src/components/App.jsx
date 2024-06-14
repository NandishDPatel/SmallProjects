import React, { useState } from "react";
import Navbar from "./Navbar";
import Task from "./Task";
import Header from "./Header";
import '../../src/styles.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const[filter,setFilter] = useState("all");

    const addTask = (title, status) => {
        setTasks([...tasks, { title, status }]);
    }

    const deleteTask = (titleToDelete) => {
        setTasks(tasks.filter(task => task.title !== titleToDelete));
    }

    const updateTask = (oldTitle, newTitle, newStatus) => {
        setTasks(tasks.map(task => 
            task.title === oldTitle ? { title: newTitle, status: newStatus } : task
        ));
    }

    const getFilteredTasks = () => {
        if(filter === "all"){
            return tasks;
        }
        return tasks.filter(task => task.status.toLowerCase() === filter);
    }
    return (
        <div>
            <Header />
            <Navbar addTask={addTask} setFilter={setFilter}/>
            <div className="taskList">
            {getFilteredTasks().map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        status={task.status}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
