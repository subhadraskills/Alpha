
"use client";

import { useState } from "react";

interface CarProps {
  model: string;
  year: number;
  mileage: string;
  price: string;
}

export default function CarDetails({ model, year, mileage, price }: CarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border p-5 mt-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-blue-500"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{model}</h2>
        <span className="text-md text-gray-600">
          {expanded ? "▲ Hide" : "▼ More"}
        </span>
      </div>

      <p className="text-lg font-bold text-blue-600 mt-1">{price}</p>

      {expanded && (
        <div className="mt-4 space-y-2 text-gray-700 transition-all">
          <p><strong>Year:</strong> {year}</p>
          <p><strong>Mileage:</strong> {mileage}</p>
          <p><strong>Fuel Type:</strong> Electric</p>
          <p><strong>Condition:</strong> Excellent</p>
        </div>
      )}
    </div>
  );
}
