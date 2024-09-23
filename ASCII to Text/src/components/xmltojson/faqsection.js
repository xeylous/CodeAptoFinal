'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " What is the process for converting extended ASCII codes to text? ",
            answer: "Extended ASCII uses 8 bits, which allows for 256 characters. These additional characters (128-255) include symbols, special characters, and foreign language letters. The conversion process is the same as standard ASCII—just match the number to the corresponding character.  "
        },
        {
            question: " How can ASCII be used in programming for text manipulation? ",
            answer: "  ASCII codes are commonly used in programming to manipulate text, such as converting between uppercase and lowercase letters, sorting strings, and encoding or decoding data. "
        },
        {
            question: " How does ASCII convert binary data into readable text? ",
            answer: " ASCII assigns a unique decimal number (from 0 to 127 in standard ASCII) to each character, including letters, digits, and symbols. These numbers can be converted from binary values used by computers into readable text. "
        },
        {
            question: "How do you manually convert an ASCII number to a text character?  ",
            answer: "To convert an ASCII number to a text character, find the corresponding character for that ASCII value. The ASCII value 65 corresponds to the letter 'A', and 97 corresponds to 'a'."
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

