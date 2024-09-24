'use client'
import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState('');

  const calculateAverage = () => {
    // Split input by new lines and commas, then trim whitespace
    const numArray = numbers.split(/[\n,]/).map(num => num.trim()).filter(num => num !== '');

    // Convert strings to numbers and filter out invalid values
    const validNumbers = numArray.map(num => parseFloat(num)).filter(num => !isNaN(num));

    if (validNumbers.length === 0) {
      setError('Please enter valid numbers.');
      setAverage(null);
      return;
    }

    setError(''); // Clear error message if input is valid

    // Calculate the average
    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / validNumbers.length;
    setAverage(avg.toFixed(2)); // Display result with two decimal places
  };

  return (
    <div className="bg-black p-6 text-gray-300 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl flex justify-center">
        {/* Average Calculator Section */}
        <div className="border border-gray-400 p-4 rounded w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Average Calculator</h2>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="numbers" className="block text-sm mb-2">Enter numbers (comma or newline separated)</label>
              <textarea
                id="numbers"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                placeholder="e.g. 10, 20, 30, 40, 50, 60"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300 w-full h-32"
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
          {average !== null && (
            <p className="mt-4 text-lg text-center">Average: {average}</p>
          )}
          <div className="text-center mt-4">
            <button
              onClick={calculateAverage}
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

export default AverageCalculator;

