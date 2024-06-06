import React, { useRef } from "react";

const AddItem = ({ addItem }) => {
  const productRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      product: productRef.current.value,
      price: parseFloat(priceRef.current.value),
      quantity: parseInt(quantityRef.current.value),
    });
    productRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <div className="item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={productRef}
          placeholder="Enter Product"
          required
        />
        <input
          type="number"
          ref={priceRef}
          placeholder="Enter Price"
          min={1}
          required
        />
        <input
          type="number"
          ref={quantityRef}
          placeholder="Enter Quantity"
          min={1}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
