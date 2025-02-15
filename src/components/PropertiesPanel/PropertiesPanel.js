import React from "react";

const PropertiesPanel = ({ selectedElement, onUpdate }) => {
    // If no element is selected, display a placeholder message
    if (!selectedElement)
        return <div style={{ padding: "10px" }}>Select an element to edit its properties</div>;

    // Handle property changes and notify the parent component
    const handleChange = (e) => {
        onUpdate({
            ...selectedElement,
            [e.target.name]: e.target.value, // Dynamically update properties
        });
    };

    return (
        <div style={{ padding: "10px", border: "1px solid #ccc", minWidth: "300px" }}>
            <h3>Edit Properties</h3>

            <div style={{ marginBottom: "10px" }}>
                <label>
                    Label:
                    <input
                        type="text"
                        name="label"
                        value={selectedElement.label || ""}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", width: "100%" }}
                    />
                </label>
            </div>

            {/* Conditional fields based on element type */}
            {selectedElement.type === "text" && (
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Placeholder:
                        <input
                            type="text"
                            name="placeholder"
                            value={selectedElement.placeholder || ""}
                            onChange={handleChange}
                            style={{ marginLeft: "10px", width: "100%" }}
                        />
                    </label>
                </div>
            )}

            {selectedElement.type === "select" && (
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Options (comma-separated):
                        <input
                            type="text"
                            name="options"
                            value={selectedElement.options?.join(", ") || ""}
                            onChange={(e) =>
                                onUpdate({
                                    ...selectedElement,
                                    options: e.target.value.split(",").map((opt) => opt.trim()),
                                })
                            }
                            style={{ marginLeft: "10px", width: "100%" }}
                        />
                    </label>
                </div>
            )}

            {selectedElement.type === "checkbox" && (
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Checked:
                        <input
                            type="checkbox"
                            name="checked"
                            checked={selectedElement.checked || false}
                            onChange={(e) =>
                                onUpdate({
                                    ...selectedElement,
                                    checked: e.target.checked,
                                })
                            }
                            style={{ marginLeft: "10px" }}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default PropertiesPanel;
