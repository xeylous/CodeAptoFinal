'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the process of converting text to decimal format?",
            answer: "Converting text to decimal involves taking each character of the text and converting it to its corresponding ASCII (or Unicode) code, which is represented as a decimal number."
        },
        {
            question: "Why would you need to convert text to decimal?",
            answer: "Text is often converted to decimal for data encoding, encryption, or storage purposes, as decimal numbers can be processed more easily by computers."
        },
        {
            question: "What is the role of Unicode in text-to-decimal conversions?",
            answer: "Unicode provides a universal mapping of characters to numeric values, supporting a wide range of characters across different languages, making it ideal for converting text to decimal in a globally compatible way. "
        },
        {
            question: "Can all types of text be converted into decimal values?",
            answer: "Yes, all text can be converted to decimal as long as it is encoded in a format like ASCII or Unicode, which maps characters to numeric codes."
        }
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

