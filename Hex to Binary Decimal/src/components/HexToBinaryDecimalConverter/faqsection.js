'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Why do we convert hexadecimal to binary or decimal?",
            answer: "Converting between these systems makes it easier to interpret and manipulate data, as computers process data in binary but humans often use hexadecimal and decimal for readability. "
        },
        {
            question: "What is the importance of converting hex to binary in computing?",
            answer: " Hex simplifies the representation of long binary numbers, which are essential in computing for addressing memory, defining colors in graphics, and encoding instructions in machine language."
        },
        {
            question: "Can you explain the relationship between hexadecimal and binary?",
            answer: " Hexadecimal is a compact representation of binary because each hex digit corresponds exactly to four binary digits (bits), making conversions between the two straightforward. "
        },
        {
            question: "How do you convert hexadecimal to decimal manually?",
            answer: "To convert hex to decimal, multiply each hex digit by 16 raised to the power of its position (starting from 0) and sum the results."
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

