'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How does binary represent text characters? ",
            answer: "Binary represents text through character encoding systems like ASCII, where each character (letter, number, or symbol) is assigned a specific binary value. "
        },
        {
            question: " What is the process for converting binary to text? ",
            answer: " Binary-to-text conversion involves taking binary values (usually 8-bit segments), converting them to decimal numbers, and then mapping those numbers to characters in the ASCII table. "
        },
        {
            question: " How is the ASCII table used in binary to text conversion? ",
            answer: " The ASCII table assigns a decimal value to each character (like 65 for A). To convert binary to text, you first convert the binary value to decimal, then look up the corresponding character in the ASCII table.  "
        },
        {
            question: " Is there a reverse process to convert text back to binary? ",
            answer: " Yes, the reverse process involves converting each character to its ASCII value and then translating that decimal value into binary form using 8-bit segments.  "
        },
    ]
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

