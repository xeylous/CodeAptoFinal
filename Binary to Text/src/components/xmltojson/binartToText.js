'use client';
import { useState } from 'react';

const BinaryToTextConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [error, setError] = useState('');
  const [encoding, setEncoding] = useState('ASCII/UTF-8');
  const [delimiter, setDelimiter] = useState('Space');
  const [customDelimiter, setCustomDelimiter] = useState('');

  const handleBinaryChange = (event) => {
    setBinaryInput(event.target.value);
    setTextOutput('');
    setError('');
  };

  const handleEncodingChange = (event) => {
    setEncoding(event.target.value);
  };

  const handleDelimiterChange = (event) => {
    setDelimiter(event.target.value);
    setCustomDelimiter('');  // Reset custom delimiter if a predefined one is selected
  };

  const handleCustomDelimiterChange = (event) => {
    setDelimiter('Custom'); // Set delimiter to 'Custom' when custom delimiter input is changed
    setCustomDelimiter(event.target.value);
  };

  const convertBinaryToText = () => {
    if (!binaryInput.trim()) {
      setError('Please provide binary input.');
      return;
    }

    try {
      let binaryString = binaryInput;

      switch (delimiter) {
        case 'Space':
          binaryString = binaryString.split(' ').map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
          break;
        case 'Comma':
          binaryString = binaryString.split(',').map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
          break;
        case 'None':
          binaryString = binaryString.match(/.{1,8}/g).map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
          break;
        case 'Custom':
          if (customDelimiter.trim()) {
            binaryString = binaryString.split(customDelimiter).map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
          }
          break;
        default:
          setError('Invalid delimiter.');
          return;
      }

      setTextOutput(binaryString);
      setError('');
    } catch (error) {
      setError('Invalid binary input.');
      setTextOutput('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        setBinaryInput(content);
        setTextOutput('');
        setError('');
      } catch {
        setError('Uploaded file does not contain valid binary.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const downloadTextOutput = () => {
    if (!textOutput.trim()) {
      setError('No text to download.');
      return;
    }

    const blob = new Blob([textOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setBinaryInput('');
    setTextOutput('');
    setError('');
  };

  const copyText = () => {
    if (textOutput.trim()) {
      navigator.clipboard.writeText(textOutput);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="file"
          className="hidden"
          accept=".txt"
          onChange={handleFileUpload}
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Add File</label>
        <button onClick={convertBinaryToText} className="px-4 py-2 bg-green-600 text-white rounded">Convert</button>
        <button onClick={downloadTextOutput} className="px-4 py-2 bg-yellow-600 text-white rounded">Download Text</button>
        <button onClick={clearAll} className="px-4 py-2 bg-red-600 text-white rounded">Clear</button>
        <button onClick={copyText} className="px-4 py-2 bg-purple-600 text-white rounded">Copy Text</button>
      </div>

      <div className="mb-4">
        <label htmlFor="encoding" className="block text-gray-300">Character encoding (optional)</label>
        <select
          id="encoding"
          value={encoding}
          onChange={handleEncodingChange}
          className="w-full p-2 mt-2 bg-gray-700 text-gray-300 rounded"
        >
          <option>ASCII/UTF-8</option>
          <option>UTF-16</option>
          {/* Add more encoding options here */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="delimiter" className="block text-gray-300">Output delimiter string (optional)</label>
        <div className="flex gap-2">
          <select
            id="delimiter"
            value={delimiter}
            onChange={handleDelimiterChange}
            className="w-1/2 p-2 bg-gray-700 text-gray-300 rounded"
          >
            <option>Space</option>
            <option>Comma</option>
            <option>None</option>
            <option>Custom</option>
            {/* Add more delimiter options here */}
          </select>
          <input
            type="text"
            value={customDelimiter}
            onChange={handleCustomDelimiterChange}
            placeholder="Custom delimiter"
            className="w-1/2 p-2 bg-gray-700 text-gray-300 rounded"
            disabled={delimiter !== 'Custom'}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="binaryInput" className="block text-gray-300">Binary Input</label>
        <textarea
          id="binaryInput"
          className="w-full h-40 p-4 bg-gray-700 text-gray-300 rounded"
          placeholder="Enter binary code"
          value={binaryInput}
          onChange={handleBinaryChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="textOutput" className="block text-gray-300">Text Output</label>
        <textarea
          id="textOutput"
          className="w-full h-40 p-4 bg-gray-700 text-gray-300 rounded"
          value={textOutput}
          readOnly
        ></textarea>
        {error && <p className="mt-2 text-red-400">{error}</p>}
      </div>
    </div>
  );
};

export default BinaryToTextConverter;