import React from "react";

const CartItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-base-200 p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm">Rp {item.price}</p>
          <p className="text-sm">Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onEdit(item)}
          className="btn btn-secondary btn-sm"
        >
          Edit
        </button>
        <button onClick={() => onDelete(item)} className="btn btn-error btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
