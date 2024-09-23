'use client';

import React, { useState } from 'react';

const URLEncodeDecode = () => {
  const [url, setUrl] = useState('');
  const [parsedUrl, setParsedUrl] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    parseUrl(inputUrl); 
  };

  const parseUrl = (inputUrl) => {
    try {
      const urlObject = new URL(inputUrl);
      const searchParams = new URLSearchParams(urlObject.search);
    } catch (error) {
      setParsedUrl(null);
    }
  };

  const handleEncode = () => {
    const encodedUrl = encodeURIComponent(url);
    setParsedUrl(encodedUrl);
    setCopySuccess(''); // Reset copy message
  };
  
  const handleDecode = () => {
    try {
      const decodedUrl = decodeURIComponent(url);
      setParsedUrl(decodedUrl);
      setCopySuccess(''); // Reset copy message
    } catch (error) {
      setParsedUrl(null);
    }
  };

  const handleCopy = () => {
    if (parsedUrl) {
      navigator.clipboard.writeText(parsedUrl)
        .then(() => {
          setCopySuccess('Copied to clipboard!');
        })
        .catch(() => {
          setCopySuccess('Failed to copy.');
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-transparent">
        <div className="container max-w-xl bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl text-gray-300 mb-4 text-center">URL Encode and Decode</h1>
          <hr className="border-gray-700 mb-4" />

          <input
            type="text"
            className="w-full p-3 mb-4 text-gray-300 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter URL here"
            onChange={handleUrlChange}
            value={url}
          />

          <div className="flex justify-center gap-4">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-all"
              onClick={handleEncode}
            >
              Encode
            </button>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all"
              onClick={handleDecode}
            >
              Decode
            </button>
          </div>

          <div className="mt-6 bg-gray-700 p-4 rounded text-gray-300 overflow-auto h-48">
            {parsedUrl ? <p>{parsedUrl}</p> : <p>Encoded/Decoded URL will appear here</p>}
          </div>

          {parsedUrl && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-all"
                onClick={handleCopy}
              >
                Copy
              </button>
              {copySuccess && <span className="text-sm text-green-400">{copySuccess}</span>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default URLEncodeDecode;
