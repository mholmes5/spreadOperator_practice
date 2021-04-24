import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  function handleNewItem(event) {
    addNewItem(event.target.value);
  }

  function handleOnClick(event) {
    const item = newItem;
    items.push(item);
    console.log(items);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleNewItem} type="text" value={newItem} />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
