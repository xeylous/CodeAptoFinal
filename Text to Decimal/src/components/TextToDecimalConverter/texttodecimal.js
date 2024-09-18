'use client';
import React, { useState } from 'react';

const TextToDecimalConverter = () => {
  const [textInput, setTextInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
    setDecimalOutput(''); // Clear previous output
    setError('');
  };

  const convertTextToDecimal = () => {
    if (!textInput.trim()) {
      setError('Please provide text input.');
      return;
    }

    try {
      // Convert text to decimal
      const decimalArray = Array.from(textInput).map(char => char.charCodeAt(0));
      const decimalString = decimalArray.join(' ');
      setDecimalOutput(decimalString);
      setError('');
    } catch (error) {
      setError('Invalid text input');
      setDecimalOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([decimalOutput], { type: 'text/plain;charset=utf-8' });
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
        setTextInput(content.trim());
        setDecimalOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file does not contain valid text.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decimalOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setTextInput('');
    setDecimalOutput('');
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

        .text-input, .decimal-output {
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
          <button onClick={convertTextToDecimal} className="button convert-button">
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
          <div className="text-input">
            <h2>Paste your Text here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your text data here"
              value={textInput}
              onChange={handleTextChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="decimal-output">
            <h2>Converted Decimal</h2>
            <textarea
              className="textarea"
              value={decimalOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToDecimalConverter;