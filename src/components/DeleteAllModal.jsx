// DeleteAllModal.js
import React from "react";

const DeleteAllModal = ({ onClose, onDeleteAll }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Delete All Items</h2>
        <p>Are you sure you want to delete all items from your cart?</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button onClick={onDeleteAll} className="px-4 py-2 btn btn-error">
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllModal;
