import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <ul className="nav nav-tabs" style={{backgroundColor:'black'}}>
            <li className="nav-item">
                <a className="nav-link">
                    <Link to='/'>Home</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">ability-scores</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    )
}

export default NavBar;