'use client';
import React, { useState } from 'react';

const MetaTagGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [metaTags, setMetaTags] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setMetaTags(''); // Clear previous output
    setError('');
  };

  const generateMetaTags = () => {
    if (!title || !description) {
      setError('Title and Description are required.');
      return;
    }

    if (title.length > 70) {
      setError('Title must be within 70 characters.');
      return;
    }

    if (description.length > 150) {
      setError('Description must be within 150 characters.');
      return;
    }

    const generatedTags = `
      <!-- Primary Meta Tags -->
      <title>${title}</title>
      <meta name="title" content="${title}">
      <meta name="description" content="${description}">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="${siteUrl}">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${imageUrl}">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${siteUrl}">
      <meta property="twitter:title" content="${title}">
      <meta property="twitter:description" content="${description}">
      <meta property="twitter:image" content="${imageUrl}">

      <!-- Optional Meta Tags -->
      <meta name="keywords" content="${keywords}">
      <meta name="robots" content="index, follow">
      <meta name="author" content="${author}">
    `.trim();

    setMetaTags(generatedTags);
    setError('');
  };

  const handleDownload = () => {
    const blob = new Blob([metaTags], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'meta-tags.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaTags);
    alert('Meta tags copied to clipboard');
  };

  const clearAll = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setSiteUrl('');
    setKeywords('');
    setAuthor('');
    setMetaTags('');
    setError('');
  };

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 90%;
          margin: 0 auto;
          background-color: #1a202c;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .button-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .button {
          padding: 12px 25px;
          color: #ffffff;
          border-radius: 6px;
          cursor: pointer;
          border: none;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        .generate-button {
          background-color: #3182ce;
        }

        .download-button {
          background-color: #38a169;
        }

        .copy-button, .clear-button {
          background-color: #805ad5;
        }

        .button:hover {
          opacity: 0.9;
        }

        .button:focus {
          outline: 2px solid #ffffff;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .input-section {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          font-family: sans-serif;
          background-color: #2d3748;
          border: 1px solid #4a5568;
          color: #e2e8f0;
          border-radius: 6px;
          outline: none;
          margin-bottom: 10px;
        }

        .input-field:focus {
          border-color: #63b3ed;
        }

        .error {
          color: #e53e3e;
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }

          .input-field {
            height: auto;
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
        }
      `}</style>

      <div className="container">
        <div className="button-container">
          <button onClick={generateMetaTags} className="button generate-button">
            Generate Meta Tags
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
          <div className="input-section">
            <h2>Meta Tag Inputs</h2>
            <input
              type="text"
              placeholder="Site Title (max 70 characters)"
              className="input-field"
              value={title}
              onChange={handleInputChange(setTitle)}
              maxLength="70"
            />
            <input
              type="text"
              placeholder="Site Description (max 150 characters)"
              className="input-field"
              value={description}
              onChange={handleInputChange(setDescription)}
              maxLength="150"
            />
            <input
              type="text"
              placeholder="Main Image URL"
              className="input-field"
              value={imageUrl}
              onChange={handleInputChange(setImageUrl)}
            />
            <input
              type="text"
              placeholder="Site URL"
              className="input-field"
              value={siteUrl}
              onChange={handleInputChange(setSiteUrl)}
            />
            <input
              type="text"
              placeholder="Site Keywords (comma-separated)"
              className="input-field"
              value={keywords}
              onChange={handleInputChange(setKeywords)}
            />
            <input
              type="text"
              placeholder="Author Name"
              className="input-field"
              value={author}
              onChange={handleInputChange(setAuthor)}
            />
            {error && (
              <p className="error">{error}</p>
            )}
          </div>

          <div className="input-section">
            <h2>Generated Meta Tags</h2>
            <textarea
              className="input-field"
              style={{ height: '250px' }}
              value={metaTags}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTagGenerator;