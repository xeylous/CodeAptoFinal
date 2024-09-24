'use client'
import { useState } from 'react';

export default function KeywordDensityChecker() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError('');

    if (!input) {
      setError('Please enter a domain URL.');
      return;
    }

    try {
      const res = await fetch('/api/keywordDensityChecker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.result);
      }
    } catch (err) {
      setError('Failed to calculate density.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-300">Domain Keyword Density Checker</h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        {/* Domain URL Input */}
        <div className="mb-4 w-full">
          <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="url">
            Domain URL:
          </label>
          <input
            id="url"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the domain URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Check Keyword Density
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-4 w-full overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-md">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Keyword</th>
                <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Frequency</th>
                <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Density (%)</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(result.frequencies).map(word => (
                <tr key={word}>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">{word}</td>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">{result.frequencies[word]}</td>
                  <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">{result.densities[word].toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}