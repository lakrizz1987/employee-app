import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <section className="table-box">
            <table>
                <tr>
                    <th>Full Name</th>
                    <th>Task</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                </tr>
                <tr>
                    <td>
                        <Link to="/employee/6351651">Centro comercial Moctezuma</Link>
                    </td>
                    <td>Francisco Chang</td>
                </tr>
            </table>
        </section>
    )
}

export default Home;