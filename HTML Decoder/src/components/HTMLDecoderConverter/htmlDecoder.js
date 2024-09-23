'use client';
import React, { useState } from 'react';

// Function to decode HTML entities
const decodeHTML = (encodedHtml) => {
  const element = document.createElement('div');
  element.innerHTML = encodedHtml;
  return element.textContent;
};

const HTMLDecoder = () => {
  const [encodedInput, setEncodedInput] = useState('');
  const [decodedOutput, setDecodedOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncodedChange = (event) => {
    setEncodedInput(event.target.value);
    setDecodedOutput(''); // Clear previous output
    setError('');
  };

  const decodeHtml = () => {
    if (!encodedInput.trim()) {
      setError('Please provide encoded HTML input.');
      return;
    }

    try {
      // Decode the HTML
      const decodedHtml = decodeHTML(encodedInput);
      setDecodedOutput(decodedHtml);
      setError('');
    } catch (error) {
      setError('Error in decoding HTML');
      setDecodedOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([decodedOutput], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'decoded.html';
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
        setEncodedInput(content);
        setDecodedOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file is not a valid HTML.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodedOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setEncodedInput('');
    setDecodedOutput('');
    setError('');
  };

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 90%;
          margin: 20px auto;
          background-color: #2d3748;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          color: #ffffff;
        }

        .explanation {
          margin-bottom: 20px;
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

        .decode-button {
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

        .encoded-input, .decoded-output {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .textarea {
          width: 100%;
          height: 250px;
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
            height: 400px;
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
            height: 500px;
          }
        }
      `}</style>

      <div className="container">
        <div className="explanation">
          <h2>HTML Decoder</h2>
          <p>
            This tool decodes HTML entities back to their original characters. Enter your encoded HTML below to get the original HTML content.
          </p>
        </div>

        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            Upload File
          </label>
          <input
            type="file" 
            accept=".html"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={decodeHtml} className="button decode-button">
            Decode HTML
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
          <div className="encoded-input">
            <h2>Paste your encoded HTML here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your encoded HTML code here"
              value={encodedInput}
              onChange={handleEncodedChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="decoded-output">
            <h2>Decoded HTML</h2>
            <textarea
              className="textarea"
              value={decodedOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLDecoder;