'use client'
import React, { useState } from "react";

const HexToBinaryDecimalConverter = () => {
  const [hex, setHex] = useState("");
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  const convert = () => {
    if (hex) {
      const hexValue = hex.replace(/[^0-9A-Fa-f]/g, ""); // Remove any non-hex characters
      const num = parseInt(hexValue, 16);
      const bin = num.toString(2).padStart(4 * hexValue.length, "0"); // Ensure correct padding
      const decValue = num.toString(10);

      setBinary(bin);
      setDecimal(decValue);
    }
  };

  const reset = () => {
    setHex("");
    setBinary("");
    setDecimal("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex mb-4">
        <div className="mr-2 w-1/2">
          <label className="block text-gray-300">From</label>
          <input
            type="text"
            value="Hex"
            readOnly
            className="bg-gray-700 text-gray-300 border-none rounded px-2 py-1 w-full"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-300">To</label>
          <input
            type="text"
            value="Binary / Decimal"
            readOnly
            className="bg-gray-700 text-gray-300 border-none rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Enter hexadecimal number</label>
        <input
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="w-full bg-gray-700 text-gray-300 border-none rounded px-3 py-2"
        />
      </div>
      <div className="flex items-center mb-4">
        <button
          onClick={convert}
          className="bg-green-600 hover:bg-green-700 text-gray-300 px-4 py-2 rounded mr-2"
        >
          Convert
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Binary number</label>
        <textarea
          value={binary}
          readOnly
          className="w-full bg-gray-700 text-gray-300 border-none rounded px-3 py-2 break-words"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Decimal number</label>
        <textarea
          value={decimal}
          readOnly
          className="w-full bg-gray-700 text-gray-300 border-none rounded px-3 py-2"
        />
      </div>
    </div>
  );
};

export default HexToBinaryDecimalConverter;