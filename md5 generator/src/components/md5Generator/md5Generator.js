"use client";
import React, { useRef, useState } from "react";
import CryptoJS from "crypto-js";

const HashGenerator = () => {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const inputRef = useRef(null); // Ref for the textarea

  const handleInputChange = (e) => {
    setInput(e.target.value); // Update input state
    setHash(""); // Clear hash result on input change
  };

  const [isUppercase, setIsUppercase] = useState(false); // uppercase checkbox
  const [isLineBreak, setIsLineBreak] = useState(false); // line break checkbox

  const generateHash = () => {
    if (isLineBreak) {
      const lines = input.split("\n").filter((line) => line.trim() !== "");
      const hashValues = lines.map((line) => {
        let hash = CryptoJS.MD5(line).toString();
        return isUppercase ? hash.toUpperCase() : hash; // Convert to uppercase if checked
      });
      setHash(hashValues.join("\n")); // Join hashes with line breaks
    } else {
      if (input.trim()) {
        let hashValue = CryptoJS.MD5(input).toString();
        setHash(isUppercase ? hashValue.toUpperCase() : hashValue); // Convert to uppercase if checked
      } else {
        setHash("");
      }
    }
  };

  // Clear input and hash states on button click
  const clearInput = () => {
    setInput("");
    setHash("");
  };

  // Clear hash when checkboxes are toggled
  const handleLineBreakToggle = (e) => {
    setIsLineBreak(e.target.checked);
    setHash(""); // Clear hash result on checkbox change
  };

  const handleUppercaseToggle = (e) => {
    setIsUppercase(e.target.checked);
    setHash(""); // Clear hash result on checkbox change
  };

  return (
    <>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #2d3748;
          color: #f7fafc;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1,
        h2 {
          color: #63b3ed;
        }
        textarea {
          width: 100%;
          height: 150px;
          padding: 10px;
          border: 1px solid #4a5568;
          border-radius: 5px;
          background-color: #1a202c;
          color: #f7fafc;
          font-family: monospace;
          resize: none;
        }
        button {
          padding: 10px 15px;
          background-color: #3182ce;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #63b3ed;
        }
        #clear-btn {
          background-color: #e53e3e;
        }
        #clear-btn:hover {
          background-color: #f56565;
        }
        label {
          color: #a0aec0;
          font-size: 0.9rem;
          margin-left: 8px;
        }
        input[type="checkbox"] {
          margin-right: 5px;
        }
        #output-container {
          margin-top: 20px;
          padding: 10px;
          background-color: #1a202c;
          border-radius: 5px;
          border: 1px solid #4a5568;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #f7fafc;
          font-family: monospace;
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
      `}</style>
      <h1 className="heading">MD5 Hash Generator</h1>
      <div className="container">
        <h1>String(s):</h1>
        <textarea
          id="input-text"
          placeholder="Enter your text here..."
          value={isUppercase ? input.toUpperCase() : input}
          onChange={handleInputChange}
          ref={inputRef}
        ></textarea>

        <button
          id="convert-btn"
          style={{ marginRight: "10px" }}
          onClick={generateHash}
        >
          Convert
        </button>
        <button id="clear-btn" onClick={clearInput}>
          X Clear
        </button>
        <br />

        <input
          type="checkbox"
          id="my-checkbox1"
          onChange={handleLineBreakToggle}
        />
        <label htmlFor="my-checkbox1">
          Treat multiple lines as separate strings (blank lines are ignored)
        </label>
        <br />

        <input
          type="checkbox"
          id="my-checkbox2"
          onChange={handleUppercaseToggle}
        />
        <label htmlFor="my-checkbox2">Uppercase hash(es)</label>
        <br />

        <h2>MD5 Hash(es):</h2>
        <div id="output-container">
          <pre id="output-hash">{hash}</pre>
        </div>
      </div>
    </>
  );
};
export default HashGenerator;
