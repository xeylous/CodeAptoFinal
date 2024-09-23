'use client';
import React, { useState } from 'react';

// Function to encode HTML entities
const encodeHTML = (html) => {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const HTMLEncoder = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [encodedOutput, setEncodedOutput] = useState('');
  const [error, setError] = useState('');

  const handleHtmlChange = (event) => {
    setHtmlInput(event.target.value);
    setEncodedOutput(''); // Clear previous output
    setError('');
  };

  const encodeHtml = () => {
    if (!htmlInput.trim()) {
      setError('Please provide HTML input.');
      return;
    }

    try {
      // Encode the HTML
      const encodedHtml = encodeHTML(htmlInput);
      setEncodedOutput(encodedHtml);
      setError('');
    } catch (error) {
      setError('Error in encoding HTML');
      setEncodedOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([encodedOutput], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'encoded.html';
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
        setHtmlInput(content);
        setEncodedOutput(''); // Clear previous output
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
    navigator.clipboard.writeText(encodedOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setHtmlInput('');
    setEncodedOutput('');
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

        .encode-button {
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

        .html-input, .encoded-output {
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
          <h2>Why do you need HTML encoding?</h2>
          <p>
            HTML encoding replaces special characters in HTML such as <code>&lt;</code> and <code>&gt;</code> 
            with reserved HTML entities that are recognized by the HTML engine. The most common cases of using HTML 
            encoding are when you want to display HTML special characters as text in your HTML element content. 
            For example, if you want to display <code>&lt;</code> within your <code>&lt;div&gt;</code> element, you need to 
            encode (or escape) the <code>&lt;</code> character by replacing it with <code>&amp;lt;</code>.
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
          <button onClick={encodeHtml} className="button encode-button">
            Encode HTML
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
          <div className="html-input">
            <h2>Paste your HTML here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your HTML code here"
              value={htmlInput}
              onChange={handleHtmlChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="encoded-output">
            <h2>Encoded HTML</h2>
            <textarea
              className="textarea"
              value={encodedOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLEncoder;