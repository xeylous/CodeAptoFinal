'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a Text to Hex Converter?",
            answer: "A Text to Hex converter transforms plain text characters into their hexadecimal (base-16) representations, commonly used in computing and digital encoding."
        },
        {
            question: "How does the Text to Hex conversion work?",
            answer: "The converter reads each character in the text, converts it to its ASCII value, and then converts that value into hexadecimal format."
        },
        {
            question: "Why would I need to convert text to hex?",
            answer: "Text to hex conversion is often used for data encoding, cryptography, debugging, and transferring non-printable characters in computing environments."
        },
        {
            question: "Can I convert hex back to text?",
            answer: "Yes, you can easily reverse the conversion by using a Hex to Text converter. The original text will be recovered from the hex representation."
        },
        {
            question: "Are special characters and spaces included in the conversion?",
            answer: "Yes, the converter handles all characters, including spaces and special symbols. Each will be converted into their corresponding hexadecimal value."
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
