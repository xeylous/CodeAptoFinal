'use client';
import React, { useState } from 'react';

const MetaTagAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [metaData, setMetaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMetaTags = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }
    setLoading(true);
    setError('');
    setMetaData(null);

    try {
      const response = await fetch(`/api/meta?url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (response.ok) {
        setMetaData(data);
      } else {
        setError('Failed to fetch meta tags. Please check the URL.');
      }
    } catch (err) {
      setError('An error occurred while fetching the meta tags.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMetaTags();
  };

  const handleClear = () => {
    setUrl('');
    setMetaData(null);
    setError('');
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(metaData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'meta-tags.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-800 text-gray-300 p-6 rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Meta Tag Analyzer</h1>
      <h1 className="text-l font-bold mb-4">Enter Domain Name in format : https://codeapto.com</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded mb-4"
          placeholder="Enter website URL (e.g., https://codeapto.com)"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Meta Tags'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
          {metaData && (
            <button
              type="button"
              onClick={handleDownload}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Download JSON
            </button>
          )}
        </div>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {metaData && (
        <div className="bg-gray-700 p-4 rounded overflow-x-auto max-h-64">
          <h2 className="text-xl font-bold mb-2">Meta Tags Information:</h2>
          <pre className="bg-gray-600 p-4 rounded text-gray-300 whitespace-pre-wrap">
            <strong>Title: </strong>{metaData.title || 'Not Found'} <br />
            <strong>Description: </strong>{metaData.description || 'Not Found'} <br />
            <strong>Keywords: </strong>{metaData.keywords || 'Not Found'} <br />
            <strong>Charset: </strong>{metaData.charset || 'Not Found'} <br />
            <strong>Viewport: </strong>{metaData.viewport || 'Not Found'}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MetaTagAnalyzer;
