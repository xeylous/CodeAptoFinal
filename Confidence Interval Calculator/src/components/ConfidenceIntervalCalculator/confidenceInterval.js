'use client'
import React, { useState } from 'react';

const ConfidenceIntervalCalculator = () => {
  const [sampleSize, setSampleSize] = useState('');
  const [sampleMean, setSampleMean] = useState('');
  const [stdDev, setStdDev] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculateConfidenceInterval = () => {
    // Convert inputs to numbers
    const n = parseFloat(sampleSize);
    const mean = parseFloat(sampleMean);
    const sd = parseFloat(stdDev);
    const confidence = parseFloat(confidenceLevel);

    if (isNaN(n) || isNaN(mean) || isNaN(sd) || isNaN(confidence) || n <= 0 || sd <= 0 || confidence <= 0 || confidence >= 100) {
      setError('Please enter valid values for all fields.');
      setResult('');
      return;
    }

    setError(''); // Clear error message if input is valid

    // Calculate the Z-score for the given confidence level
    const zScores = {
      90: 1.645,
      95: 1.96,
      99: 2.576,
    };
    const z = zScores[confidence];
    
    if (!z) {
      setError('Confidence level must be 90, 95, or 99.');
      setResult('');
      return;
    }

    // Calculate Margin of Error
    const marginOfError = z * (sd / Math.sqrt(n));
    const lowerBound = mean - marginOfError;
    const upperBound = mean + marginOfError;
    const percentageMargin = (marginOfError / mean) * 100;

    // Format the result
    const formattedResult = `Confidence Interval: ${mean.toFixed(1)} ±${marginOfError.toFixed(3)} (±${percentageMargin.toFixed(1)}%) [${lowerBound.toFixed(3)} – ${upperBound.toFixed(3)}]`;

    setResult(formattedResult);
  };

  return (
    <div className="bg-transparent p-6 text-gray-300  flex items-center justify-center">
      <div className="w-full max-w-3xl flex justify-center">
        {/* Confidence Interval Calculator Section */}
        <div className="border border-gray-400 p-4 rounded w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Confidence Interval Calculator</h2>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="sampleSize" className="block text-sm mb-2">Sample Size (n)</label>
              <input
                type="number"
                id="sampleSize"
                value={sampleSize}
                onChange={(e) => setSampleSize(e.target.value)}
                placeholder="Enter sample size"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="sampleMean" className="block text-sm mb-2">Sample Mean (X̄)</label>
              <input
                type="number"
                id="sampleMean"
                value={sampleMean}
                onChange={(e) => setSampleMean(e.target.value)}
                placeholder="Enter sample mean"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="stdDev" className="block text-sm mb-2">Standard Deviation (σ or s)</label>
              <input
                type="number"
                id="stdDev"
                value={stdDev}
                onChange={(e) => setStdDev(e.target.value)}
                placeholder="Enter standard deviation"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="confidenceLevel" className="block text-sm mb-2">Confidence Level (%)</label>
              <input
                type="number"
                id="confidenceLevel"
                value={confidenceLevel}
                onChange={(e) => setConfidenceLevel(e.target.value)}
                placeholder="Enter confidence level (90, 95, 99)"
                className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                step="0.01" // Allow decimal input
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
          {result && (
            <p className="mt-4 text-lg text-center">{result}</p>
          )}
          <div className="text-center mt-4">
            <button
              onClick={calculateConfidenceInterval}
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

export default ConfidenceIntervalCalculator;





