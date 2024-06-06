import React from "react";

const Total = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
