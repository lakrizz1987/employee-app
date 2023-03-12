import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./Home.css"

const Home = () => {

    const [employees, setEmployees] = useState([]);
    const [allTasks, setAllTasks] = useState();

    useEffect(() => {
        async function getAllEmployees() {
            const employees = await api.getAll();
            const tasks = await api.getAllTasks();
            setAllTasks(tasks);

            const data = [];
            for (const key in employees) {
                let searchedTask = '';

                for (const task of Object.entries(tasks)) {
                    if (task[1].userId === key && task[1].completed === false) {
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
                    task: searchedTask,
                    completedTasks: employees[key].completedTasks
                })
            }

            setEmployees(data.sort((a, b) => a.name.localeCompare(b.name)));
        }

        getAllEmployees();
    }, [])

    function sortHandler(e) {
        if (e.target.value === 'Completed tasks') {
            setEmployees(state => {
                state.sort((a, b) => b.completedTasks.length - a.completedTasks.length);
                return [...state]
            })
        }else if(e.target.value === 'Name'){
            setEmployees(state => {
                state.sort((a, b) => a.name.localeCompare(b.name));
                return [...state]
            })
        }

    }
    
    return (
        employees ?
        <>
            <section className="table-box">
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select name="sort" defaultValue={'Name'} onChange={sortHandler}>
                        <option>Name</option>
                        <option>Completed tasks</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Full Name</th>
                            <th>Tasks</th>
                            <th>Completed Tasks</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee, index) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{Number(index) + 1}</td>
                                    <td>
                                        <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
                                    </td>
                                    <td>{employee.task ?
                                        <>
                                            <p>{employee.task[1].title}</p>
                                            <Link to={`/task/${employee.task[0]}/${employee.id}`}>View more</Link>
                                        </>
                                        :
                                        <>
                                            <p>No tasks</p>
                                            <Link to={`/create-task/${employee.id}`}>Add task</Link>
                                        </>
                                    }</td>
                                    <td>{employee.completedTasks.length - 1}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </>
        : ''
    )
}

export default Home;