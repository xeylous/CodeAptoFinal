"use client";
import React, { useState } from "react";

// Simple obfuscation function to mimic the pattern
const obfuscateJavaScript = (code) => {
  const variableMap = {};
  const obfuscatedCode = code.replace(/[a-zA-Z_]\w*/g, (match) => {
    if (!variableMap[match]) {
      // Generate a random string for the obfuscated variable
      variableMap[match] = "_0x" + Math.random().toString(36).substring(2, 8);
    }
    return variableMap[match];
  });

  // Adding fake control flow flattening logic
  const encodedCode = obfuscatedCode
    .split("")
    .map((char) => `String.fromCharCode(${char.charCodeAt(0)})`)
    .join("+");

  return `
    (function() {
      var code = ${encodedCode};
      eval(code);
    })();
  `;
};

const JavaScriptObfuscator = () => {
  const [jsInput, setJsInput] = useState("");
  const [obfuscatedOutput, setObfuscatedOutput] = useState("");
  const [error, setError] = useState("");

  const handleJsChange = (event) => {
    setJsInput(event.target.value);
    setObfuscatedOutput(""); // Clear previous output
    setError("");
  };

  const obfuscateJs = () => {
    if (!jsInput.trim()) {
      setError("Please provide JavaScript input.");
      return;
    }

    try {
      // Obfuscate the JavaScript code
      const obfuscatedJs = obfuscateJavaScript(jsInput);
      setObfuscatedOutput(obfuscatedJs);
      setError("");
    } catch (error) {
      setError("Error in obfuscating JavaScript");
      setObfuscatedOutput("");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([obfuscatedOutput], {
      type: "application/javascript;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "obfuscated.js";
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
        setJsInput(content);
        setObfuscatedOutput(""); // Clear previous output
        setError("");
      } catch {
        setError("Uploaded file is not a valid JavaScript.");
      }
    };
    reader.onerror = () => {
      setError("Error reading the file.");
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(obfuscatedOutput);
    alert("Copied to clipboard");
  };

  const clearAll = () => {
    setJsInput("");
    setObfuscatedOutput("");
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

        .heading {
          font-size: 2rem; /* 40px */
          text-align: center;
          margin-bottom: 20px;
          color: #33ffff;
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

        .obfuscate-button {
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

        .js-input,
        .obfuscated-output {
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

          .heading {
            font-size: 2rem; /* 40px */
            text-align: center;
            margin-bottom: 20px;
            color: #33ffff;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 70%;
          }

          .textarea {
            height: 500px; /* Even taller for larger screens */
          }

          .heading {
            font-size: 2rem; /* 40px */
            text-align: center;
            margin-bottom: 20px;
            color: #33ffff;
          }
        }
      `}</style>
      <h1 className="heading">JavaScript Obfuscator</h1>
      <div className="container">
        <div className="button-container">
          <label htmlFor="fileInput" className="button file-button">
            File
          </label>
          <input
            type="file"
            accept=".js"
            onChange={handleFileUpload}
            className="file-input"
            id="fileInput"
          />
          <button onClick={obfuscateJs} className="button obfuscate-button">
            Obfuscate JS
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
          <div className="js-input">
            <h2>Paste your JavaScript here</h2>
            <textarea
              className="textarea"
              placeholder="Paste your JavaScript code here"
              value={jsInput}
              onChange={handleJsChange}
            />
            {error && <p className="error">{error}</p>}
          </div>

          <div className="obfuscated-output">
            <h2>Obfuscated JavaScript</h2>
            <textarea className="textarea" value={obfuscatedOutput} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptObfuscator;
