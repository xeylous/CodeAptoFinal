'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What are the key steps to convert binary to octal?",
            answer: "To convert binary to octal group the binary digits into sets of three (starting from the right) and convert each group to its octal equivalent."
        },
        {
            question: "How do you convert an octal fraction  into binary?",
            answer: "Convert the whole part of the octal number as usual, then convert the fractional part by multiplying each octal digit after the point by powers of 8, converting the result into binary. "
        },
        {
            question: "Can all octal numbers be converted into binary?",
            answer: " Yes, all octal numbers can be precisely converted into binary, as octal and binary are both positional number systems."
        },
        {
            question: "What is the relationship between octal and binary in computing?",
            answer: "Octal provides a more compact way to represent binary numbers. It is often used in computing for permissions (e.g., in Unix file systems) and representing binary data more succinctly."
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

