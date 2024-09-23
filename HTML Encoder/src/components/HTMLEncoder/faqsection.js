'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " What is an HTML encoder? ",
            answer: "An HTML encoder is a tool or function that converts special characters into their corresponding HTML entities to ensure safe and correct display in web browsers. "
        },
        {
            question: "When should you use HTML encodin",
            answer: "HTML encoding should be used whenever special characters are included in HTML content, especially in user-generated content, to prevent them from being misinterpreted. "
        },
        {
            question: "How does an HTML encoder work? ",
            answer: "An HTML encoder scans text for special characters and replaces them with their HTML entity equivalents. "
        },
        {
            question: "What are HTML entities, and how do they relate to encoding?",
            answer: "HTML entities are codes that represent special characters in HTML. Encoding transforms these characters into entities so they can be safely included in HTML documents. "
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

