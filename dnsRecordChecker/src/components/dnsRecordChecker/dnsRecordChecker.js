'use client';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { FaCopy } from 'react-icons/fa'; // Import the copy icon from react-icons

const fetchDNSRecords = async (domain) => {
  if (!domain) return;

  try {
    const response = await axios.get(`/api/dnsRecords?domain=${domain}`);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching DNS records:", error.message);
    throw new Error("Error fetching DNS records");
  }
};

const DNSRecordChecker = () => {
  const [domainInput, setDomainInput] = useState(''); // For input field
  const [domain, setDomain] = useState(''); // For triggering fetch on submit
  const [data, setData] = useState(null); // Store DNS records locally

  const { isLoading, isError, error } = useQuery(
    ['dnsRecords', domain],
    () => fetchDNSRecords(domain),
    {
      enabled: !!domain, // Only fetch when the domain is set (on submit)
      onSuccess: (data) => setData(data), // Store fetched data
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setDomain(domainInput); // Set the domain only on form submit
  };

  const handleClear = () => {
    setDomainInput('');
    setDomain('');
    setData(null);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${domain}-dns-records.json`; // Name of the download file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const renderRecords = (type) => {
    const record = data?.find(record => record.type === type);

    if (!record || !record.records) {
      return (
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <p>No {type} records found.</p>
        </div>
      );
    }

    // Ensure each record is displayed in a separate box
    const recordsToDisplay = Array.isArray(record.records) ? record.records : [record.records];

    return (
      <div>
        <strong>{type} Records:</strong>
        {recordsToDisplay.map((rec, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4 flex justify-between items-center">
            <span>{typeof rec === 'object' ? JSON.stringify(rec) : rec}</span>
            <FaCopy 
              onClick={() => handleCopy(typeof rec === 'object' ? JSON.stringify(rec) : rec)} 
              className="cursor-pointer text-blue-500 hover:text-blue-400"
              title="Copy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-sky-300">DNS Record Checker</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={domainInput}
          onChange={(e) => setDomainInput(e.target.value)}
          placeholder="Enter domain name"
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        />
        <p className="mb-4">Example: www.codeapto.com</p>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="flex-shrink-0 px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            Check
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-shrink-0 px-4 py-1 bg-red-600 hover:bg-red-700 rounded text-white"
          >
            Clear
          </button>
          {data && (
            <button
              type="button"
              onClick={handleDownload}
              className="flex-shrink-0 px-4 py-1 bg-green-600 hover:bg-green-700 rounded text-white"
            >
              Download
            </button>
          )}
        </div>
      </form>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="text-red-500">Error fetching records: {error.message}</p>}
        {data && (
          <div className="bg-gray-900 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">DNS Records for {domain}</h2>
            {renderRecords('A')}
            {renderRecords('AAAA')}
            {renderRecords('MX')}
            {renderRecords('NS')}
            {renderRecords('TXT')}
            {renderRecords('SOA')}
          </div>
        )}
      </div>
    </div>
  );
};

export default DNSRecordChecker;
