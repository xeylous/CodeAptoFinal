'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How do you convert a binary number to an ASCII character?",
            answer: "To convert binary to ASCII, first group the binary digits into 7 or 8-bit chunks. Then, convert each group to  decimal equivalent the corresponding ASCII character from the ASCII table."
        },
        {
            question: "Can all binary numbers be converted into ASCII characters?",
            answer: " No all binary numbers map to ASCII characters. Only binary numbers that correspond to valid ASCII codes (0 to 127 for standard ASCII or 0 to 255 for extended ASCII) can be converted to ASCII characters."
        },
        {
            question: "What is the binary representation of common ASCII characters like 'A' or '0'?",
            answer: "The binary representation of 'A' is 01000001 (65 in decimal), and '0' is 00110000 (48 in decimal). "
        },
        {
            question: "What is the difference between standard ASCII and extended ASCII when converting from binary?",
            answer: " Standard ASCII uses 7 bits and supports 128 characters, while extended ASCII uses 8 bits and supports 256 characters, including symbols, accented characters, and more graphical representations."
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

