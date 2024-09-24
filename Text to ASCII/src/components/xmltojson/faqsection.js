'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " How does text get converted to ASCII? ",
            answer: "Each character in a text string is mapped to a corresponding number in the ASCII table. The letter A is represented by the number 65 in ASCII.  "
        },
        {
            question: " How does text-to-ASCII conversion differ for extended ASCII? ",
            answer: "Extended ASCII uses 8 bits, allowing for 256 characters, which includes additional symbols, accented characters, and control codes beyond the basic ASCII set. "
        },
        {
            question: "  Can ASCII handle both uppercase and lowercase letters?",
            answer: " Yes, ASCII represents both uppercase (A-Z, 65-90) and lowercase (a-z, 97-122) letters with distinct numeric values. "
        },
        {
            question: " What are some real-world applications of text-to-ASCII conversion? ",
            answer: " ASCII is used in networking protocols, email formatting, data storage, and file transmission. It is also useful for programming tasks like encoding or data validation. "
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

