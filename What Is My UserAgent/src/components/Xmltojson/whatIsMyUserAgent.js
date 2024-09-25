'use client'
import React, { useState, useEffect } from 'react';

const UserAgentDisplay = () => {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    // Get user agent when component mounts
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 flex items-center justify-center">
      <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Your User Agent</h1>
        <p className="text-lg mb-2">The user agent string of your browser is:</p>
        <pre className="bg-gray-700 p-4 rounded mt-2 overflow-x-auto">{userAgent}</pre>
      </div>
    </div>
  );
};

export default UserAgentDisplay;