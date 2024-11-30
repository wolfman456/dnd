import useApiCall from "../../api-call/UseApi.jsx";

function Monster(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <>
            <div>
                <h3>{data.name}</h3>
                <p>Size : {data.size}</p>
                <p>Alignment : {data.alignment}</p>
                <h3>Armor Class</h3>
                <ul style={{listStyleType: 'none'}}>
                    {data?.armor_class?.map(armor_class => (
                        <li key={armor_class.type}>
                            <p>Type : {armor_class.type}</p>
                            <p>Value : {armor_class.value}</p>
                        </li>
                    ))}
                </ul>
                <p>Hit Points : {data?.hit_points}</p>
            </div>
        </>
    )
}

export default Monster;