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
                <p>Hit Dice : {data?.hit_dice}</p>
                <p>Hit Points Roll : {data?.hit_points_roll}</p>
                <h3>Speed</h3>
                <p>
                    <strong>Speed:</strong> {Object.entries(data.speed).map(([type, value]) => `${type}: ${value}`).join(', ')}
                </p>

                <h3>Abilities</h3>
                <p><strong>STR:</strong> {data.strength}</p>
                <p><strong>DEX:</strong> {data.dexterity}</p>
                <p><strong>CON:</strong> {data.constitution}</p>
                <p><strong>INT:</strong> {data.intelligence}</p>
                <p><strong>WIS:</strong> {data.wisdom}</p>
                <p><strong>CHA:</strong> {data.charisma}</p>

                <h3>Proficiencies</h3>
                <ul>
                    {data?.proficiencies?.map((prof, index) => (
                        <li key={index}>
                            {prof.proficiency.name}: +{prof.value}
                        </li>
                    ))}
                </ul>
                <h3>Senses</h3>
                <p>
                    {Object.entries(data.senses).map(([sense, value]) => (
                        <span key={sense}>
            {sense.replace('_', ' ')}: {value}{' '}
          </span>
                    ))}
                </p>

                <p><strong>Languages:</strong> {data.languages}</p>
                <p><strong>Challenge Rating:</strong> {data.challenge_rating} (XP: {data.xp})</p>

                <h3>Special Abilities</h3>
                <ul>
                    {data.special_abilities.map((ability, index) => (
                        <li key={index}>
                            <strong>{ability.name}:</strong> {ability.desc}
                        </li>
                    ))}
                </ul>

                <h3>Actions</h3>
                <ul>
                    {data.actions.map((action, index) => (
                        <li key={index}>
                            <strong>{action.name}:</strong> {action.desc}
                            {action.damage && action.damage.length > 0 && (
                                <ul>
                                    {action.damage.map((dmg, idx) => (
                                        <li key={idx}>
                                            {dmg.damage_type?.name ? (
                                                <strong>{dmg.damage_type.name}:</strong>
                                            ) : (
                                                <strong>Damage:</strong>
                                            )}{' '}
                                            {dmg.damage_dice || 'N/A'}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <h3>Legendary Actions</h3>
                <ul>
                    {data.legendary_actions.map((action, index) => (
                        <li key={index}>
                            <strong>{action.name}:</strong> {action.desc}
                            {action.damage && (
                                <ul>
                                    {action.damage.map((dmg, idx) => (
                                        <li key={idx}>
                                            <strong>{dmg.damage_type.name}:</strong> {dmg.damage_dice}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <img
                    src={"https://www.dnd5eapi.co"+data.image}
                    alt="failure"
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = data.image;
                    }}
                    style={{maxWidth: '100%', height: 'auto'}}
                />
            </div>
        </>
    )
}

export default Monster;