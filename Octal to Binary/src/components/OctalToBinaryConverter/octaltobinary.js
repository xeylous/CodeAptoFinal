'use client';
import React, { useState } from 'react';

const OctalToBinaryConverter = () => {
  const [octalInput, setOctalInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState('');
  const [error, setError] = useState('');

  const handleOctalChange = (event) => {
    setOctalInput(event.target.value);
    setBinaryOutput(''); // Clear previous output
    setError('');
  };

  const convertOctalToBinary = () => {
    if (!octalInput.trim()) {
      setError('Please provide octal input.');
      return;
    }

    try {
      // Validate octal input
      if (!/^[0-7\s]+$/.test(octalInput)) {
        throw new Error('Invalid octal input');
      }

      // Convert octal to binary
      const octalArray = octalInput.split(/\s+/);
      const binary = octalArray
        .map(octal => parseInt(octal, 8).toString(2))
        .join(' ');
      setBinaryOutput(binary);
      setError('');
    } catch (error) {
      setError('Invalid octal input');
      setBinaryOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([binaryOutput], { type: 'text/plain;charset=utf-8' });
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
        setOctalInput(content.trim());
        setBinaryOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file does not contain valid octal data.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binaryOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setOctalInput('');
    setBinaryOutput('');
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

        .octal-input, .binary-output {
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
          <button onClick={convertOctalToBinary} className="button convert-button">
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
          <div className="octal-input">
            <h2>Paste your Octal here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your octal data here (e.g., 110 145 154 154 157)"
              value={octalInput}
              onChange={handleOctalChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="binary-output">
            <h2>Converted Binary</h2>
            <textarea
              className="textarea"
              value={binaryOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OctalToBinaryConverter;