import {Link, useNavigate} from 'react-router-dom';

function NavBar() {
    // const {data, loading, error} = useApiCall("monsters");
    //
    // if (loading) return <div>loading</div>;
    // if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    const navigate = useNavigate();

    const handleProductClick = (call) => {
        console.log("setting call :" +call);
        navigate(`:${call}`);
    };

    return (
        <ul className="nav nav-tabs" style={{backgroundColor: 'black'}}>
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to={`return-display/monsters`} className="nav-link">Classes</Link>
            </li>
            <li>
                <Link to={`return-display/monsters`} className="nav-link">Monsters</Link>
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
