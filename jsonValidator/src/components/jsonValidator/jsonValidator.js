'use client';
import React, { useState } from 'react';

const JSONValidator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [validationOutput, setValidationOutput] = useState('');
  const [error, setError] = useState('');

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
    setValidationOutput(''); // Clear previous output
    setError('');
  };

  const validateJson = () => {
    if (!jsonInput.trim()) {
      setError('Please provide JSON input.');
      return;
    }

    try {
      JSON.parse(jsonInput);
      setValidationOutput('Valid JSON'); // If JSON is valid
      setError('');
    } catch (error) {
      // Extract line number and error message
      const errorMessage = error.message;
      const lineNumberMatch = errorMessage.match(/at position (\d+)/);
      let lineNumber = '';

      if (lineNumberMatch) {
        const charIndex = parseInt(lineNumberMatch[1], 10);
        const lines = jsonInput.substring(0, charIndex).split('\n');
        lineNumber = `Line ${lines.length}`;
      }

      setError(`${errorMessage} ${lineNumber}`);
      setValidationOutput('');
    }
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
        setValidationOutput('Valid JSON'); // If JSON is valid
        setError('');
      } catch (error) {
        const errorMessage = error.message;
        setError(`Uploaded file does not contain valid JSON. ${errorMessage}`);
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const clearAll = () => {
    setJsonInput('');
    setValidationOutput('');
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
          background-color: #00b386;
        }

        .validate-button {
          background-color: #3182ce;
        }

        .clear-button {
          background-color: #4a5568;
        }

        .button:hover {
          opacity: 0.9;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 2fr 1fr; /* Adjust to create side-by-side layout */
          gap: 20px;
        }

        .json-input, .validation-output {
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

        .success {
          color: #38a169;
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: 2fr 1fr; /* Maintain side-by-side layout for medium screens */
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
<h1 className="text-4xl font-bold mb-2 text-center text-sky-300"> JSON Validator </h1>
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
          <button onClick={validateJson} className="button validate-button">
            Validate JSON
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
          </div>

          <div className="validation-output">
            <h2>Validation Result</h2>
            {error && (
              <p className="error">{error}</p>
            )}
            {!error && validationOutput && (
              <p className="success">{validationOutput}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSONValidator;