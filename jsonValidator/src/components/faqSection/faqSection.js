'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a JSON Validator?",
            answer: "A JSON Validator is a tool that checks whether a JSON string or file is syntactically correct. It verifies if the JSON follows proper format rules like correct use of braces, quotes, commas, and key-value pairs."
        },
        {
            question: "How do I use a JSON Validator?",
            answer: "Paste or upload your JSON data into the input field, and the validator will automatically check the JSON for errors and return validation results."
        },
        {
            question: "What kind of errors can a JSON Validator detect?",
            answer: "The JSON Validator detects syntax errors such as missing commas, unmatched braces, extra or missing quotes, and incorrect key-value formatting."
        },
        {
            question: "Why is my JSON valid but not working in my application?",
            answer: "Even though your JSON may be syntactically valid, your application might expect specific data types, field structures, or additional properties that the validator does not check."
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
