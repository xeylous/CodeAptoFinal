'use client';
import React, { useState } from 'react';

const CPMCalculator = () => {
  const [totalCost, setTotalCost] = useState('');
  const [cpmRate, setCpmRate] = useState('');
  const [adImpressions, setAdImpressions] = useState('');
  const [error, setError] = useState('');

  const calculate = () => {
    const cost = parseFloat(totalCost);
    const cpm = parseFloat(cpmRate);
    const impressions = parseInt(adImpressions, 10); // Ensure integer

    // Count the number of filled fields
    const filledFields = [cost, cpm, impressions].filter(value => !isNaN(value) && value !== '');

    if (filledFields.length > 2) {
      setError('Please enter values in two of the fields; we will complete the third one for you.');
      return;
    }

    setError(''); // Clear error message if input is valid

    if (!isNaN(cost) && !isNaN(cpm) && isNaN(impressions)) {
      // Calculate Ad Impressions
      const result = (cost / cpm) * 1000;
      setAdImpressions(Math.round(result)); // Round to nearest integer
    } else if (!isNaN(cost) && !isNaN(impressions) && isNaN(cpm)) {
      // Calculate CPM Rate
      const result = (cost / impressions) * 1000;
      setCpmRate(result.toFixed(2)); // CPM Rate can be a decimal
    } else if (!isNaN(cpm) && !isNaN(impressions) && isNaN(cost)) {
      // Calculate Total Cost
      const result = (cpm / 1000) * impressions;
      setTotalCost(result.toFixed(2)); // Total Cost can be a decimal
    } else {
      // If inputs do not match any valid combination, clear all fields
      setTotalCost('');
      setCpmRate('');
      setAdImpressions('');
    }
  };

  return (
    <div className="bg-black p-6 text-gray-300  flex items-center justify-center">
      <div className="w-full max-w-3xl flex justify-center">
        {/* CPM Calculator Section */}
        <div className="border border-gray-400 p-4 rounded w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-sky-300">CPM Calculator</h2>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="totalCost" className="block text-sm mb-2">Total Cost ($)</label>
              <input
                type="number"
                id="totalCost"
                value={totalCost}
                onChange={(e) => setTotalCost(e.target.value)}
                placeholder="Enter total cost"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                step="0.01" // Allow decimal input for cost
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="cpmRate" className="block text-sm mb-2">CPM Rate ($ per 1000 impressions)</label>
              <input
                type="number"
                id="cpmRate"
                value={cpmRate}
                onChange={(e) => setCpmRate(e.target.value)}
                placeholder="Enter CPM Rate"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                step="0.01" // Allow decimal input for CPM rate
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="adImpressions" className="block text-sm mb-2">Ad Impressions</label>
              <input
                type="number"
                id="adImpressions"
                value={adImpressions}
                onChange={(e) => setAdImpressions(e.target.value)}
                placeholder="Enter ad impressions"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                min="0" // Ensure positive integers
                step="1" // Only integers
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
          <div className="text-center mt-4">
            <button
              onClick={calculate}
              className="p-2 bg-blue-600 text-gray-200 rounded"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPMCalculator;