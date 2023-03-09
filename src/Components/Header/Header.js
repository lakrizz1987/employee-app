import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
    return(
        <nav className="navigation">
            <Link className="links" to="/create-employee">New employee</Link>
            <Link className="links" to="/top-5">Top 5 employees</Link>
        </nav>
    )
}

export default Header;