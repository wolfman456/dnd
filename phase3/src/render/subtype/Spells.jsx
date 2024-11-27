import useApiCall from "../../api-call/UseApi.jsx";

function RenderType(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return(
        <h2>{data.name}</h2>
    )
}

export default RenderType;