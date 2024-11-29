import useApiCall from "../../api-call/UseApi.jsx";

function RenderType(x) {
    const {data, loading, error} = useApiCall(x.url)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <>
            <h3>Description</h3>
            {data.desc.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

            <h3>Higher Levels</h3>
            {data.higher_level.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            <p>Components : {data.components.join(", ")}</p>
            <p><strong>Material:</strong> {data.material}</p>
            <p><strong>Casting Time:</strong> {data.casting_time}</p>
            <p><strong>Duration:</strong> {data.duration}</p>
            <p><strong>Level:</strong> {data.level}</p>
            <p><strong>School:</strong> {data.school.name}</p>
            <p><strong>Attack Type:</strong> {data.attack_type}</p>
            <h3>Damage</h3>
            {data.damage ? (
                <>
                    <p><strong>Type:</strong> {data.damage.damage_type?.name || 'N/A'}</p>
                    <ul>
                        {data.damage.damage_at_slot_level &&
                            Object.entries(data.damage.damage_at_slot_level).map(([level, damage]) => (
                                <li key={level}>
                                    <strong>Level {level}:</strong> {damage}
                                </li>
                            ))}
                    </ul>
                </>
            ) : (
                <p>No damage information available.</p>
            )}
            <h3>Classes</h3>
            <ul>
                {data.classes.map(cls => (
                    <li key={cls.index}>{cls.name}</li>
                ))}
            </ul>
            <h3>Subclasses</h3>
            <ul>
                {data.subclasses.map(subclass => (
                    <li key={subclass.index}>{subclass.name}</li>
                ))}
            </ul>
        </>
    )
}

export default RenderType;