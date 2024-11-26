import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <ul className="nav nav-tabs" style={{backgroundColor: 'black'}}>
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to={`return-display/classes`} className="nav-link">Classes</Link>
            </li>
            <li>
                <Link to={`return-display/monsters`} className="nav-link">Monsters</Link>
            </li>
            <li>
                <Link to={`return-display/equipment`} className="nav-link">equipment</Link>
            </li>
            <li>
                <Link to={`return-display/magic-items`} className="nav-link">magic-items</Link>
            </li>
            <li>
                <Link to={`return-display/races`} className="nav-link">races</Link>
            </li>
        </ul>
    )

}

export default NavBar;
