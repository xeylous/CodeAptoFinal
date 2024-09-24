'use client';
import { useState } from 'react';

const ProbabilityCalculator = () => {
  // State variables for the tools
  const [singleEventA, setSingleEventA] = useState('');
  const [singleEventB, setSingleEventB] = useState('');
  const [probA, setProbA] = useState('');
  const [probB, setProbB] = useState('');
  const [probANot, setProbANot] = useState('');
  const [probBNot, setProbBNot] = useState('');
  const [probAB, setProbAB] = useState('');
  const [probAOrB, setProbAOrB] = useState('');
  const [probAXorB, setProbAXorB] = useState('');
  const [probNeither, setProbNeither] = useState('');
  const [repeatedA, setRepeatedA] = useState('');
  const [repeatedB, setRepeatedB] = useState('');
  const [probAReps, setProbAReps] = useState('');
  const [probBReps, setProbBReps] = useState('');
  const [mean, setMean] = useState('');
  const [stdDev, setStdDev] = useState('');
  const [leftBound, setLeftBound] = useState('');
  const [rightBound, setRightBound] = useState('');
  const [normalDistResult, setNormalDistResult] = useState('');

  // Probability of Single Event
  const calculateSingleEvent = () => {
    const intersection = (parseFloat(singleEventA) * parseFloat(singleEventB)).toFixed(2);
    const union = (parseFloat(singleEventA) + parseFloat(singleEventB) - intersection).toFixed(2);
    alert(`P(A ∩ B) = ${intersection}, P(A ∪ B) = ${union}`);
  };

  const clearSingleEvent = () => {
    setSingleEventA('');
    setSingleEventB('');
  };

  // Probability of Two Events
  const calculateTwoEvents = () => {
    const PA = parseFloat(probA) || (1 - parseFloat(probANot));
    const PB = parseFloat(probB) || (1 - parseFloat(probBNot));

    if (PA < 0 || PA > 1 || PB < 0 || PB > 1) {
      alert('Please enter values between 0 and 1.');
      return;
    }

    const PAB = PA * PB;
    const PAorB = PA + PB - PAB;
    const PAXorB = PAorB - PAB;
    const PNeither = 1 - PAorB;

    setProbAB(PAB.toFixed(2));
    setProbAOrB(PAorB.toFixed(2));
    setProbAXorB(PAXorB.toFixed(2));
    setProbNeither(PNeither.toFixed(2));
    setProbANot((1 - PA).toFixed(2));
    setProbBNot((1 - PB).toFixed(2));
  };

  const clearTwoEvents = () => {
    setProbA('');
    setProbB('');
    setProbANot('');
    setProbBNot('');
    setProbAB('');
    setProbAOrB('');
    setProbAXorB('');
    setProbNeither('');
  };

  // Probability of a Series of Independent Events
  const calculateSeries = () => {
    const probAResult = Math.pow(parseFloat(repeatedA), parseInt(probAReps));
    const probBResult = Math.pow(parseFloat(repeatedB), parseInt(probBReps));
    alert(`P(A)^n = ${probAResult.toFixed(2)}, P(B)^n = ${probBResult.toFixed(2)}`);
  };

  const clearSeries = () => {
    setRepeatedA('');
    setRepeatedB('');
    setProbAReps('');
    setProbBReps('');
  };

  // Probability of a Normal Distribution
  const calculateNormalDistribution = () => {
    const zLeft = (parseFloat(leftBound) - parseFloat(mean)) / parseFloat(stdDev);
    const zRight = (parseFloat(rightBound) - parseFloat(mean)) / parseFloat(stdDev);
    const area = (cdf(zRight) - cdf(zLeft)).toFixed(4);
    setNormalDistResult(`P(Lb < X < Rb) = ${area}`);
  };

  const clearNormalDistribution = () => {
    setMean('');
    setStdDev('');
    setLeftBound('');
    setRightBound('');
    setNormalDistResult('');
  };

  // Cumulative distribution function for standard normal distribution
  const cdf = (z) => {
    return (1.0 + erf(z / Math.sqrt(2.0))) / 2.0;
  };

  // Error function approximation for CDF calculation
  const erf = (x) => {
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  };

  return (
    <div className="p-6 bg-gray-800 text-gray-200 space-y-8">
      {/* Probability of Single Event */}
      <div className="border border-gray-600 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Probability of Single Event</h2>
        <div className="mb-4">
          <label className="block mb-2">P(A)</label>
          <input
            type="number"
            value={singleEventA}
            onChange={(e) => setSingleEventA(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter P(A)"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">P(B)</label>
          <input
            type="number"
            value={singleEventB}
            onChange={(e) => setSingleEventB(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter P(B)"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
        <div className="flex space-x-4">
          <button onClick={calculateSingleEvent} className="w-full p-2 bg-blue-600 rounded-md">Calculate</button>
          <button onClick={clearSingleEvent} className="w-full p-2 bg-gray-600 rounded-md">Clear</button>
        </div>
      </div>

      {/* Probability of Two Events */}
      <div className="border border-gray-600 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Probability of Two Events</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">P(A)</label>
            <input
              type="number"
              value={probA}
              onChange={(e) => setProbA(e.target.value)}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              placeholder="Enter P(A)"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
          <div>
            <label className="block mb-2">P(A')</label>
            <input
              type="number"
              value={probANot}
              onChange={(e) => setProbANot(e.target.value)}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              placeholder="Enter P(A')"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
          <div>
            <label className="block mb-2">P(B)</label>
            <input
              type="number"
              value={probB}
              onChange={(e) => setProbB(e.target.value)}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              placeholder="Enter P(B)"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
          <div>
            <label className="block mb-2">P(B')</label>
            <input
              type="number"
              value={probBNot}
              onChange={(e) => setProbBNot(e.target.value)}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              placeholder="Enter P(B')"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>
        <div className="space-y-4 mb-4">
          <div>
            <label className="block mb-2">P(A ∩ B)</label>
            <input
              type="text"
              value={probAB}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2">P(A ∪ B)</label>
            <input
              type="text"
              value={probAOrB}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2">P(A Δ B)</label>
            <input
              type="text"
              value={probAXorB}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2">P((A ∪ B)')</label>
            <input
              type="text"
              value={probNeither}
              className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
              readOnly
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button onClick={calculateTwoEvents} className="w-full p-2 bg-blue-600 rounded-md">Calculate</button>
          <button onClick={clearTwoEvents} className="w-full p-2 bg-gray-600 rounded-md">Clear</button>
        </div>
      </div>

      {/* Probability of a Series of Independent Events */}
      <div className="border border-gray-600 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Probability of a Series of Independent Events</h2>
        <div className="mb-4">
          <label className="block mb-2">P(A)</label>
          <input
            type="number"
            value={repeatedA}
            onChange={(e) => setRepeatedA(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter P(A)"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Number of Repetitions for A</label>
          <input
            type="number"
            value={probAReps}
            onChange={(e) => setProbAReps(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter repetitions for A"
            min="1"
            step="1"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">P(B)</label>
          <input
            type="number"
            value={repeatedB}
            onChange={(e) => setRepeatedB(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter P(B)"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Number of Repetitions for B</label>
          <input
            type="number"
            value={probBReps}
            onChange={(e) => setProbBReps(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter repetitions for B"
            min="1"
            step="1"
          />
        </div>
        <div className="flex space-x-4">
          <button onClick={calculateSeries} className="w-full p-2 bg-blue-600 rounded-md">Calculate</button>
          <button onClick={clearSeries} className="w-full p-2 bg-gray-600 rounded-md">Clear</button>
        </div>
      </div>

      {/* Probability of a Normal Distribution */}
      <div className="border border-gray-600 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Probability of Normal Distribution</h2>
        <div className="mb-4">
          <label className="block mb-2">Mean (μ)</label>
          <input
            type="number"
            value={mean}
            onChange={(e) => setMean(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter mean (μ)"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Standard Deviation (σ)</label>
          <input
            type="number"
            value={stdDev}
            onChange={(e) => setStdDev(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter standard deviation (σ)"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Left Bound (Lb)</label>
          <input
            type="number"
            value={leftBound}
            onChange={(e) => setLeftBound(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter left bound (Lb)"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Right Bound (Rb)</label>
          <input
            type="number"
            value={rightBound}
            onChange={(e) => setRightBound(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            placeholder="Enter right bound (Rb)"
          />
        </div>
        <div className="flex space-x-4">
          <button onClick={calculateNormalDistribution} className="w-full p-2 bg-blue-600 rounded-md">Calculate</button>
          <button onClick={clearNormalDistribution} className="w-full p-2 bg-gray-600 rounded-md">Clear</button>
        </div>
        {normalDistResult && <div className="mt-4 p-4 bg-gray-700 text-gray-200 rounded-md">{normalDistResult}</div>}
      </div>
    </div>
  );
};

export default ProbabilityCalculator;


