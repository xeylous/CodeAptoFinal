'use client';
import React, { useState } from 'react';

const UrlParser = () => {
  const [url, setUrl] = useState('');
  const [parsedUrl, setParsedUrl] = useState(null);
  const [error, setError] = useState('');

  const handleUrlChange = (event) => {
    const inputUrl = event.target.value;
    setUrl(inputUrl);
    setParsedUrl(null);
    setError('');
  };

  const parseUrl = () => {
    try {
      const urlObject = new URL(url);
      const searchParams = new URLSearchParams(urlObject.search);

      const currentJobId = searchParams.get('currentJobId');
      const eBP = searchParams.get('eBP');
      const refId = searchParams.get('refId');
      const trackingId = searchParams.get('trackingId');

      setParsedUrl({
        protocol: urlObject.protocol.replace(':', ''),
        host: urlObject.hostname,
        path: urlObject.pathname,
        params: {
          currentJobId,
          eBP,
          refId,
          trackingId,
        },
      });
    } catch (error) {
      setParsedUrl(null);
      setError('Invalid URL');
    }
  };

  const clearAll = () => {
    setUrl('');
    setParsedUrl(null);
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

        .heading {
          font-size: 2rem;
          text-align: center;
          color: #33ffff;
          margin-bottom: 20px;
        }
          
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .button {
          padding: 10px 20px;
          color: #ffffff;
          background-color: #4a5568;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          text-align: center;
        }

        .button:hover {
          opacity: 0.9;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .input-container, .output-container {
          display: flex;
          flex-direction: column;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #ffffff;
        }

        input {
          padding: 15px;
          width: 100%;
          font-family: monospace;
          background-color: #4a5568;
          border: 1px solid #2d3748;
          color: #ffffff;
          border-radius: 5px;
          outline: none;
        }

        table {
          width: 100%;
          max-width: 100%;
          margin: auto;
          border-collapse: collapse;
          background-color: #4a5568;
          word-wrap: break-word;
        }

        td, th {
          border: 1px solid #ffffff;
          padding: 8px;
          color: #ffffff;
          text-align: left;
          word-break: break-word;
        }

        .error {
          color: #fc8181;
          margin-top: 10px;
        }

        .heading {
          font-size: 2rem;
          text-align: center;
          color: #33ffff;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 70%;
          }

        .heading {
          font-size: 2rem;
          text-align: center;
          color: #33ffff;
          margin-bottom: 20px;
        }
      `}</style>

      <h1 className='heading'>UrL Parser</h1>
      <div className="container">
        <div className="grid-container">
          <div className="input-container">
            <h2>Enter URL here</h2>
            <input
              type="text"
              placeholder="Enter URL here"
              value={url}
              onChange={handleUrlChange}
            />
            {error && <p className="error">{error}</p>}
          </div>

          {parsedUrl && (
            <div className="output-container">
              <h2>Parsed URL</h2>
              <table>
                <tbody>
                  <tr>
                    <td><b>PROTOCOL:</b></td>
                    <td>{parsedUrl.protocol}</td>
                  </tr>
                  <tr>
                    <td><b>HOST:</b></td>
                    <td>{parsedUrl.host}</td>
                  </tr>
                  <tr>
                    <td><b>PATH:</b></td>
                    <td>{parsedUrl.path}</td>
                  </tr>
                  <tr>
                    <td><b>PARAMS:</b></td>
                    <td>
                      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <tbody>
                          {parsedUrl.params.currentJobId && (
                            <tr>
                              <td><b>currentJobId</b></td>
                              <td>=</td>
                              <td>{parsedUrl.params.currentJobId}</td>
                            </tr>
                          )}
                          {parsedUrl.params.eBP && (
                            <tr>
                              <td><b>eBP</b></td>
                              <td>=</td>
                              <td>{parsedUrl.params.eBP}</td>
                            </tr>
                          )}
                          {parsedUrl.params.refId && (
                            <tr>
                              <td><b>refId</b></td>
                              <td>=</td>
                              <td>{parsedUrl.params.refId}</td>
                            </tr>
                          )}
                          {parsedUrl.params.trackingId && (
                            <tr>
                              <td><b>trackingId</b></td>
                              <td>=</td>
                              <td>{parsedUrl.params.trackingId}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="button-container">
          <button onClick={parseUrl} className="button">
            Parse
          </button>
          <button onClick={clearAll} className="button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlParser;
