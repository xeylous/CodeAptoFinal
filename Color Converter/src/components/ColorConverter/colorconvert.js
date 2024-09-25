'use client';
import { useState, useEffect } from 'react';
import Color from 'color';
import colorNamer from 'color-namer';
import { AiOutlineCopy } from 'react-icons/ai';

// Define a mapping for color names to hex codes
const colorNameToHex = {
  'red': '#FF0000',
  'green': '#00FF00',
  'blue': '#0000FF',
  // Add more color names as needed
};

const getRandomColor = () => {
  // Generate a random hex color code
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const ColorConverter = () => {
  const [colorInput, setColorInput] = useState(getRandomColor());
  const [colorData, setColorData] = useState(null);

  useEffect(() => {
    // Convert the initial color when component mounts
    handleConvertClick();
  }, []);

  const handleConvertClick = () => {
    try {
      let hexColor = colorInput;

      // Check if the input is a valid color name
      if (colorNameToHex[colorInput.toLowerCase()]) {
        hexColor = colorNameToHex[colorInput.toLowerCase()];
      }

      const color = Color(hexColor);  // Initialize Color object from input
      const hex = color.hex();
      const rgb = color.rgb().object();
      const hsl = color.hsl().round().string(); // Round HSL values
      const hwb = color.hwb().round().string(); // Round HWB values
      const cmyk = color.cmyk().string();
      const ncol = `ncol(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      const name = colorNamer(hex).ntc[0].name;

      setColorData({ rgb, hex, hsl, hwb, cmyk, ncol, name });
    } catch (e) {
      console.error('Invalid color input:', e);
      setColorData(null);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <>
    <h1 className="text-3xl font-bold text-center text-sky-300">Color Converter</h1>
    <div className="flex items-center justify-center h-screen p-5">
      <div className="flex flex-col items-center w-full max-w-lg">
        <div className="flex flex-col w-full mb-5">
          <input
            type="text"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            placeholder="Enter Color Code"
            className="p-2 border border-gray-300 rounded text-gray-600 w-full mb-2"
          />
          <button
            onClick={handleConvertClick}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            Convert
          </button>
        </div>
        {colorData && (
          <div className="w-full max-w-lg">
            
          
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center bg-gray-700">
              <span className="text-white">Color Name: {colorData.name}</span>
              <button onClick={() => copyToClipboard(colorData.name)}>
                  <AiOutlineCopy color="white" />
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">Hex: {colorData.hex}</span>
              <button onClick={() => copyToClipboard(colorData.hex)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">RGB: rgb({colorData.rgb.r}, {colorData.rgb.g}, {colorData.rgb.b})</span>
              <button onClick={() => copyToClipboard(`rgb(${colorData.rgb.r}, ${colorData.rgb.g}, ${colorData.rgb.b})`)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">HSL: {colorData.hsl}</span>
              <button onClick={() => copyToClipboard(colorData.hsl)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">HWB: {colorData.hwb}</span>
              <button onClick={() => copyToClipboard(colorData.hwb)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">CMYK: {colorData.cmyk}</span>
              <button onClick={() => copyToClipboard(colorData.cmyk)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            <div className="p-2 border border-gray-300 rounded mb-2 flex justify-between items-center  bg-gray-700">
              <span className="text-white">NCOL: {colorData.ncol}</span>
              <button onClick={() => copyToClipboard(colorData.ncol)}>
                <AiOutlineCopy color="white"/>
              </button>
            </div>
            {/* Color Preview */}
            <div className="p-2 border border-gray-300 rounded mt-4">
              <div
                style={{ backgroundColor: colorData.hex, width: '100%', height: '200px' }}
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default ColorConverter;
