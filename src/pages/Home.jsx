import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import Modal from "../components/Modal";

import { addToCart } from "../app/cartSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { data: cars } = useCollection("cars");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  const onAddToCart = () => {
    dispatch(addToCart({ ...selectedCar, amount: 1 }));
    closeModal();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars?.map((car) => (
          <div
            key={car.id}
            className="bg-base-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onClick={() => openModal(car)}
          >
            <div className="block overflow-hidden rounded-lg">
              <img
                className="w-full h-48 object-cover"
                src={car.imageUrl}
                alt={car.model}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Model: {car.model}</h2>
                <p className="mb-2">Location: {car.location}</p>
                <p className="mb-2">Year: {car.year}</p>
                <p className="mb-2">Price: ${car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedCar && (
        <Modal
          car={selectedCar}
          onClose={closeModal}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}

export default Home;
