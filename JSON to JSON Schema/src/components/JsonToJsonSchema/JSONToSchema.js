'use client';
import { useState } from 'react';

const JSONToSchema = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [schemaOutput, setSchemaOutput] = useState('');
  const [error, setError] = useState('');

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
    setSchemaOutput(''); // Clear previous output
    setError('');
  };

  const convertToSchema = () => {
    if (!jsonInput.trim()) {
      setError('Please provide JSON.');
      return;
    }

    try {
      const jsonData = JSON.parse(jsonInput);
      const schema = generateSchema(jsonData, 'Welcome6');
      setSchemaOutput(JSON.stringify(schema, null, 2)); // Pretty print JSON schema
      setError('');
    } catch (error) {
      setError('Invalid JSON input.');
      setSchemaOutput('');
    }
  };

  const generateSchema = (data, rootTitle) => {
    const definitions = {};

    const createDefinition = (obj, title) => {
      const definition = {
        type: 'object',
        additionalProperties: false,
        properties: {},
        required: [],
        title,
      };

      for (const [key, value] of Object.entries(obj)) {
        if (value === null) {
          definition.properties[key] = { type: 'null' };
        } else if (Array.isArray(value)) {
          definition.properties[key] = {
            type: 'array',
            items: value.length > 0 && typeof value[0] === 'object'
              ? createReference(value[0], key)
              : { type: typeof value[0] },
          };
        } else if (typeof value === 'object') {
          definition.properties[key] = createReference(value, key);
        } else {
          definition.properties[key] = { type: typeof value };
        }
        definition.required.push(key);
      }

      return definition;
    };

    const createReference = (value, key) => {
      const refTitle = key[0].toUpperCase() + key.slice(1);
      definitions[refTitle] = createDefinition(value, refTitle);
      return { $ref: `#/definitions/${refTitle}` };
    };

    const rootSchema = {
      "$schema": "http://json-schema.org/draft-06/schema#",
      "$ref": `#/definitions/${rootTitle}`,
      "definitions": {
        [rootTitle]: createDefinition(data, rootTitle),
        ...definitions
      }
    };

    return rootSchema;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        setJsonInput(content);
        setSchemaOutput(''); // Clear previous output
        setError('');
      } catch {
        setError('Uploaded file does not contain valid JSON.');
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
    };
    reader.readAsText(file);
  };

  const clearAll = () => {
    setJsonInput('');
    setSchemaOutput('');
    setError('');
  };

  const downloadSchema = () => {
    if (!schemaOutput.trim()) {
      setError('No schema to download.');
      return;
    }

    const blob = new Blob([schemaOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schema.json';
    a.click();
    URL.revokeObjectURL(url);
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

        .convert-button {
          background-color: #3182ce;
        }

        .download-button {
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

        .json-input, .schema-output {
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

      <div className="container">
        <div className="button-container">
          <input
            type="file"
            className="file-input"
            accept=".json"
            onChange={handleFileUpload}
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="button">Add File</label>
          <button onClick={convertToSchema} className="button convert-button">Convert to Schema</button>
          <button onClick={downloadSchema} className="button download-button">Download Schema</button>
          <button onClick={clearAll} className="button clear-button">Clear</button>
        </div>

        <div className="grid-container">
          <div className="json-input">
            <h2>Input JSON</h2>
            <textarea
              className="textarea"
              placeholder="Paste your JSON code here"
              value={jsonInput}
              onChange={handleJsonChange}
            />
            {error && <p className="error">{error}</p>}
          </div>

          <div className="schema-output">
            <h2>JSON Schema Output</h2>
            <textarea
              className="textarea"
              value={schemaOutput}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSONToSchema;