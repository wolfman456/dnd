import useApiCall from "../api-call/UseApi.jsx";




function Classes(x) {
    console.log("call in classes : ",x.url);
    const { data, loading, error } = useApiCall(x.url);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    console.log(data.name)
    return (

        <h1>{data.name}</h1>
    );
}

export default Classes;
