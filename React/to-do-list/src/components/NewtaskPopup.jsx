import React, { useState } from "react";
import '../../src/styles.css';
import { CloseButton, Button } from "react-bootstrap";

const NewTaskPopup = ({ addTask, togglePopup }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Incomplete");

    const handleTask = () => {
        if (title.trim()) {
            addTask(title, status);
            setTitle("");
            setStatus("Incomplete");
            togglePopup(); // Close the popup after adding the task
        }
    }

    return (
        <div className="newTask">
            <CloseButton className="close" onClick={togglePopup} />
            <div className="content">
                <h1 className="title">Add TODO</h1>
                <div className="userInput">
                    <div className="input inp1">
                        <h3>Title</h3>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input inp2">
                        <h3>Status</h3>
                        <select
                            name="status"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option value="Incomplete">Incomplete</option>
                            <option value="Complete">Completed</option>
                        </select>
                    </div>
                </div>
                <div className="bottom">
                    <Button className="btn" variant="primary" onClick={handleTask}>Add Task</Button>
                    <Button className="btn" variant="secondary" onClick={togglePopup}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default NewTaskPopup;
