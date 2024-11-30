import useApiCall from "../../api-call/UseApi.jsx";

function Classes(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            width: "500px",
        }}>
            <h2>{data?.name}</h2>
            <div>
                <p>Hit Die : {"D" + data?.hit_die}</p>
            </div>
            <h2>Proficiency Choices</h2>
            {data?.proficiency_choices?.map((choice, index) => (
                <div key={index}>
                    <p>{choice.desc}</p>
                    <ul>
                        {choice.from.options.map((option, i) => (
                            <li key={i}>
                                {option.item ? option.item.name : 'Unnamed Option'}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
                <h4>Proficiency Choices</h4>
                <ul>
                    {data?.proficiencies.map((proficiency, index) => (

                        <li key={index}>{proficiency.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Saving Throws</h2>
                {data?.saving_throws?.map((items, index) => (
                    <li key={index}>
                        <p>{items.name}</p>
                    </li>
                ))}
            </div>
            <div>
                <ul>
                    <h2>Starting Equipment</h2>
                    {data?.starting_equipment?.map((item, index) => (

                        <li key={index}>
                            {item.equipment.name} (x{item.quantity})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Classes;