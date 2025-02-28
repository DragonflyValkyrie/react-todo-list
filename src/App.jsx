import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSumbit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  return (
    <>
      <form onSumbit={handleSumbit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="button">Add</button>
      </form>
      <h2>Todo List</h2>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"></input>
            Item 1
          </label>
          <button className="button button-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
