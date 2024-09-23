'use client';
import React, { useState } from 'react';

const DecimalToHexConverter = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [hexOutput, setHexOutput] = useState('');
  const [error, setError] = useState('');

  const handleDecimalChange = (event) => {
    setDecimalInput(event.target.value);
    setHexOutput(''); // Clear previous output
    setError('');
  };

  const convertDecimalToHex = () => {
    if (!decimalInput.trim()) {
      setError('Please provide decimal input.');
      return;
    }

    try {
      // Validate decimal input
      if (!/^[0-9\s]+$/.test(decimalInput)) {
        throw new Error('Invalid decimal input');
      }

      // Convert decimal to hexadecimal
      const decimalArray = decimalInput.split(/\s+/);
      const hex = decimalArray
        .map(decimal => parseInt(decimal, 10).toString(16).toUpperCase())
        .join(' ');
      setHexOutput(hex);
      setError('');
    } catch (error) {
      setError('Invalid decimal input');
      setHexOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([hexOutput], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'output.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        setDecimalInput(content.trim());
        setHexOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file does not contain valid decimal data.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hexOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setDecimalInput('');
    setHexOutput('');
    setError('');
  };

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 90%;
          margin: 0 auto;
          background-color: #2d3748;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .button-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .file-input {
          display: none;
        }

        .button {
          padding: 10px 20px;
          color: #ffffff;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          text-align: center;
          flex: 1;
        }

        .file-button {
          background-color: #4a5568;
        }

        .convert-button {
          background-color: #3182ce;
        }

        .download-button {
          background-color: #38a169;
        }

        .copy-button, .clear-button {
          background-color: #4a5568;
        }

        .button:hover {
          opacity: 0.9;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .decimal-input, .hex-output {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 1.5rem; /* 24px */
          margin-bottom: 10px;
          color: #ffffff;
        }

        .textarea {
          width: 100%;
          height: 250px; /* Adjust height for smaller screens */
          padding: 15px;
          font-family: monospace;
          background-color: #4a5568;
          border: 1px solid #2d3748;
          color: #ffffff;
          border-radius: 5px;
          outline: none;
          resize: none;
        }

        .error {
          color: #fc8181;
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }

          .textarea {
            height: 400px; /* Restore height for larger screens */
          }

          .button-container {
            gap: 15px;
          }

          .button {
            flex: none;
            width: auto;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 70%;
          }

          .textarea {
            height: 500px; /* Even taller for larger screens */
          }
        }
      `}</style>

      <div className="container">
        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            File
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={convertDecimalToHex} className="button convert-button">
            Convert
          </button>
          <button onClick={handleDownload} className="button download-button">
            Download
          </button>
          <button onClick={copyToClipboard} className="button copy-button">
            Copy
          </button>
          <button onClick={clearAll} className="button clear-button">
            Clear
          </button>
        </div>
        
        <div className="grid-container">
          <div className="decimal-input">
            <h2>Paste your Decimal here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your decimal data here (e.g., 65 255 100)"
              value={decimalInput}
              onChange={handleDecimalChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="hex-output">
            <h2>Converted Hexadecimal</h2>
            <textarea
              className="textarea"
              value={hexOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecimalToHexConverter;