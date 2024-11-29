import useApiCall from "../../api-call/UseApi.jsx";

function Monster(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <>
        <div>
            <h3>{data.name}</h3>
        </div>
        </>
    )
}

export default Monster;