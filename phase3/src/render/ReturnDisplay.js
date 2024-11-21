import useApiCall from "../api-call/UseApi.js";
import { useParams } from "react-router-dom";
function ReturnDisplay(){
    const {call} = useParams();
    const {data, loading, error} = useApiCall("/api/"+{call});

    if (loading) return <div>loading</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

}

export default ReturnDisplay;