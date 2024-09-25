'use client';
import React, { useState } from 'react';

const ServerStatusChecker = () => {
  const [urlInput, setUrlInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleUrlChange = (event) => {
    setUrlInput(event.target.value);
    setResults([]);
    setError('');
  };

  const checkServerStatus = async () => {
    if (!urlInput.trim()) {
      setError('Please provide at least one URL.');
      return;
    }

    const urlArray = urlInput.split(/\s+/).slice(0, 10); // Limit to 10 URLs
    const statusResults = [];

    for (const url of urlArray) {
      try {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        const statusCode = response.status === 0 ? '200 (No-CORS)' : response.status;
        statusResults.push({ url, statusCode, status: statusCode === 200 || statusCode === '200 (No-CORS)' ? 'Success' : 'Failed' });
      } catch (error) {
        statusResults.push({ url, statusCode: 'Error', status: 'Failed' });
      }
    }

    setResults(statusResults);
  };

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 90%;
          margin: 0 auto;
          background-color: #1a202c; /* Dark background */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          color: #e2e8f0; /* Light text color */
        }

        .button {
          padding: 10px 20px;
          color: #ffffff;
          background-color: #3182ce;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          text-align: center;
          margin-bottom: 20px;
        }

        .button:hover {
          opacity: 0.9;
        }

        .textarea {
          width: 100%;
          height: 100px;
          padding: 15px;
          font-family: monospace;
          background-color: #2d3748; /* Darker textarea background */
          border: 1px solid #4a5568; /* Darker border */
          color: #e2e8f0; /* Light text color */
          border-radius: 5px;
          outline: none;
          resize: none;
        }

        .error {
          color: #e53e3e;
          margin-top: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #4a5568; /* Darker borders for table */
          padding: 12px;
          text-align: center;
          color: #e2e8f0; /* Light text color for table cells */
        }

        th {
          background-color: #2d3748; /* Darker table header */
        }

        td {
          background-color: #1a202c; /* Darker table body */
        }

        h2 {
          color: #e2e8f0; /* Light text for headings */
        }

        @media (min-width: 768px) {
          .container {
            max-width: 70%;
          }
        }
      `}</style>

      <div className="container">
        <h2>Enter up to 10 URLs</h2>
        <textarea
          className="textarea"
          placeholder="Enter URLs separated by space"
          value={urlInput}
          onChange={handleUrlChange}
        />

        {error && (
          <p className="error">{error}</p>
        )}

        <button onClick={checkServerStatus} className="button">
          Check Server Status
        </button>

        {results.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Sr#</th>
                <th>URLs</th>
                <th>HTTP Code</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{result.url}</td>
                  <td>{result.statusCode}</td>
                  <td>{result.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ServerStatusChecker;