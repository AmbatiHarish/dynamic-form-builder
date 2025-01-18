import React from "react";
import { useDrop } from "react-dnd";

const Canvas = ({ formElements, setFormElements, onSelectElement }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "FORM_ELEMENT",
        drop: (item) => addElementToCanvas(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    // Add dropped element to the Canvas
    const addElementToCanvas = (item) => {
        const newElement = {
            id: Date.now(), // Unique identifier for the element
            type: item.type,
            label: `${item.type} Label`,
            placeholder: item.type === "text" ? "Enter text" : undefined,
            options: item.type === "select" ? ["Option 1", "Option 2"] : undefined,
            checked: item.type === "checkbox" ? false : undefined,
        };
        setFormElements((prevElements) => [...prevElements, newElement]);
        onSelectElement(newElement);
    };

    // Handle element selection
    const handleElementClick = (element) => {
        onSelectElement(element);
    };

    return (
        <div
            ref={drop}
            style={{
                flex: 1,
                minHeight: "400px",
                border: "2px dashed #ccc",
                padding: "10px",
                backgroundColor: isOver ? "#f9f9f9" : "white",
                overflowY: "auto",
            }}
        >
            <h3>Canvas</h3>
            {formElements.map((el) => (
                <div
                    key={el.id}
                    style={{
                        padding: "10px",
                        marginBottom: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    onClick={() => handleElementClick(el)}
                >
                    <strong>{el.label}</strong>
                    {el.type === "text" && (
                        <input
                            type="text"
                            placeholder={el.placeholder}
                            style={{ width: "100%", marginTop: "5px" }}
                            disabled
                        />
                    )}
                    {el.type === "textarea" && (
                        <textarea
                            placeholder={el.placeholder}
                            style={{ width: "100%", marginTop: "5px" }}
                            disabled
                        />
                    )}
                    {el.type === "checkbox" && (
                        <div style={{ marginTop: "5px" }}>
                            <input type="checkbox" disabled checked={el.checked} /> {el.label}
                        </div>
                    )}
                    {el.type === "select" && (
                        <select style={{ width: "100%", marginTop: "5px" }} disabled>
                            {el.options.map((option, idx) => (
                                <option key={idx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Canvas;
