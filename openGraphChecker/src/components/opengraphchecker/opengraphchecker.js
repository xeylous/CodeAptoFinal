'use client';
import { useState } from 'react';
import axios from 'axios';
import { FaCopy, FaDownload } from 'react-icons/fa'; // Import the copy and download icons

export default function OpenGraphChecker() {
  const [url, setUrl] = useState('');
  const [ogData, setOgData] = useState(null);
  const [error, setError] = useState(null);

  const fetchOgData = async () => {
    setError(null);
    setOgData(null);

    try {
      const res = await axios.get(`/api/opengraphchecker?url=${encodeURIComponent(url)}`);
      setOgData(res.data);
    } catch (err) {
      setError('Failed to fetch Open Graph data.');
    }
  };

  const handleClear = () => {
    setUrl('');  // Clear input field
    setOgData(null);  // Clear fetched data
    setError(null);   // Clear any error messages
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(ogData, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'opengraph-data.json';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-transparent text-gray-300 ">
      <h1 className="text-3xl text-sky-300 font-bold mb-4">Open Graph Checker</h1>
      
      <div className="w-full max-w-2xl"> {/* Increased width for better readability */}
        <input
          type="text"
          className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="flex space-x-2"> {/* Group buttons together */}
          <button
            className="w-1/2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={fetchOgData}
          >
            Check Open Graph Data
          </button>
          <button
            className="w-1/2 p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {ogData && (
        <div className="mt-6 p-4 bg-gray-700 rounded shadow-md w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Open Graph Data</h2>
            <FaDownload
              onClick={handleDownload}
              className="cursor-pointer text-blue-500 hover:text-blue-400"
              title="Download JSON"
            />
          </div>

          {Object.keys(ogData).map((key) => (
            <div 
              key={key} 
              className="flex items-center justify-between mb-2 bg-gray-800 p-3 rounded text-sm overflow-auto"
            >
              <div className="break-all flex-1"> {/* Increased flexibility for long text */}
                <strong>{key}:</strong> {ogData[key]}
              </div>
              <FaCopy
                onClick={() => handleCopy(ogData[key])}
                className="cursor-pointer text-blue-500 hover:text-blue-400 ml-2 text-lg" // Fixed icon size
                title="Copy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
