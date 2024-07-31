// src/pages/Rating.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import BarChart from "../components/Barchart";

const Rating = () => {
  const location = useLocation();
  const { data, categories } = location.state || { data: [], categories: [] };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Model Ratings</h2>
      <BarChart data={data} categories={categories} />
    </div>
  );
};

export default Rating;
