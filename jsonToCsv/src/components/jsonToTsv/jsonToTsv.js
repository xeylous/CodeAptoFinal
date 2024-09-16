'use client'
import React, { useState } from 'react';

const JsonToTsvConverter = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [tsvOutput, setTsvOutput] = useState('');
  const [isConverted, setIsConverted] = useState(false); // Track if conversion has happened
  const [errorMessage, setErrorMessage] = useState(''); // Track error message

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setJsonInput(e.target.result);
      setIsConverted(false); // Reset converted status when a new file is uploaded
      setErrorMessage(''); // Clear any previous errors
    };
    reader.readAsText(file);
  };

  const flattenJson = (data, parentKey = '', result = {}) => {
    for (let key in data) {
      const newKey = parentKey ? `${parentKey}/${key}` : key;
      if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
        flattenJson(data[key], newKey, result);
      } else if (Array.isArray(data[key])) {
        data[key].forEach((item, index) => {
          flattenJson(item, `${newKey}/${index}`, result);
        });
      } else {
        result[newKey] = data[key];
      }
    }
    return result;
  };

  const convertJsonToTsv = () => {
    try {
      const jsonData = JSON.parse(jsonInput);
      const flattenedJson = flattenJson(jsonData);
      const keys = Object.keys(flattenedJson);
      const values = keys.map((key) => flattenedJson[key]);
      const tsvData = `${keys.join('\t')}\n${values.join('\t')}`;
      setTsvOutput(tsvData);
      setIsConverted(true); // Mark conversion as done
      setErrorMessage(''); // Clear error message on successful conversion
    } catch (error) {
      setErrorMessage('Invalid JSON input. Please enter valid JSON data.');
      setTsvOutput(''); // Clear output if the input is invalid
      setIsConverted(false);
    }
  };

  const clearInputOutput = () => {
    setJsonInput(''); // Clear input field
    setTsvOutput(''); // Clear output field
    setIsConverted(false); // Reset converted status
    setErrorMessage(''); // Clear error message
  };

  const downloadTsv = () => {
    const element = document.createElement('a');
    const file = new Blob([tsvOutput], { type: 'text/tab-separated-values' });
    element.href = URL.createObjectURL(file);
    element.download = 'output.tsv';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-sky-300">JSON to TSV Converter</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-6xl justify-center">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-sky-400 rounded p-2 px-8 text-center"
        >
          File
        </label>
        <button
          onClick={convertJsonToTsv}
          className="bg-teal-500 text-white py-2 px-4 rounded"
        >
          Convert
        </button>
        <button
          onClick={downloadTsv}
          className={`bg-green-500 text-white py-2 px-4 rounded ${!isConverted ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isConverted}
        >
          Download
        </button>
        <button
          onClick={clearInputOutput}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>

      {/* Display error message if JSON input is invalid */}
      {errorMessage && (
        <div className="text-red-500 text-center font-semibold">
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-6xl">
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste or type your JSON data here..."
          className="w-full h-64 sm:h-80 p-4 border rounded text-gray-300 bg-gray-900 placeholder:text-gray-300"
        />
        <textarea
          value={tsvOutput}
          readOnly
          placeholder="TSV Output"
          className="w-full h-64 sm:h-80 p-4 border rounded text-gray-300 bg-gray-900 placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default JsonToTsvConverter;
