'use client';
import { useState } from 'react';

const FaqSchemaGenerator = () => {
  const [faqList, setFaqList] = useState([{ question: '', answer: '' }]);
  const [schema, setSchema] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleQuestionChange = (index, event) => {
    const newFaqList = [...faqList];
    newFaqList[index].question = event.target.value;
    setFaqList(newFaqList);
  };

  const handleAnswerChange = (index, event) => {
    const newFaqList = [...faqList];
    newFaqList[index].answer = event.target.value;
    setFaqList(newFaqList);
  };

  const handleAddFaq = () => {
    setFaqList([...faqList, { question: '', answer: '' }]);
  };

  const handleRemoveFaq = (index) => {
    const newFaqList = [...faqList];
    newFaqList.splice(index, 1);
    setFaqList(newFaqList);
  };

  const generateSchema = () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        }
      }))
    };
    setSchema(JSON.stringify(faqSchema, null, 2));
    setCopySuccess(''); // Reset copy success message on new generation
  };

  const handleClear = () => {
    setFaqList([{ question: '', answer: '' }]);
    setSchema('');
    setCopySuccess(''); // Clear success message when cleared
  };

  const handleDownload = () => {
    const blob = new Blob([schema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'faq-schema.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(schema)
      .then(() => {
        setCopySuccess('Copied to clipboard!');
      })
      .catch(() => {
        setCopySuccess('Failed to copy!');
      });
  };

  return (
    <div className="bg-gray-800 text-gray-300 p-6 rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FAQ Schema Generator</h1>
      {faqList.map((faq, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Question {index + 1}:</label>
          <input
            type="text"
            value={faq.question}
            onChange={(e) => handleQuestionChange(index, e)}
            className="w-full p-2 mb-2 bg-gray-700 text-gray-200 border border-gray-600 rounded"
            placeholder="Enter the question"
          />
          <label className="block mb-2">Answer {index + 1}:</label>
          <textarea
            value={faq.answer}
            onChange={(e) => handleAnswerChange(index, e)}
            className="w-full p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded"
            placeholder="Enter the answer"
          />
          <button
            onClick={() => handleRemoveFaq(index)}
            className="mt-2 text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddFaq}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Add FAQ
      </button>
      <button
        onClick={generateSchema}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ml-4"
      >
        Generate Schema
      </button>
      <button
        onClick={handleClear}
        className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 ml-4"
      >
        Clear
      </button>
      {schema && (
        <>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Generated Schema:</h2>
            <pre className="bg-gray-700 p-4 rounded">
              <code>{schema}</code>
            </pre>
          </div>
          <div className="mt-2 flex space-x-4">
            <button
              onClick={handleCopyToClipboard}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={handleDownload}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Download JSON
            </button>
          </div>
          {copySuccess && (
            <p className="text-green-400 mt-2">{copySuccess}</p>
          )}
        </>
      )}
    </div>
  );
};

export default FaqSchemaGenerator;
