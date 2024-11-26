import useApiCall from "../api-call/UseApi.jsx";
import { useParams } from "react-router-dom";


function render() {
    const {url} = useParams();
    const {data, error, loading} = useApiCall(url);
    if (loading) return <div>loading</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    if (data.length === 0) {
        console.log("empty result");
        return null
    }

    return (
        <h1 className="page-header">data.name</h1>
    )
}
export default render()