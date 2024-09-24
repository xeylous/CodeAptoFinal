'use client';

import { useState } from 'react';

export default function DecimalToBinary() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [isBinaryToDecimal, setIsBinaryToDecimal] = useState(true);

  const handleConvert = () => {
    if (isBinaryToDecimal) {
      if (/^[01]+$/.test(binary)) {
        setDecimal(parseInt(binary, 2).toString());
      } else {
        alert('Please enter a valid binary number (only 0s and 1s).');
      }
    } else {
      if (/^\d+$/.test(decimal)) {
        setBinary(Number(decimal).toString(2));
      } else {
        alert('Please enter a valid decimal number.');
      }
    }
  };

  const handleReset = () => {
    setBinary('');
    setDecimal('');
  };

  const handleSwap = () => {
    setIsBinaryToDecimal(!isBinaryToDecimal);
    handleReset();
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
      backgroundColor: '#f7f7e1', 
      borderRadius: '10px', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
      width: '400px', 
      margin: '50px auto' 
    }}>
      <h1 style={{fontSize: '20px' }} > <b>  {isBinaryToDecimal ? 'Binary to Decimal Converter:' : 'Decimal to Binary Converter:'} </b> </h1>
      
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>{isBinaryToDecimal ? 'Enter binary number' : 'Enter decimal number'}</label>
        <input
          type="text"
          value={isBinaryToDecimal ? binary : decimal}
          onChange={(e) => isBinaryToDecimal ? setBinary(e.target.value) : setDecimal(e.target.value)}
          placeholder={isBinaryToDecimal ? "Binary number" : "Decimal number"}
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            width: '100%', 
            marginTop: '5px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={handleConvert}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#28a745',
            color: 'white',
            marginRight: '10px',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          = Convert
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: 'white',
            marginRight: '10px',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          ✖ Reset
        </button>
        <button
          onClick={handleSwap}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          ↕ Swap
        </button>
      </div>
      
      <div style={{ width: '100%' }}>
        <label>{isBinaryToDecimal ? 'Decimal number' : 'Binary number'}</label>
        <textarea
          value={isBinaryToDecimal ? decimal : binary}
          readOnly
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            width: '100%', 
            height: '50px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginTop: '5px' 
          }}
        />
      </div>
    </div>
  );
}
