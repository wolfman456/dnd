import useApiCall from "../api-call/UseApi.jsx";
import {Link, useParams} from "react-router-dom";

function ReturnDisplay(){
    const {call} = useParams();
    console.log("calling :"+ call.toString());
    const {data, loading, error} = useApiCall("/api/"+call);

    if (loading) return <div>loading</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    return (
        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            {data?.results?.map((item, index) => (
                <Link to={'/classes/'+item.url} key={index} type="button" className="btn btn-primary">{item.name}</Link>

            ))}
        </div>
     )
}

export default ReturnDisplay;