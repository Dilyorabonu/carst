import React from "react";

const DeleteModal = ({ item, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Delete Item</h2>
        <p>Are you sure you want to delete {item.name}?</p>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="px-4 py-2 btn btn-secondary">
            Cancel
          </button>
          <button onClick={onDelete} className="px-4 py-2 btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
