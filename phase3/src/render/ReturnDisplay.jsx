import useApiCall from "../api-call/UseApi.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Classes from "./Classes.jsx";

function ReturnDisplay() {
    const { call } = useParams();
    const { data, loading, error } = useApiCall(call);
    // State to track the index of the currently open item
    const [openIndex, setOpenIndex] = useState(null);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    return (
        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            {data?.results?.map((item, index) => {
                let newURL = fixURL(item.url);
                const isOpen = openIndex === index; // Check if this item is open

                return (
                    <div key={index}>
                        <Button
                            onClick={() => setOpenIndex(isOpen ? null : index)} // Toggle open state
                            aria-controls={`collapse-text-${index}`}
                            aria-expanded={isOpen}
                        >
                            {item.name}
                        </Button>
                        <Collapse in={isOpen}>
                            <div id={`collapse-text-${index}`}>
                                <Classes url={newURL}/>
                            </div>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
}

function fixURL(url) {
    return url.replace("/api/", "");
}

export default ReturnDisplay;
