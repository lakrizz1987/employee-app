import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./Home.css"

const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function getAllEmployees() {
            const employees = await api.getAll();
            
            const data = [];
            for (const key in employees) {
                data.push({
                    id: key,
                    birthDate: employees[key].birthDate,
                    email: employees[key].email,
                    name: employees[key].name,
                    phone: employees[key].phone,
                    salary: employees[key].salary
                })
            }

            setEmployees(data);
        }

        getAllEmployees();
    }, [])

    return (
        <section className="table-box">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Task</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>
                                    <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
                                </td>
                                <td>Francisco Chang</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Home;