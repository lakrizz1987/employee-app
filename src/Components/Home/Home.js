import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./Home.css"

const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function getAllEmployees() {
            const employees = await api.getAll();
            const tasks = await api.getAllTasks();
            
            const data = [];
            for (const key in employees) {
                let searchedTask = '';

                for (const task of Object.entries(tasks)) {
                    if(task[1].userId === key && task[1].completed === false){
                        searchedTask = task
                        
                    }
                }
                //const searchedTask = Object.entries(tasks)[0].filter(task => task.userId === key && task.completed === false)[0];
                
                data.push({
                    id: key,
                    birthDate: employees[key].birthDate,
                    email: employees[key].email,
                    name: employees[key].name,
                    phone: employees[key].phone,
                    salary: employees[key].salary,
                    task: searchedTask
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
                        <th>Tasks</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>
                                    <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
                                </td>
                                <td>{employee.task ?
                                    <>
                                        <p>{employee.task[1].title}</p>
                                        <Link to={`/task/${employee.task[0]}`}>View more</Link>
                                    </>
                                    :
                                    <>
                                        <p>No tasks</p>
                                        <Link>Add task</Link>
                                    </>
                                }</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Home;