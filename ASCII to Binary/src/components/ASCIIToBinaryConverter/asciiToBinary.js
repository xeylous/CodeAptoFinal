
'use client';
import { useState } from 'react';

const AsciiToBinary = () => {
  const [asciiInput, setAsciiInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleAsciiChange = (event) => {
    setAsciiInput(event.target.value);
    setBinaryOutput(''); // Clear previous output
    setError('');
    setCopySuccess('');
  };

  const convertToBinary = () => {
    if (!asciiInput.trim()) {
      setError('Please provide ASCII input.');
      return;
    }

    try {
      const binary = asciiInput
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
      setBinaryOutput(binary);
      setError('');
    } catch (error) {
      setError('Invalid ASCII input.');
      setBinaryOutput('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result.trim();
        setAsciiInput(content);
        setBinaryOutput(''); // Clear previous output
        setError('');
        setCopySuccess('');
      } catch {
        setError('Uploaded file does not contain valid ASCII data.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const clearAll = () => {
    setAsciiInput('');
    setBinaryOutput('');
    setError('');
    setCopySuccess('');
  };

  const downloadBinary = () => {
    if (!binaryOutput.trim()) {
      setError('No binary to download.');
      return;
    }

    const blob = new Blob([binaryOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'binary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!binaryOutput.trim()) {
      setError('No binary to copy.');
      return;
    }

    navigator.clipboard.writeText(binaryOutput).then(
      () => setCopySuccess('Copied to clipboard!'),
      () => setCopySuccess('Failed to copy!')
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        <input
          type="file"
          className="hidden"
          accept=".txt"
          onChange={handleFileUpload}
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
          Add File
        </label>
        <button onClick={convertToBinary} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Convert to Binary
        </button>
        <button onClick={downloadBinary} className="px-4 py-2 bg-green-600 text-white rounded-md">
          Download Binary
        </button>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-yellow-600 text-white rounded-md">
          Copy Binary
        </button>
        <button onClick={clearAll} className="px-4 py-2 bg-red-600 text-white rounded-md">
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl text-white mb-2">Input ASCII</h2>
          <textarea
            className="w-full h-64 p-3 bg-gray-700 text-white rounded-lg resize-none outline-none"
            placeholder="Enter ASCII text here"
            value={asciiInput}
            onChange={handleAsciiChange}
          />
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-white mb-2">Binary Output</h2>
          <textarea
            className="w-full h-64 p-3 bg-gray-700 text-white rounded-lg resize-none outline-none"
            value={binaryOutput}
            readOnly
          />
          {copySuccess && <p className="text-green-400 mt-2">{copySuccess}</p>}
        </div>
      </div>
    </div>
  );
};

export default AsciiToBinary;