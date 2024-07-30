function Modal({ car, onClose, onAddToCart }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-100 rounded-lg overflow-hidden shadow-lg p-6 max-w-md w-full">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            Do you really want to buy this model?
          </h1>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onAddToCart} className="btn btn-secondary">
            Go to buy this model
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
