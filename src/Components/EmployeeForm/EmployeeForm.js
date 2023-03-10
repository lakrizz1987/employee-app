import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import './EmloyeeForm.css';

const EmployeeForm = ({ text }) => {
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { fullName, email, phone, date, salary } = Object.fromEntries(formData);

        await api.addEmployee({ name: fullName, email, phone, birthDate: date.split("-").reverse().join('-'), salary });

        navigate('/')

    }


    return (
        <form className="employee-form" action="" onSubmit={submitHandler}>
            <label htmlFor="fullName">Full name:</label>
            <input type="text" id="fullName" name="fullName" defaultValue='' required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue='' required />
            <label htmlFor="email">Phone:</label>
            <input type="number" id="phone" name="phone" defaultValue='' required />
            <label htmlFor="date">Birth Date:</label>
            <input type="date" id="date" name="date" defaultValue='' required />
            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" defaultValue='' required />
            <input type="submit" value={text} />
        </form>
    )
}

export default EmployeeForm;