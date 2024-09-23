'use client';
import React, { useState } from 'react';

// Simple CSS beautification function
const beautifyCSS = (css) => {
  try {
    // Simple logic to add indentation and new lines
    return css
      .split('}') // Split rules
      .map(rule => rule.trim()) // Trim each rule
      .filter(rule => rule.length > 0) // Remove empty rules
      .map(rule => {
        const parts = rule.split('{');
        if (parts.length === 2) {
          const selector = parts[0].trim();
          const properties = parts[1]
            .split(';')
            .map(prop => '  ' + prop.trim()) // Add indentation
            .filter(prop => prop.length > 2) // Filter out empty properties
            .join(';\n');
          return `${selector} {\n${properties};\n}`;
        }
        return rule;
      })
      .join('\n\n');
  } catch (error) {
    throw new Error('Error in beautifying CSS');
  }
};

const CSSBeautifier = () => {
  const [cssInput, setCssInput] = useState('');
  const [beautifiedOutput, setBeautifiedOutput] = useState('');
  const [error, setError] = useState('');

  const handleCssChange = (event) => {
    setCssInput(event.target.value);
    setBeautifiedOutput(''); // Clear previous output
    setError('');
  };

  const beautifyCss = () => {
    if (!cssInput.trim()) {
      setError('Please provide CSS input.');
      return;
    }

    try {
      // Beautify the CSS code
      const beautifiedCss = beautifyCSS(cssInput);
      setBeautifiedOutput(beautifiedCss);
      setError('');
    } catch (error) {
      setError('Error in beautifying CSS');
      setBeautifiedOutput('');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([beautifiedOutput], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'beautified.css';
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
        setCssInput(content);
        setBeautifiedOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file is not valid CSS.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(beautifiedOutput);
    alert('Copied to clipboard');
  };

  const clearAll = () => {
    setCssInput('');
    setBeautifiedOutput('');
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

        .beautify-button {
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

        .css-input, .beautified-output {
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
            color: #d1d5db;
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
      <h1 style={{ textAlign: 'center', color: '#33ffff',fontSize: '30px' }}>CSS Beautifier</h1>
      <div className="container">
        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            File
          </label>
          <input
            type="file" 
            accept=".css"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={beautifyCss} className="button beautify-button">
            Beautify CSS
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
          <div className="css-input">
            <h2>Paste your CSS here</h2>
            <textarea
              className="textarea text-gray-300"
              placeholder="Paste your CSS code here"
              value={cssInput}
              onChange={handleCssChange}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="beautified-output">
            <h2>Beautified CSS</h2>
            <textarea
              className="textarea"
              value={beautifiedOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSBeautifier;