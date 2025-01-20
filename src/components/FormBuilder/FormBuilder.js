import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Canvas from "../Canvas/Canvas";
import PropertiesPanel from "../PropertiesPanel/PropertiesPanel";
import Toolbox from "../Toolbox/Toolbox";
import "./FormBuilder.css";

const FormBuilder = () => {
    const [formElements, setFormElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleUpdateElement = (updatedElement) => {
        setFormElements((prevElements) =>
            prevElements.map((el) => (el.id === updatedElement.id ? updatedElement : el))
        );
        setSelectedElement(updatedElement);
    };
    return (
        <div className="FormBuilder">
            <Toolbox />
            <DndProvider backend={HTML5Backend}>
                <Canvas formElements={formElements}
                    setFormElements={setFormElements}
                    onSelectElement={setSelectedElement} />
            </DndProvider>
            <PropertiesPanel selectedElement={selectedElement} onUpdate={handleUpdateElement} />
        </div>
    );
}
export default FormBuilder;