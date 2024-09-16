"use client";
import React, { useState } from "react";

const Base64Encoder = () => {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setEncodedText(""); // Clear previous output
    setError("");
  };

  const encodeToBase64 = () => {
    if (!inputText.trim()) {
      setError("Please provide input text.");
      return;
    }

    try {
      const encoded = btoa(inputText);
      setEncodedText(encoded);
      setError("");
    } catch (error) {
      setError("Error encoding the input text.");
      setEncodedText("");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([encodedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "encoded_output.txt";
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
        setInputText(content.trim());
        setEncodedText(""); // Clear previous output
        setError("");
      } catch {
        setError("Uploaded file does not contain valid text.");
      }
    };
    reader.onerror = () => {
      setError("Error reading the file.");
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encodedText);
    alert("Copied to clipboard");
  };

  const clearAll = () => {
    setInputText("");
    setEncodedText("");
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

        .copy-button,
        .clear-button {
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

        .input-box,
        .output-box {
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
      <h1 className="heading">Base64 Encoder</h1>
      <div className="container">
        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            upload File
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={encodeToBase64} className="button encode-button">
            Encode
          </button>
          {encodedText && (
            <button onClick={handleDownload} className="button download-button">
              Download
            </button>
          )}
          <button onClick={copyToClipboard} className="button copy-button">
            Copy
          </button>
          <button onClick={clearAll} className="button clear-button">
            Clear
          </button>
        </div>

        <div className="grid-container">
          <div className="input-box">
            <h2>Input Text</h2>
            <textarea
              className="textarea"
              placeholder="Enter text or upload a file..."
              value={inputText}
              onChange={handleInputChange}
            />
            {error && <p className="error">{error}</p>}
          </div>

          <div className="output-box">
            <h2>Encoded Text</h2>
            <textarea className="textarea" value={encodedText} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base64Encoder;
