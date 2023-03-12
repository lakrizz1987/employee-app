import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
    return(
        <nav className="navigation">
            <Link className="links" to="/create-employee">New employee</Link>
        </nav>
    )
}

export default Header;