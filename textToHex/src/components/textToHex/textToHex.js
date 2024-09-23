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

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert('Copied to clipboard');
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl text-center mb-6 font-bold">Hex To Text Converter</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <select 
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          >
            <option value="hex">Hex</option>
            <option value="binary">Binary</option>
            <option value="text">Text</option>
            <option value="ASCII">ASCII</option>
            <option value="decimal">Decimal</option>
          </select>
          <span className="text-white px-4">To</span>
          <select 
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
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
          className="w-full p-4 mb-6 bg-gray-700 text-white rounded-md focus:outline-none h-24"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your input here"
        />
        <div className="relative">
          <textarea 
            className="w-full p-4 mb-6 bg-gray-700 text-white rounded-md focus:outline-none h-24"
            value={outputText}
            readOnly
            placeholder="Output will appear here"
          />
          <button 
            className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between">
          <button 
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Clear
          </button>
          <button 
            onClick={handleSample}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Sample
          </button>
          <button 
            onClick={handleConvert}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default HexToText;
