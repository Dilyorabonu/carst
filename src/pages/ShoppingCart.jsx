// ShoppingCart.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCartItem,
  removeCartItem,
  removeAllCartItems,
} from "../app/cartSlice";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import DeleteAllModal from "../components/DeleteAllModal";

const ShoppingCart = () => {
  const { cartItems, totalPrice, totalCars } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateItem = (updatedItem) => {
    dispatch(updateCartItem(updatedItem));
    setIsEditModalOpen(false);
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem(selectedItem.id));
    setIsDeleteModalOpen(false);
  };

  const handleRemoveAllItems = () => {
    dispatch(removeAllCartItems());
    setIsDeleteAllModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <button
          onClick={() => setIsDeleteAllModalOpen(true)}
          className="btn btn-error btn-sm mt-4"
        >
          Delete All Items
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="btn btn-secondary btn-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
                <span className="mx-4">{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <p className="mb-2">Items: {totalCars}</p>
          <p className="mb-2">Total: $ {totalPrice}</p>
          <button className="btn btn-secondary w-full">Check out</button>
        </div>
      </div>
      {isEditModalOpen && selectedItem && (
        <EditModal
          item={selectedItem}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleUpdateItem}
        />
      )}
      {isDeleteModalOpen && selectedItem && (
        <DeleteModal
          item={selectedItem}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleRemoveItem}
        />
      )}
      {isDeleteAllModalOpen && (
        <DeleteAllModal
          onClose={() => setIsDeleteAllModalOpen(false)}
          onDeleteAll={handleRemoveAllItems}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
