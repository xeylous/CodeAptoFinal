"use client";
import { useState } from "react";

const HostingChecker = () => {
  const [domain, setDomain] = useState("");
  const [hostInfo, setHostInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidDomain = (domain) => {
    const domainPattern = /^[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/;
    return domainPattern.test(domain);
  };

  const checkIP = async () => {
    if (!isValidDomain(domain)) {
      setError("Please enter a valid domain name (e.g., example.com).");
      return;
    }

    setLoading(true);
    setHostInfo(null);
    setError(null);

    try {
      const response = await fetch("/api/domainToIp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });
      const data = await response.json();
      if (response.ok) {
        setHostInfo(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const clearFields = () => {
    setDomain("");
    setHostInfo(null);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent text-gray-300">
      <div className="max-w-md w-full bg-gray-700 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Domain To Ip</h1>
        <p className="text-gray-400 mb-4">
          Easily check Ip of any domain.
        </p>
        <h3 className="text-l mb-2">Enter domain (e.g., example.com)</h3>
        <input
          type="text"
          placeholder="Enter domain name"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-600 text-gray-300"
        />
        <button
          onClick={checkIP}
          className={`w-full p-2 rounded ${
            loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check IP"}
        </button>
        <button
          onClick={clearFields}
          className="w-full p-2 mt-2 bg-red-500 hover:bg-red-600 rounded"
        >
          Clear
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {hostInfo && (
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Hosting Information:</h2>
            <p>IP Address: {hostInfo.ip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostingChecker;
