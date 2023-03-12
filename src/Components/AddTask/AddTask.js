import { useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";

const AddTask = () => {

    const params = useParams();
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { title, description, date } = Object.fromEntries(formData);

        await api.addTask({ title, description, dateEx: date, completed: false, userId: params.employeeId });

        navigate('/')

    }

    return (
        <form className="employee-form" action="" onSubmit={submitHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" defaultValue='' required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="8" cols="50" required></textarea>
            <label htmlFor="date">End Date:</label>
            <input type="date" id="date" name="date" defaultValue='' required />
            <input type="submit" value='Create' />
        </form>
    )
}

export default AddTask;