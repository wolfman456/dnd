import useApiCall from "../api-call/UseApi.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import RenderType from "./RenderType.jsx";

function ReturnDisplay() {
    const { call } = useParams();
    const { data, loading, error } = useApiCall("/api/" + call);
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setOpenIndex(null);
        setSearchTerm(""); // Reset search when `call` changes
    }, [call]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || "An unknown error occurred"}</div>;

    // Filter items based on the search term
    const filteredResults = data?.results?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Search box */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "500px",
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            </div>

            {/* Button group with filtered results */}
            <div
                className="btn-group-vertical"
                role="group"
                aria-label="Vertical button group"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {filteredResults?.map((item, index) => {
                    const isOpen = openIndex === index;

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
        </div>
    );
}

export default ReturnDisplay;
