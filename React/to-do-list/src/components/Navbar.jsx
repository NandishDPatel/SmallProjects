import React, { useState } from "react";
import { Button } from "react-bootstrap";
import '../../src/styles.css';
import NewtaskPopup from "./NewtaskPopup";

function Navbar({addTask,setFilter}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleAddTask = () => {
        setIsVisible(!isVisible);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }
    return (
        <>
            <div className="navbar">
                <Button className="btn btn1" onClick={handleAddTask}>
                    {isVisible ? 'Add Task' : 'Add Task'}
                </Button>
                <select className="btn btn2" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                </select>
            </div>
            {isVisible && <NewtaskPopup addTask={addTask} togglePopup={handleAddTask}/>}
        </>
    );
}

export default Navbar;
