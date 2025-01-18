import { useState } from "react";
import { useDrop } from "react-dnd";

const Canvas = () => {
    const [formElements, setFormElements] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "FORM_ELEMENT",
        drop: (item) => addElementToCanvas(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addElementToCanvas = (item) => {
        setFormElements([
            ...formElements,
            { id: Date.now(), type: item.type, label: `${item.type} Label` },
        ]);
    };

    return (
        <div
            ref={drop}
            style={{
                minHeight: "400px",
                border: "2px dashed #ccc",
                padding: "10px",
                backgroundColor: isOver ? "#f0f0f0" : "white",
            }}
        >
            <h3>Canvas</h3>
            {formElements.map((el) => (
                <div key={el.id} style={{ marginBottom: "10px" }}>
                    {el.label}
                </div>
            ))}
        </div>
    );
};

export default Canvas;
