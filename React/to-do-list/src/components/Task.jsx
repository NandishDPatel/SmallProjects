import React, { useEffect, useState } from "react";
import UpdateTaskPopup from "./UpdateTaskPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Task = ({ title, status, deleteTask, updateTask }) => {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [createDate, setDate] = useState("");
    const [createTime, setTime] = useState("");

    useEffect(() => {
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();
        setDate(currDate);
        setTime(currTime);
    }, []);
    
    return (
        <div className="displayTask">
            <ul className="list">
                <div className="box">
                    <div className="ibox box1">
                        <div className="checkbox">
                            <input type="checkbox" checked={status === "Complete"} />
                        </div>
                        <div className="info">
                            <div className="heading"><b>Title:</b> {title}</div>
                            <div className="date">{createTime} || {createDate}</div>
                        </div>
                    </div>
                    <div className="ibox box2">
                        <button onClick={() => deleteTask(title)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button onClick={() => setIsEditVisible(true)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                </div>
            </ul>
            {isEditVisible && 
                <UpdateTaskPopup 
                    task={{ title, status }} 
                    updateTask={updateTask} 
                    togglePopup={() => setIsEditVisible(false)} 
                />
            }
        </div>
    );
}

export default Task;
