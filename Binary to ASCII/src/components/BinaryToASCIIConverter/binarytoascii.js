
'use client';
import { useState } from 'react';

const BinaryToAscii = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [asciiOutput, setAsciiOutput] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleBinaryChange = (event) => {
    setBinaryInput(event.target.value);
    setAsciiOutput(''); // Clear previous output
    setError('');
    setCopySuccess('');
  };

  const convertToAscii = () => {
    if (!binaryInput.trim()) {
      setError('Please provide binary input.');
      return;
    }

    try {
      const ascii = binaryInput
        .split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
      setAsciiOutput(ascii);
      setError('');
    } catch (error) {
      setError('Invalid binary input.');
      setAsciiOutput('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result.trim();
        setBinaryInput(content);
        setAsciiOutput(''); // Clear previous output
        setError('');
        setCopySuccess('');
      } catch {
        setError('Uploaded file does not contain valid binary data.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const clearAll = () => {
    setBinaryInput('');
    setAsciiOutput('');
    setError('');
    setCopySuccess('');
  };

  const downloadAscii = () => {
    if (!asciiOutput.trim()) {
      setError('No ASCII to download.');
      return;
    }

    const blob = new Blob([asciiOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ascii.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!asciiOutput.trim()) {
      setError('No ASCII to copy.');
      return;
    }

    navigator.clipboard.writeText(asciiOutput).then(
      () => setCopySuccess('Copied to clipboard!'),
      () => setCopySuccess('Failed to copy!')
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="file"
          className="hidden"
          accept=".txt"
          onChange={handleFileUpload}
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600">
          Add File
        </label>
        <button onClick={convertToAscii} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Convert to ASCII
        </button>
        <button onClick={downloadAscii} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Download ASCII
        </button>
        <button onClick={copyToClipboard} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
          Copy ASCII
        </button>
        <button onClick={clearAll} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl text-white mb-2">Input Binary</h2>
          <textarea
            className="w-full h-64 p-4 font-mono bg-gray-700 text-white border border-gray-600 rounded resize-none focus:outline-none"
            placeholder="Enter binary code (e.g., 01001000 01100101 01101100 01101100 01101111)"
            value={binaryInput}
            onChange={handleBinaryChange}
          />
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>

        <div>
          <h2 className="text-xl text-white mb-2">ASCII Output</h2>
          <textarea
            className="w-full h-64 p-4 font-mono bg-gray-700 text-white border border-gray-600 rounded resize-none focus:outline-none"
            value={asciiOutput}
            readOnly
          />
          {copySuccess && <p className="text-green-400 mt-2">{copySuccess}</p>}
        </div>
      </div>
    </div>
  );
};

export default BinaryToAscii;