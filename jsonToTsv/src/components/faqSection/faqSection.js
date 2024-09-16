'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a JSON to TSV Converter?",
            answer: "A JSON to TSV converter transforms JSON (JavaScript Object Notation) data into TSV (Tab-Separated Values) format, making it easier to work with structured data in spreadsheet programs or databases."
        },
        {
            question: "How do I upload a JSON file for conversion?",
            answer: "You can upload a JSON file by clicking the File button and selecting your file. The contents of the file will be displayed in the input area, ready to be converted to TSV."
        },
        {
            question: "What happens if I input invalid JSON data?",
            answer: "If the JSON data is invalid, the converter will display an error message (Invalid JSON input). Ensure your JSON structure is correct before converting."
        },
        {
            question: "How can I download the converted TSV file?",
            answer: "After converting the JSON data, the Download button will be enabled. Click it to download the resulting TSV file to your device."
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
