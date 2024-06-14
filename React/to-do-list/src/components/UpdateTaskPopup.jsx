import React, { useState, useEffect } from "react";
import { CloseButton, Button } from "react-bootstrap";
import '../../src/styles.css';

const UpdateTaskPopup = ({ task, updateTask, togglePopup }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setStatus(task.status);
        }
    }, [task]);

    const handleUpdate = () => {
        if (title.trim()) {
            updateTask(task.title, title, status);
            togglePopup();
        }
    }

    return (
        <div className="newTask">
            <CloseButton className="close" onClick={togglePopup} />
            <div className="content">
                <h1 className="title">Update TODO</h1>
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
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                </div>
                <div className="bottom">
                    <Button className="btn" variant="primary" onClick={handleUpdate}>Update Task</Button>
                    <Button className="btn" variant="secondary" onClick={togglePopup}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default UpdateTaskPopup;
