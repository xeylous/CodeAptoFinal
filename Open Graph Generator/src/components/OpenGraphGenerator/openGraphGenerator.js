'use client'
import { useState } from 'react';

const OpenGraphGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateMetaTags = () => {
    return `
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${imageUrl}" />
    `;
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Open Graph Generator</h1>
      <div className="w-full max-w-lg bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-600 text-gray-300 rounded break-words"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 bg-gray-600 text-gray-300 rounded break-words"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 bg-gray-600 text-gray-300 rounded break-words"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Generated Meta Tags</h2>
          <textarea
            readOnly
            value={generateMetaTags()}
            className="w-full p-4 bg-gray-900 text-gray-300 rounded text-sm break-words"
            rows="6"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenGraphGenerator;