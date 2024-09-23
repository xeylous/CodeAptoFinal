'use client';
import React, { useState } from 'react';

const HexToOctalConverter = () => {
  const [hexInput, setHexInput] = useState('');
  const [octalOutput, setOctalOutput] = useState('');
  const [error, setError] = useState('');

  const handleHexChange = (event) => {
    setHexInput(event.target.value);
    setOctalOutput(''); // Clear previous output
    setError('');
  };

  const convertHexToOctal = () => {
    if (!hexInput.trim()) {
      setError('Please provide hexadecimal input.');
      return;
    }

    try {
      // Validate hexadecimal input
      if (!/^[0-9A-Fa-f\s]+$/.test(hexInput)) {
        throw new Error('Invalid hexadecimal input');
      }

      // Convert hexadecimal to octal
      const hexArray = hexInput.split(/\s+/);
      const octal = hexArray
        .map(hex => parseInt(hex, 16).toString(8))
        .join(' ');
      setOctalOutput(octal);
      setError('');
    } catch (error) {
      setError('Invalid hexadecimal input');
      setOctalOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([octalOutput], { type: 'text/plain;charset=utf-8' });
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
        setHexInput(content.trim());
        setOctalOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file does not contain valid hexadecimal data.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(octalOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setHexInput('');
    setOctalOutput('');
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

        .hex-input, .octal-output {
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
          <button onClick={convertHexToOctal} className="button convert-button">
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
          <div className="hex-input">
            <h2>Paste your Hexadecimal here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your hexadecimal data here (e.g., 4D 6F 64 65)"
              value={hexInput}
              onChange={handleHexChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="octal-output">
            <h2>Converted Octal</h2>
            <textarea
              className="textarea"
              value={octalOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexToOctalConverter;