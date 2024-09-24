'use client'
import { useState } from 'react';
import axios from 'axios';
import { FaCopy } from 'react-icons/fa';

export default function Pagesizechecker() {
  const [url, setUrl] = useState('');
  const [pageSize, setPageSize] = useState(null);
  const [pageSizeInBytes, setPageSizeInBytes] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPageSize(null);
    setPageSizeInBytes(null);

    try {
      const response = await axios.post('/api/pagesizechecker', { url });
      if (response.data.PageSize && response.data.PageSizeInBytes) {
        setPageSize(response.data.PageSize);
        setPageSizeInBytes(response.data.PageSizeInBytes);
      } else {
        setError('Failed to fetch page size');
      }
    } catch (err) {
      setError('Failed to fetch page size');
    }
  };

  const handleClear = () => {
    setUrl('');
    setPageSize(null);
    setPageSizeInBytes(null);
    setError('');
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className=" bg-transparent text-gray-300 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Page Size Checker</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium mb-2">
              Enter URL:
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-gray-300"
              placeholder="https://example.com"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Check Size
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Display page size results */}
        {pageSize !== null && pageSizeInBytes !== null && (
          <div className="mt-4 p-4 bg-gray-700 rounded">
            <div className="flex justify-between items-center mb-4">
              <span>Page Size (KB): {pageSize}</span>
              <FaCopy
                onClick={() => handleCopy(pageSize)}
                className="cursor-pointer text-blue-500 hover:text-blue-400"
                title="Copy"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Page Size (Bytes): {pageSizeInBytes}</span>
              <FaCopy
                onClick={() => handleCopy(pageSizeInBytes)}
                className="cursor-pointer text-blue-500 hover:text-blue-400"
                title="Copy"
              />
            </div>
          </div>
        )}

        {/* Display error message */}
        {error && (
          <div className="mt-4 p-4 bg-red-600 text-white rounded">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
