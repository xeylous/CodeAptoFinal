'use client';
import { useState } from "react";

const TimeCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("12:00");
  const [startAmPm, setStartAmPm] = useState("AM");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("12:00");
  const [endAmPm, setEndAmPm] = useState("AM");
  const [hoursBetweenDateTimes, setHoursBetweenDateTimes] = useState(null);

  const convertTo24HourFormat = (time, amPm) => {
    let [hours, minutes] = time.split(":").map(Number);
    if (amPm === "PM" && hours < 12) hours += 12;
    if (amPm === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateHoursBetweenDateTimes = () => {
    if (startDate && endDate) {
      const startDateTime = new Date(
        `${startDate}T${convertTo24HourFormat(startTime, startAmPm)}`
      );
      const endDateTime = new Date(
        `${endDate}T${convertTo24HourFormat(endTime, endAmPm)}`
      );

      const diff = (endDateTime - startDateTime) / (1000 * 60 * 60);
      setHoursBetweenDateTimes(diff < 0 ? 0 : diff); // Ensure no negative hours
    }
  };

  const setNowDateTime = (setDate, setTime, setAmPm) => {
    const now = new Date();
    const nowDate = now.toISOString().split("T")[0];
    const nowTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const [hours, minutes] = nowTime.split(":");
    setDate(nowDate);
    setTime(`${hours}:${minutes}`); // Set time in HH:MM format only
    setAmPm(now.getHours() >= 12 ? "PM" : "AM"); // Set AM/PM separately if needed
  };

  return (
    <>
    <h1 className="text-3xl  mb-2 text-center text-sky-300">  Hours Calculator</h1> 
      <div className="bg-black  text-gray-300  flex items-center justify-center">
        <div className="w-full max-w-5xl flex justify-center">
          {/* Date and Time Section */}
          <div className="border border-gray-400 p-6 rounded w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Calculate Hours Between Two Dates and Times
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="startDate" className="block text-sm mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="startTime" className="block text-sm mb-2">
                    Start Time
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      id="startTime"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      placeholder="HH:MM"
                      className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300 w-24"
                    />
                    <select
                      value={startAmPm}
                      onChange={(e) => setStartAmPm(e.target.value)}
                      className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                    <button
                      onClick={() =>
                        setNowDateTime(setStartDate, setStartTime, setStartAmPm)
                      }
                      className="p-2 bg-gray-600 rounded"
                    >
                      Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="endDate" className="block text-sm mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="endTime" className="block text-sm mb-2">
                    End Time
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      id="endTime"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      placeholder="HH:MM"
                      className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300 w-24"
                    />
                    <select
                      value={endAmPm}
                      onChange={(e) => setEndAmPm(e.target.value)}
                      className="p-2 bg-gray-600 text-gray-200 rounded border border-gray-300"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                    <button
                      onClick={() =>
                        setNowDateTime(setEndDate, setEndTime, setEndAmPm)
                      }
                      className="p-2 bg-gray-600 rounded"
                    >
                      Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={calculateHoursBetweenDateTimes}
                className="p-2 bg-blue-600 text-gray-200 rounded"
              >
                Calculate
              </button>
              {hoursBetweenDateTimes !== null && (
                <p className="mt-4">
                  Hours Between: {Math.max(0, hoursBetweenDateTimes.toFixed(0))}{" "}
                  hours
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeCalculator;