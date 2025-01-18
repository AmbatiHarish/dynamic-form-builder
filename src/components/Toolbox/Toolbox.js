import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

const ToolboxItem = ({ type, label }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "FORM_ELEMENT",
        item: { type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "grab",
                padding: "10px",
                border: "1px solid #ccc",
                marginBottom: "10px",
            }}
        >
            {label}
        </div>
    );
};

const Toolbox = () => {
    const elements = [
        { type: "text", label: "Text Field" },
        { type: "textarea", label: "Text Area" },
        { type: "checkbox", label: "Checkbox" },
        { type: "select", label: "Dropdown" },
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="Toolbox">
                {elements.map(item => (
                    <ToolboxItem key={item.type} type={item.type} label={item.label} />
                ))}
            </div>
        </DndProvider>
    );
};

export default Toolbox;