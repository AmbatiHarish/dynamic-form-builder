import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Toolbox from './components/Toolbox/Toolbox';

function App() {
  return (
    <div className="App">
      <Toolbox />
      <DndProvider backend={HTML5Backend}>
        <Canvas />
      </DndProvider>
    </div>
  );
}

export default App;
