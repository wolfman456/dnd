import { Link } from 'react-router-dom';
import useApiCall from '../api-call/UseApi.js'

function NavBar() {
    const { data, loading, error } = useApiCall("monsters");

    if (loading) return <div>loading</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <>
            <ul className="nav nav-tabs" style={{ backgroundColor: 'black' }}>
                <li className="nav-item">
                    <a className="nav-link">
                        <Link to='/'>Home</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>{
                        console.log("here :" + data.results.length);
                    }}>ability-scores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
