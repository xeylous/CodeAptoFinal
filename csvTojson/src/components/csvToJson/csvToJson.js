'use client';

import React, { useState } from 'react';

export default function CsvToJsonConverter() {
  const [csvText, setCsvText] = useState('');
  const [jsonResult, setJsonResult] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCsvText(''); // Clear the CSV input
      setJsonResult(null); // Clear the JSON output
      const reader = new FileReader();
      reader.onload = (e) => {
        setCsvText(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleConvert = () => {
    try {
      let lines = csvText.trim().split('\n');
      const separatorChar = ','; // Change this to accommodate different separators if needed
      const headers = lines[0].split(separatorChar).map(header => header.trim().replace(/"/g, ''));
      const result = lines.slice(1).map(line => {
        const obj = {};
        const currentline = line.split(separatorChar).map(item => item.trim().replace(/"/g, ''));

        headers.forEach((header, index) => {
          let value = currentline[index];
          // Convert strings to numbers if they represent numerical values
          if (!isNaN(value) && value !== '') {
            value = Number(value);
          }
          obj[header] = value;
        });

        return obj;
      });

      // Convert the result to a JSON string with proper formatting
      setJsonResult(JSON.stringify(result, null, 2));
    } catch (error) {
      alert('Error parsing CSV');
    }
  };

  const handleClear = () => {
    setCsvText('');
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
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">CSV TO JSON</h1>
      </div>
      <p className="mb-4">To get started, upload or paste your data from Excel (saved as CSV).</p>

      <div className="flex flex-col gap-4 mb-4">
        {/* File Upload Section */}
        <div className="mb-4">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full text-gray-300 border border-gray-300 rounded p-2"
          />
        </div>

        {/* Input and Output Boxes */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <textarea
              rows="10"
              className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-400 bg-gray-800 placeholder:text-gray-400"
              placeholder="Paste your CSV here"
              value={csvText}
              onChange={(e) => {
                setCsvText(e.target.value);
                setJsonResult(null); // Clear the JSON output when input changes
              }}
              style={{ height: '300px' }}
            ></textarea>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="p-4 rounded border border-gray-300 max-h-96 overflow-auto bg-gray-800"
              style={{ height: '300px' }}>
              <pre className="whitespace-pre-wrap text-gray-400">{jsonResult ? jsonResult : 'Your converted JSON will appear here.'}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4 gap-4">
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
