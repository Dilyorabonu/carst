import React from "react";
import { useLocation, Link } from "react-router-dom";
import BarChart from "../components/Barchart";

const Rating = () => {
  const location = useLocation();
  const { data, categories } = location.state || { data: [], categories: [] };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Model Ratings</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to home
        </Link>
      </div>
      <BarChart data={data} categories={categories} />
    </div>
  );
};

export default Rating;
