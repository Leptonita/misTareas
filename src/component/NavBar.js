import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock, faPersonChalkboard, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const styles = {
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "10px",
        paddingRight: "5px"
    }
    const linkStyles = {
        padding: "0 5px"
    }

    return (
        <nav id="sidebar" style={styles}>
            <NavLink to="/mistareas" style={linkStyles}>
                <FontAwesomeIcon icon={faUserLock} />
            </NavLink>
            <> </>
            <NavLink to="/" style={linkStyles}>
                <FontAwesomeIcon icon={faPeopleGroup} />
            </NavLink>
        </nav>
    );
}
export default NavBar;