

"use client";

import { useState } from "react";

export default function PriceCalculator() {
  const [invites, setInvites] = useState("");
  const [duration, setDuration] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const calculate = () => {
    if (!invites || !duration) return;

    const basePrice = 1000;
    const cost = basePrice + Number(invites) * 50 + Number(duration) * 100;
    setTotal(cost);
  };

  return (
    <div className="border p-5 mt-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Event Cost Calculator
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Enter Number of Invites"
          value={invites}
          onChange={(e) => setInvites(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:outline-none"
        />

        <input
          type="number"
          placeholder="Event Duration (Hours)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:outline-none"
        />

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Calculate
        </button>
      </div>

      {total !== null && (
        <div className="mt-5 p-4 bg-green-100 text-green-800 rounded-lg text-center text-lg font-semibold">
          Total Cost: ₹{total.toLocaleString()}
        </div>
      )}
    </div>
  );
}
