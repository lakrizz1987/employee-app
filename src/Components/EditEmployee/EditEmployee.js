import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../service/api";

const EditEmployee = () => {
    const params = useParams();
    const [employee, setEmployee] = useState('');

    useEffect(() => {
        async function getEmployeeData() {
            const result = await api.getOneById(params.id);
            
            result.birthDate = result.birthDate.split('-').reverse().join('-') 
            setEmployee(result)
            
        }

        getEmployeeData()
    }, [params.id])
   
    return (
        <form className="employee-form" action="" >
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
            <input type="submit" defaultValue={'Edit'} />
        </form>
    )
}

export default EditEmployee;