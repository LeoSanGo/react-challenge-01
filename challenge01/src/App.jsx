import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [dotList, setDotList] = useState([]);

  const handleDotOnClick = (e) => {
    const dotPosition = {
      clientX: e.clientX,
      clientY: e.clientY,
    };
    setDotList((prev) => [...prev, dotPosition]);
  };

  const handleUndo = (e) => {
    e.stopPropagation();
    console.log('undo');
    setDotList((prev) => {
      const copyArray = [...prev].slice(0, -1);
      return copyArray;
    });
  };

  return (
    <div className="App" onClick={handleDotOnClick}>
      <button onClick={handleUndo}>Ctrl+Z</button>
      {dotList.map((item) => (
        <span
          className="dot"
          style={{ top: item.clientY, left: item.clientX }}
        />
      ))}
    </div>
  );
}

export default App;
