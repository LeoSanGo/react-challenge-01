import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [dotList, setDotList] = useState([]);
  const [dotListRedo, setDotListRedo] = useState([]);

  const handleDotOnClick = (e) => {
    const dotPosition = {
      clientX: e.clientX,
      clientY: e.clientY,
    };
    setDotList((prev) => [...prev, dotPosition]);
    setDotListRedo([]);
  };

  const handleUndo = (e) => {
    e.stopPropagation();

    if (dotList.length === 0) return;
    console.log('undo');

    const lastItem = dotList[dotList.length - 1];
    setDotListRedo((prev) => [...prev, lastItem]);

    setDotList((prev) => {
      const copyArray = [...prev].slice(0, -1);
      return copyArray;
    });
  };

  const handleRedo = (e) => {
    e.stopPropagation();

    if (dotListRedo.length === 0) return;
    console.log('redo');
    const lastItem = dotListRedo[dotListRedo.length - 1];

    setDotListRedo((prev) => {
      const copyArray = [...prev].slice(0, -1);
      return copyArray;
    });
    setDotList((prev) => [...prev, lastItem]);
  };

  return (
    <div className="App" onClick={handleDotOnClick}>
      <button onClick={handleUndo}>Ctrl+Z</button>
      <button onClick={handleRedo}>Ctrl+Y</button>
      {dotList.map((item) => (
        <span
        key={item.clientX + item.clientY}
          className="dot"
          style={{ top: item.clientY, left: item.clientX }}
        />
      ))}
    </div>
  );
}

export default App;
