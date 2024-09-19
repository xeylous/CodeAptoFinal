'use client';
import React, { useState } from 'react';

const HexToText = () => {
  const [fromValue, setFromValue] = useState('hex');
  const [toValue, setToValue] = useState('text');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleConvert = () => {
    if (!inputText.trim()) {
      alert('Please enter the value');
      return;
    }

    let result = '';
    switch (fromValue) {
      case 'hex':
        if (toValue === 'text') {
          result = inputText.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
        } else if (toValue === 'binary') {
          result = inputText.split(' ').map(hex => parseInt(hex, 16).toString(2).padStart(8, '0')).join(' ');
        } else if (toValue === 'ASCII' || toValue === 'decimal') {
          result = inputText.split(' ').map(hex => parseInt(hex, 16)).join(' ');
        }
        break;

      case 'binary':
        const binaryArray = inputText.split(' ');
        if (toValue === 'text') {
          result = binaryArray.map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
        } else if (toValue === 'hex') {
          result = binaryArray.map(bin => parseInt(bin, 2).toString(16).padStart(2, '0')).join(' ');
        } else if (toValue === 'ASCII' || toValue === 'decimal') {
          result = binaryArray.map(bin => parseInt(bin, 2)).join(' ');
        }
        break;

      case 'text':
        if (toValue === 'hex') {
          result = inputText.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
        } else if (toValue === 'binary') {
          result = inputText.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
        } else if (toValue === 'ASCII' || toValue === 'decimal') {
          result = inputText.split('').map(char => char.charCodeAt(0)).join(' ');
        }
        break;

      case 'ASCII':
      case 'decimal':
        const numberArray = inputText.split(' ');
        if (toValue === 'text') {
          result = numberArray.map(num => String.fromCharCode(num)).join('');
        } else if (toValue === 'hex') {
          result = numberArray.map(num => parseInt(num).toString(16).padStart(2, '0')).join(' ');
        } else if (toValue === 'binary') {
          result = numberArray.map(num => parseInt(num).toString(2).padStart(8, '0')).join(' ');
        }
        break;

      default:
        result = '';
    }
    setOutputText(result);
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleSample = () => {
    switch (fromValue) {
      case 'hex':
        setInputText('48 65 6c 6c 6f 20 57 6f 72 6c 64 21'); 
        break;
      case 'binary':
        setInputText('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001'); 
        break;
      case 'text':
        setInputText('Hello World!'); 
        break;
      case 'ASCII':
      case 'decimal':
        setInputText('72 101 108 108 111 32 87 111 114 108 100 33'); 
        break;
      default:
        setInputText('');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100%', height: '700px' }}>
      <center>
        <div style={{ backgroundColor: 'AliceBlue', width: '50%', height: '550px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ color: 'black', fontSize: '30px', textAlign: 'center', marginBottom: '20px' }}><b>Hex To Text Converter</b></h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <select 
              style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', padding: '10px', borderRadius: '5px' }}
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            >
              <option value="hex">Hex</option>
              <option value="binary">Binary</option>
              <option value="text">Text</option>
              <option value="ASCII">ASCII</option>
              <option value="decimal">Decimal</option>
            </select>
            <span style={{ color: 'black', padding: '10px', alignSelf: 'center' }}>To</span>
            <select 
              style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', padding: '10px', borderRadius: '5px' }}
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="hex">Hex</option>
              <option value="binary">Binary</option>
              <option value="ASCII">ASCII</option>
              <option value="decimal">Decimal</option>
            </select>
          </div>
          <textarea 
            style={{ width: '100%', height: '100px', backgroundColor: 'white', color: 'black', border: '1px solid black', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            placeholder="Enter your input here"
          />
          <textarea 
            style={{ width: '100%', height: '100px', backgroundColor: 'white', color: 'black', border: '1px solid black', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}
            value={outputText} 
            readOnly 
            placeholder="Output will appear here"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={handleClear} style={{ padding: '10px 20px', color: 'white', backgroundColor: 'red', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Clear</button>
            <button onClick={handleSample} style={{ padding: '10px 20px', color: 'white', backgroundColor: 'green', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sample</button>
            <button onClick={handleConvert} style={{ padding: '10px 20px', color: 'white', backgroundColor: '#0066cc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Convert</button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default HexToText;



