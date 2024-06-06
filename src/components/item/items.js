import React from "react";

const Items = ({ items, deleteItem }) => {
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Delete</p>
      </div>
      {items.length ? (
        items.map((item) => (
          <div key={item.id} className="item">
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p className="delete" onClick={() => deleteItem(item.id)}>
              &times;
            </p>
          </div>
        ))
      ) : (
        <div className="text">There are no items, Try to add some.</div>
      )}
    </div>
  );
};

export default Items;
