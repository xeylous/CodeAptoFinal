'use client';
import React, { useState } from 'react';

const TextCompare = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [error, setError] = useState("");
  const [highlightedText1, setHighlightedText1] = useState([]);
  const [highlightedText2, setHighlightedText2] = useState([]);
  const [showResults, setShowResults] = useState(false); // New state to control visibility of results

  const handleJsonChange1 = (e) => {
    setText1(e.target.value);
    setError("");
    setShowResults(false); // Hide results if text changes
  };

  const handleJsonChange2 = (e) => {
    setText2(e.target.value);
    setError("");
    setShowResults(false); // Hide results if text changes
  };

  const switchTexts = () => {
    setText1(text2);
    setText2(text1);
    setShowResults(false); // Hide results after switching
  };

  const clearAll = () => {
    setText1("");
    setText2("");
    setError("");
    setHighlightedText1([]);
    setHighlightedText2([]);
    setShowResults(false); // Hide results after clearing
  };

  const compareTexts = () => {
    if (!text1 || !text2) {
      setError("Please fill in both text fields to compare.");
      return;
    }

    const words1 = text1.split(" ");
    const words2 = text2.split(" ");
    const commonWords = words1.filter(word => words2.includes(word));

    const highlighted1 = words1.map((word, index) => (
      <span key={index} style={{ backgroundColor: commonWords.includes(word) ? '#90cdf4' : 'transparent' }}>
        {word}{" "}
      </span>
    ));

    const highlighted2 = words2.map((word, index) => (
      <span key={index} style={{ backgroundColor: commonWords.includes(word) ? '#90cdf4' : 'transparent' }}>
        {word}{" "}
      </span>
    ));

    setHighlightedText1(highlighted1);
    setHighlightedText2(highlighted2);
    setShowResults(true); // Show results after comparison
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
          background-color: #3182ce;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          text-align: center;
          flex: 1;
        }

        .compare-button {
          background-color: #38a169;
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

        .result {
          margin-top: 20px;
          color: #ffffff;
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

        {error && <p className="error">{error}</p>}

        {/* Render results only if showResults is true */}
        {showResults && (
          <div className="result">
            <h2>Text 1:</h2>
            <p>{highlightedText1}</p>
            <h2>Text 2:</h2>
            <p>{highlightedText2}</p>
          </div>
        )}

        <div className="button-container">
          <button onClick={switchTexts} className="button">
            Switch texts
          </button>
          <button onClick={compareTexts} className="button compare-button">
            Compare!
          </button>
          <button onClick={clearAll} className="button">
            Clear all
          </button>
        </div>
        
        <div className="grid-container">
          <div className="json-input">
            <textarea
              className="textarea"
              placeholder="Paste one version of a text here."
              value={text1}
              onChange={handleJsonChange1}
            />
          </div>

          <div className="minified-output">
            <textarea
              className="textarea"
              placeholder="Paste another version of a text here."
              value={text2}
              onChange={handleJsonChange2}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TextCompare;