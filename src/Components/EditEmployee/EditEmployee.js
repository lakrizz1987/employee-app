import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../../service/api";
import './EditEmployee.css';

const EditEmployee = () => {
    const params = useParams();
    const [employee, setEmployee] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getEmployeeData() {
            const result = await api.getOneById(params.id);
            
            result.birthDate = result.birthDate.split('-').reverse().join('-') 
            setEmployee(result)
        }

        getEmployeeData()
    }, [params.id])

    async function editHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { fullName, email, phone, date, salary } = Object.fromEntries(formData);

        await api.editEmployee({ name: fullName, email, phone, birthDate: date.split("-").reverse().join('-'), salary },params.id);

        navigate(`/employee/${params.id}`)

    }
   
    return (
        <>
        <form className="employee-form" action="" onSubmit={editHandler}>
            <label htmlFor="fullName">Full name:</label>
            <input type="text" id="fullName" name="fullName" defaultValue={employee.name} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue={employee.email} required />
            <label htmlFor="email">Phone:</label>
            <input type="number" id="phone" name="phone" defaultValue={employee.phone} required />
            <label htmlFor="date">Birth Date:</label>
            <input type="date" id="date" name="date" defaultValue={employee.birthDate} required />
            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" defaultValue={employee.salary} required />
            <div>
            <Link className="link" to={`/employee/${params.id}`}>Back</Link>
            <input type="submit" value='Edit' />
            </div>
            
        </form>
        
        </>
    )
}

export default EditEmployee;