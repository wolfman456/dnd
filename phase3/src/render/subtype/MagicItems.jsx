import useApiCall from "../../api-call/UseApi.jsx";


function MagicItem(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    return (
        <>
            <h2>{data.name}</h2>
            <p>
                <strong>Category:</strong> {data.equipment_category.name}
            </p>
            <p>
                <strong>Rarity:</strong> {data.rarity.name}
            </p>
            <p>
                <strong>Variants:</strong> {data.variant ? "Yes" : "No"}
            </p>
            <p>
                <strong>Description:</strong>
                <ul>
                    {data.desc?.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </p>
        </>
    );
};

export default MagicItem;
