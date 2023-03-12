import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../service/api";
import "./EmployeeDetails.css"
import '../Home/Home.css';
import Loader from "../Loader/Loader";

const EmployeeDetails = () => {

    const [currentEmpl, setCurrent] = useState('')
    const params = useParams();

    useEffect(() => {
        async function getOneEmployee() {
            const data = await api.getOneById(params.id);
            setCurrent(data)
        }

        getOneEmployee()

    }, [params.id])

    return (
        currentEmpl ?
            <>
                <section className="details-box">
                    <table>

                        <tbody>

                            <tr>
                                <td className="details-titles">
                                    NAME
                                </td>
                                <td>{currentEmpl.name}</td>
                            </tr>
                            <tr>
                                <td className="details-titles">
                                    Email
                                </td>
                                <td>{currentEmpl.email}</td>
                            </tr>
                            <tr>
                                <td className="details-titles">
                                    Birth Date
                                </td>
                                <td>{currentEmpl.birthDate}</td>
                            </tr>
                            <tr>
                                <td className="details-titles">
                                    Phone Number
                                </td>
                                <td>{currentEmpl.phone}</td>
                            </tr>
                            <tr>
                                <td className="details-titles">
                                    Salary
                                </td>
                                <td>{currentEmpl.salary} BGN</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="btn-box">
                    <Link className="button-details" to={`/`}>Back</Link>
                    <Link className="button-details" to={`/edit-employee/${params.id}`}>Edit</Link>
                    <Link className="button-details" to={`/delete-employee/${params.id}`}>Delete</Link>
                </div>
            </>
            : <Loader/>
    )
}

export default EmployeeDetails;