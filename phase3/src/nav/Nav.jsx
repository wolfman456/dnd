import {Link} from 'react-router-dom';

// import useApiCall from '../api-call/UseApi.js'

function NavBar() {
    // const {data, loading, error} = useApiCall("monsters");
    //
    // if (loading) return <div>loading</div>;
    // if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <ul className="nav nav-tabs" style={{backgroundColor: 'black'}}>
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">classes</a>
            </li>
            <li>
                <a className="nav-link" href="#">equipment</a>
            </li>
            <li>
                <a className="nav-link" href="#">magic-items</a>
            </li>
            <li>
                <a className="nav-link" href="#">monsters</a>
            </li>
            <li>
                <a className="nav-link" href="#">spells</a>
            </li>
        </ul>
    )

}

export default NavBar;
