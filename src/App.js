import "./App.css";
import React, { useEffect, useState } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const initialItems = [
    { id: 1, product: "Pen", price: 2, quantity: 2 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) setItems(JSON.parse(storedItems));
    else setItems(initialItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const addItem = (item) => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { ...item, id: newId };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
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
