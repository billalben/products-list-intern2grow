import "./App.css";
import React, { useState } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2, quantity: 2 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = (item) => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { ...item, id: newId };
    setItems([...items, newItem]);
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items items={items} deleteItem={deleteItem} />
        <AddItem addItem={addItem} />
        <Total items={items} />
      </div>
    </div>
  );
};

export default App;
