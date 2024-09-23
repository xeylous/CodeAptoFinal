'use client'
import React, { useState } from "react";

const BinaryToHexConverter = () => {
  const [binary, setBinary] = useState("");
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");

  const convert = () => {
    if (binary) {
      const bin = binary.replace(/[^01]/g, ""); // Remove any non-binary characters
      const num = parseInt(bin, 2);
      const hexValue = num.toString(16).toUpperCase();
      const decValue = num.toString(10);

      setHex(hexValue);
      setDecimal(decValue);
    }
  };

  const reset = () => {
    setBinary("");
    setHex("");
    setDecimal("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex mb-4">
        <div className="mr-2 w-1/2">
          <label className="block text-gray-300">From</label>
          <input
            type="text"
            value="Binary"
            readOnly
            className="bg-gray-700 text-gray-300 border-none rounded px-2 py-1 w-full"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-300">To</label>
          <input
            type="text"
            value="Hex / Decimal"
            readOnly
            className="bg-gray-700 text-gray-300 border-none rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Enter binary number</label>
        <input
          type="text"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
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
        <label className="block text-gray-300">Hex number</label>
        <textarea
          value={hex}
          readOnly
          className="w-full bg-gray-700 text-gray-300 border-none rounded px-3 py-2"
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

export default BinaryToHexConverter;