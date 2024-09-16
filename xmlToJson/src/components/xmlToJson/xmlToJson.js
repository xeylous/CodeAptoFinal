'use client';

import React, { useState } from 'react';
import { parseStringPromise } from 'xml2js'; // You need to install xml2js package

export default function XmlToJsonConverter() {
  const [xmlText, setXmlText] = useState('');
  const [jsonResult, setJsonResult] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setJsonResult(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        setXmlText(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleConvert = async () => {
    try {
      const options = {
        explicitArray: false,
        mergeAttrs: true, 
      };
      const result = await parseStringPromise(xmlText, options);
      setJsonResult(JSON.stringify(result, null, 2));
    } catch (error) {
      alert('Error parsing XML');
    }
  };

  const handleClear = () => {
    setXmlText('');
    setJsonResult(null);
  };

  const handleDownload = () => {
    if (jsonResult) {
      const blob = new Blob([jsonResult], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleCopy = () => {
    if (jsonResult) {
      navigator.clipboard.writeText(jsonResult).then(() => {
        alert('JSON copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy JSON.');
      });
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex justify-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">XML TO JSON</h1>
      </div>
      <p className="mb-4 text-sm md:text-base">To get started, upload or paste your XML data.</p>

      <div className="flex flex-col gap-4 mb-4">
        {/* File Upload Section */}
        <div className="mb-4">
          <input
            type="file"
            accept=".xml"
            onChange={handleFileUpload}
            className="block w-full text-gray-300 border border-gray-300 rounded p-2"
          />
        </div>

        {/* Input and Output Boxes */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <textarea
              rows="10"
              className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-300 bg-gray-800 placeholder:text-gray-300"
              placeholder="Paste your XML here"
              value={xmlText}
              onChange={(e) => setXmlText(e.target.value)}
              style={{ height: '250px' }}
            ></textarea>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="p-4 rounded border border-gray-300 max-h-96 overflow-auto bg-gray-800"
              style={{ height: '250px' }}>
              <pre className="whitespace-pre-wrap text-gray-300">{jsonResult ? jsonResult : 'Your converted JSON will appear here.'}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4 gap-4">
        <button
          onClick={handleConvert}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Convert
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Clear
        </button>
        {jsonResult && (
          <>
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Download
            </button>
            <button
              onClick={handleCopy}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            >
              Copy to Clipboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}