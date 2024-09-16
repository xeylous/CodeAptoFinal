"use client";
import { useState } from "react";

const CSSMini = () => {
  const [cssInput, setCssInput] = useState("");
  const [minifiedOutput, setMinifiedOutput] = useState("");
  const [error, setError] = useState("");

  const handleCssChange = (event) => {
    setCssInput(event.target.value);
    setMinifiedOutput(""); // Clear previous output
    setError("");
  };

  const minifyCss = () => {
    if (!cssInput.trim()) {
      setError("Please provide CSS.");
      return;
    }

    try {
      const minifiedCss = cssInput
        .replace(/\s+/g, " ") // Replace multiple spaces with a single space
        .replace(/\/\*[\s\S]*?\*\//g, "") // Remove CSS comments
        .replace(/\s*([{}:;,])\s*/g, "$1") // Remove spaces around {}:;, characters
        .replace(/;\s*}/g, "}") // Remove semicolon before closing curly brace
        .trim(); // Remove leading/trailing spaces

      setMinifiedOutput(minifiedCss);
      setError("");
    } catch (error) {
      setError("Invalid CSS input.");
      setMinifiedOutput("");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        setCssInput(content);
        setMinifiedOutput(""); // Clear previous output
        setError("");
      } catch {
        setError("Uploaded file does not contain valid CSS.");
      }
    };
    reader.onerror = () => {
      setError("Error reading the file.");
    };
    reader.readAsText(file);
  };

  const downloadMinifiedCss = () => {
    const blob = new Blob([minifiedOutput], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "minified.css";
    link.click();
    URL.revokeObjectURL(url); // Clean up the object URL
  };

  const clearAll = () => {
    setCssInput("");
    setMinifiedOutput("");
    setError("");
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

        .button {
          padding: 10px 20px;
          color: #ffffff;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          text-align: center;
          flex: 1;
        }

        .file-input {
          display: none;
        }

        .minify-button {
          background-color: #3182ce;
        }

        .download-button {
          background-color: #38a169;
        }

        .upload-button {
          background-color: #cc66ff;
        }
        .clear-button {
          background-color: #ffaa80;
        }
        .button:hover {
          opacity: 0.9;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .css-input,
        .minified-output {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #ffffff;
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

          .heading {
            display: flex;
            justify-content: center; /* Horizontally center */
            align-items: center; /* Vertically center */
            color: #99ccff;
            height: 100%; /* Make sure it occupies full height if needed */
            font-size: 2rem; /* Adjust font size as needed */
            text-align: center; /* Ensure text is centered within the flexbox */
          }
        }
      `}</style>
      <h1 className="heading">CSS Minifier</h1>
      <br></br>
      <div className="container">
        <div className="button-container">
          <button onClick={minifyCss} className="button minify-button">
            Minify
          </button>
          <button onClick={clearAll} className="button clear-button">
            Clear
          </button>
          <label htmlFor="file-upload" className="button upload-button">
            Upload CSS
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".css"
            className="file-input"
            onChange={handleFileUpload}
          />
          {minifiedOutput && (
            <button
              onClick={downloadMinifiedCss}
              className="button download-button"
            >
              Download Minified CSS
            </button>
          )}
        </div>

        <div className="grid-container">
          <div className="css-input">
            <h2>Input CSS</h2>
            <textarea
              className="textarea"
              placeholder="Paste your CSS code here"
              value={cssInput}
              onChange={handleCssChange}
            />
            {error && <p className="error">{error}</p>}
          </div>

          <div className="minified-output">
            <h2>Minified CSS Output</h2>
            <textarea className="textarea" value={minifiedOutput} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSMini;
