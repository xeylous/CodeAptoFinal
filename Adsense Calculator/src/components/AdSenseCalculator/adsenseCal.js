'use client'
import { useState } from "react";

export default function Home() {
  const [youtubeViews, setYoutubeViews] = useState("");
  const [watchTime, setWatchTime] = useState("");
  const [youtubeRpm, setYoutubeRpm] = useState("");
  const [dailyPageImpressions, setDailyPageImpressions] = useState("");
  const [clickThroughRate, setClickThroughRate] = useState("");
  const [costPerClick, setCostPerClick] = useState("");
  const [youtubeEarnings, setYoutubeEarnings] = useState(null);
  const [websiteEarnings, setWebsiteEarnings] = useState(null);

  const calculateYoutubeEarnings = () => {
    // Validate inputs
    if (
      youtubeViews <= 0 ||
      watchTime <= 0 ||
      youtubeRpm <= 0
    ) {
      alert("Please enter valid values for all inputs.");
      return;
    }

    // Calculate earnings
    const ytEarnings = ((youtubeViews / 1000) * youtubeRpm).toFixed(2);
    setYoutubeEarnings(ytEarnings);
  };

  const calculateWebsiteEarnings = () => {
    // Validate inputs
    if (
      dailyPageImpressions <= 0 ||
      clickThroughRate < 0 ||
      clickThroughRate > 100 ||
      costPerClick <= 0
    ) {
      alert("Please enter valid values for all inputs.");
      return;
    }

    // Calculate earnings
    const clicks = (dailyPageImpressions * (clickThroughRate / 100)).toFixed(2);
    const earnings = (clicks * costPerClick).toFixed(2);
    setWebsiteEarnings(earnings);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 flex justify-center items-center py-8">
      <div className="bg-gray-700 p-8 rounded-lg shadow-md w-11/12 sm:w-10/12 lg:w-8/12 flex flex-col lg:flex-row">
        
        {/* YouTube Section */}
        <div className="lg:w-1/2 lg:pr-4 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-center lg:text-left">YouTube Earnings</h2>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">YouTube Views</label>
            <input
              type="number"
              value={youtubeViews}
              onChange={(e) => setYoutubeViews(e.target.value)}
              placeholder="Enter the positive number"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Watch Time (hours)</label>
            <input
              type="number"
              value={watchTime}
              onChange={(e) => setWatchTime(e.target.value)}
              placeholder="Enter the positive number"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">YouTube RPM ($)</label>
            <input
              type="number"
              value={youtubeRpm}
              onChange={(e) => setYoutubeRpm(e.target.value)}
              placeholder="Enter the positive number"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <button
            onClick={calculateYoutubeEarnings}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Calculate YouTube Earnings
          </button>

          {youtubeEarnings !== null && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-center lg:text-left">
                Estimated Earnings: ${youtubeEarnings}
              </h3>
            </div>
          )}
        </div>

        {/* Website Section */}
        <div className="lg:w-1/2 lg:pl-4">
          <h2 className="text-xl font-semibold mb-4 text-center lg:text-left">Website Earnings</h2>
          
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Daily Page Impressions</label>
            <input
              type="number"
              value={dailyPageImpressions}
              onChange={(e) => setDailyPageImpressions(e.target.value)}
              placeholder="Enter the positive number"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Click Through Rate (%)</label>
            <input
              type="number"
              value={clickThroughRate}
              onChange={(e) => setClickThroughRate(e.target.value)}
              placeholder="Enter a number between 0 and 100"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Cost Per Click ($)</label>
            <input
              type="number"
              value={costPerClick}
              onChange={(e) => setCostPerClick(e.target.value)}
              placeholder="Enter the positive number"
              className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none"
            />
          </div>

          <button
            onClick={calculateWebsiteEarnings}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Calculate Website Earnings
          </button>

          {websiteEarnings !== null && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-center lg:text-left">
                Estimated Earnings: ${websiteEarnings}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}