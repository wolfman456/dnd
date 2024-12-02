import useApiCall from "../../api-call/UseApi.jsx";

function Equipment(x){

    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    return (
        <div className="equipment-details">
            <h2>{data.name}</h2>
            <p>
                <strong>Index:</strong> {data.index}
            </p>
            <p>
                <strong>Category:</strong> {data?.equipment_category?.name}
            </p>
            <p>
                <strong>Gear Category:</strong> {data?.gear_category?.name}
            </p>
            <p>
                <strong>Cost:</strong> {data?.cost?.quantity} {data?.cost?.unit}
            </p>
            <p>
                <strong>Weight:</strong> {data.weight} lb
            </p>
            <p>
                <strong>Description:</strong>
                {data?.desc?.map((line, index) => (
                    <span key={index}> {line}</span>
                ))}
            </p>
            {/*{data.contents.length > 0 && (*/}
            {/*    <div>*/}
            {/*        <strong>Contents:</strong>*/}
            {/*        <ul>*/}
            {/*            {data.contents.map((content, index) => (*/}
            {/*                <li key={index}>{content}</li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*{data.properties.length > 0 && (*/}
            {/*    <div>*/}
            {/*        <strong>Properties:</strong>*/}
            {/*        <ul>*/}
            {/*            {data.properties.map((property, index) => (*/}
            {/*                <li key={index}>{property}</li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};


export default Equipment;