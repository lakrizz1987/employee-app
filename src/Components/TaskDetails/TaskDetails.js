import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import api from "../../service/api";
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        async function getTask() {
            const result = await api.getOneTaskById(params.id);
            setTask(result)
        }
        getTask()
    }, [params.id])

    return (
        task ?
            <div className="task-details-box">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>End date: {task.dateEx}</p>
                <div className="btn-box">
                    <Link className="button-details" to={`/`}>Back</Link>
                    <Link className="button-details" to={`/edit-task/${params.id}`}>Edit</Link>
                    <Link className="button-details" to={`/delete-task/${params.id}`}>Delete</Link>
                    <Link className="button-details" to={`/complete/${params.id}/${params.employeeId}`}>Done</Link>
                </div>
            </div>
            :''
    )
}

export default TaskDetails;