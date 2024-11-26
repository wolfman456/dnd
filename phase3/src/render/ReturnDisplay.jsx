import useApiCall from "../api-call/UseApi.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import RenderType from "./RenderType.jsx";

function ReturnDisplay() {
    const { call } = useParams();
    const { data, loading, error } = useApiCall("/api/"+call);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        setOpenIndex(null);
    }, [call])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <div className="btn-group-vertical"
             role="group"
             aria-label="Vertical button group"
        style={{
            display: "grid", // Use grid for layout
            gridTemplateColumns: "repeat(4, 1fr)", // 4 even columns
            gap: "10px", // Add spacing between buttons
            alignItems: "center",
            justifyContent: "center",

        }}>
            {data?.results?.map((item, index) => {
                const isOpen = openIndex === index; // Check if this item is open

                return (
                    <div key={index}>
                        <Button
                            onClick={() => setOpenIndex(isOpen ? null : index)} // Toggle open state
                            aria-controls={`collapse-text-${index}`}
                            aria-expanded={isOpen}
                            style={{
                                padding: "10px",
                                backgroundColor: "lightgray", // Optional styling
                                border: "1px solid gray",
                                width: "100%",
                            }}
                        >
                            {item.name}
                        </Button>
                        <Collapse in={isOpen}>
                            <div id={`collapse-text-${index}`}>
                                <RenderType type={call} url={item.url} />
                            </div>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
}

export default ReturnDisplay;
