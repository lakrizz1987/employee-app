import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../../service/api";

const EditTask = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [task,setTask] = useState();

    useEffect(() => {
        async function getTaskData() {
            const result = await api.getOneTaskById(params.id);
             
            setTask(result)
        }

        getTaskData()
    }, [params.id])

    async function editHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { title, description, date } = Object.fromEntries(formData);

        await api.editTask({ title, description, dateEx: date },params.id);

        navigate(`/task/${params.id}`)

    }

    return (
        task ?
        <form className="employee-form" action="" onSubmit={editHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" defaultValue={task.title} required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="8" cols="50" defaultValue={task.description} required></textarea>
            <label htmlFor="date">End Date:</label>
            <input type="date" id="date" name="date" defaultValue={task.dateEx} required />
            <div>
            <Link className="link" to={`/task/${params.id}`}>Back</Link>
            <input type="submit" value='Edit' />
            </div>
        </form>
        : ''
    )
}

export default EditTask;