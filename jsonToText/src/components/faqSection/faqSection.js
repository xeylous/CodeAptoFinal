'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What types of JSON files can be converted using this tool?",
            answer: "This tool supports converting any valid JSON structure, including nested objects and arrays, into a flattened text format. Ensure that the input is valid JSON."
        },
        {
            question: "How do I upload a JSON file for conversion?",
            answer: "Click on the File button to upload a JSON file from your device. You can also paste or type the JSON data directly into the input box."
        },
        {
            question: "What happens if I upload an invalid JSON file?",
            answer: "If an invalid JSON file is uploaded or entered, the tool will display an error message, indicating that the JSON input is invalid. You'll need to correct the input before conversion."
        },
        {
            question: "Can I download the converted text output?",
            answer: "Yes, once the JSON is successfully converted to text, you can download the output by clicking on the Download button. The text file will be saved in .txt format."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="text-white p-0 max-w-[85%] mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-center">
                Frequently <span className="text-gray-400">Asked Questions</span>
            </h1>
            <p className="text-gray-400 mb-8 text-center max-w-[800px] mx-auto">
                
            </p>

            <div className="grid grid-cols-1 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            <h3 className="text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis">{faq.question}</h3>
                            <button className="bg-gray-800 border-none text-white w-6 h-6 rounded-full flex justify-center items-center text-xl cursor-pointer">
                                {activeIndex === index ? '−' : '+'}
                            </button>
                        </div>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-400 text-sm">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
