'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " What is the difference between binary and hexadecimal number systems?",
            answer: "Binary is a base-2 number system using only 0 and 1, while hexadecimal is a base-16 system using digits 0-9 and letters A-F."
        },
        {
            question: "What is the relationship between bits and hex digits in binary to hexadecimal conversion? ",
            answer: "One hexadecimal digit represents exactly four bits in binary. For example, the binary number 1010 is A in hexadecimal. "
        },
        {
            question: "Can hexadecimal numbers be directly converted back to binary?",
            answer: "Yes, each hexadecimal digit corresponds to a unique 4-bit binary sequence, so conversion is straightforward."
        },
        {
            question: "How many bits are needed to represent a hexadecimal digit in binary?",
            answer: " Four bits are needed to represent one hexadecimal digit in binary."
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

