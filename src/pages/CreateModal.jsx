import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useFirestore } from "../hooks/useFirestore";
import { useSelector } from "react-redux";

const CreateModal = () => {
  const { addDocument } = useFirestore();
  const { user } = useSelector((state) => state.user);
  const [carModel, setCarModel] = useState({
    model: "",
    location: "",
    year: "",
    price: "",
    imageUrl: "",
  });

  // Initialize theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarModel({
      ...carModel,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument(
      {
        ...carModel,
        uid: user.uid,
      },
      "cars"
    );
  };

  const handlePreview = () => {
    setShowPreviewModal(true);
  };

  const handleModalSubmit = () => {
    setShowPreviewModal(false);
    handleSubmit(); // Submit the form data
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-200 rounded-lg shadow-md mt-4">
      <h1 className="text-2xl font-bold mb-4 text-base-content">
        Add New Car Model
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-base-content">Model:</label>
          <input
            type="text"
            name="model"
            required
            value={carModel.model}
            onChange={handleChange}
            className="w-full px-4 py-2 input input-bordered"
            placeholder="Enter car model"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content">Location:</label>
          <input
            type="text"
            name="location"
            required
            value={carModel.location}
            onChange={handleChange}
            className="w-full px-4 py-2 input input-bordered"
            placeholder="Enter car current location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content">Year:</label>
          <input
            type="number"
            name="year"
            required
            value={carModel.year}
            onChange={handleChange}
            className="w-full px-4 py-2 input input-bordered"
            placeholder="Enter car year"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content">Price:</label>
          <input
            type="number"
            name="price"
            required
            value={carModel.price}
            onChange={handleChange}
            className="w-full px-4 py-2 input input-bordered"
            placeholder="Enter car price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            required
            value={carModel.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 input input-bordered"
            placeholder="Enter image URL"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreview}
            className="px-4 py-2 btn btn-secondary"
          >
            Preview
          </button>
          <button type="submit" className="px-4 py-2 btn btn-secondary">
            Apply
          </button>
        </div>
      </form>

      {showPreviewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Preview Car Model</h2>
            <p>
              <strong>Model:</strong> {carModel.model}
            </p>
            <p>
              <strong>Location:</strong> {carModel.location}
            </p>
            <p>
              <strong>Year:</strong> {carModel.year}
            </p>
            <p>
              <strong>Price:</strong> {carModel.price}
            </p>
            <p>
              <strong className="mb-2 block">Image URL:</strong>
              <div>
                <img
                  src={carModel.imageUrl}
                  className="w-full h-80 rounded-md"
                  alt="image"
                />
              </div>
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setShowPreviewModal(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 btn btn-secondary"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateModal;
