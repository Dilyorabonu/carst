import React, { useState } from "react";

const EditModal = ({ item, onClose, onSave }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(item.amount);

  const handleSave = () => {
    const updatedItem = { ...item, amount: Number(quantity) };
    onSave(updatedItem);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
        <div className="mb-4">
          <label className="block text-base-content">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 input input-bordered"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 btn btn-secondary">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
