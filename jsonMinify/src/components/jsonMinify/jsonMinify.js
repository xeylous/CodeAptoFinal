'use client';
import React, { useState } from 'react';

const JSONMinifier = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [minifiedOutput, setMinifiedOutput] = useState('');
  const [error, setError] = useState('');

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
    setMinifiedOutput(''); // Clear previous output
    setError(''); // Clear previous error
  };

  const minifyJson = () => {
    if (!jsonInput.trim()) {
      setError('Please provide JSON input.');
      setMinifiedOutput(''); // Clear output when no input
      return;
    }

    try {
      const json = JSON.parse(jsonInput);
      const minifiedJson = JSON.stringify(json);
      setMinifiedOutput(minifiedJson);
      setError(''); // Clear error if parsing is successful
    } catch (error) {
      setError('Invalid JSON input');
      setMinifiedOutput(''); // Clear output if there is an error
    }
  };

  const handleDownload = () => {
    if (!minifiedOutput) return; // Do nothing if there's no output

    const blob = new Blob([minifiedOutput], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'minified.json';
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
        JSON.parse(content); // Test if the file content is valid JSON
        setJsonInput(content);
        setMinifiedOutput(''); // Clear previous output
        setError(''); // Clear previous error
      } catch {
        setError('Uploaded file does not contain valid JSON.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    if (!minifiedOutput) return; // Do nothing if there's no output

    navigator.clipboard.writeText(minifiedOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setJsonInput('');
    setMinifiedOutput('');
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

        .minify-button {
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

        .json-input, .minified-output {
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
      <h1 className="text-4xl font-bold mb-2 text-center text-sky-300">JSON Minifier</h1>
      <div className="container">
        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            File
          </label>
          <input
            type="file" 
            accept=".json"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={minifyJson} className="button minify-button">
            Minify JSON
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
          <div className="json-input">
            <h2>Paste your JSON here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your JSON data here"
              value={jsonInput}
              onChange={handleJsonChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="minified-output">
            <h2>Minified JSON</h2>
            <textarea
              className="textarea"
              value={minifiedOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSONMinifier;
