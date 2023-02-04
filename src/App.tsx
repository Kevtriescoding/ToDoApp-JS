import React, { useState } from 'react';
import './App.css';

function App() {
  const [newToDo, setNewToDo] = useState<string>('')
  const [allToDos, setAllToDos] = useState<string[]>([])

  const handleAddToDo = () => {
    setAllToDos([...allToDos, newToDo]);
    setNewToDo('');
  }

  return (
    <div className="App">
      <textarea value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
      <button onClick={handleAddToDo}>Add</button>
      {allToDos.map((todo) => <p>{todo}</p>)}
    </div>
  );
}

export default App;
