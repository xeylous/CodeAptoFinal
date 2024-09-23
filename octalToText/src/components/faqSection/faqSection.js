'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is an Octal to Text Converter?",
            answer: "An Octal to Text converter translates octal numbers (base-8) into their corresponding characters in plain text, allowing users to easily interpret octal-encoded data."
        },
        {
            question: "How does the conversion from octal to text work?",
            answer: "The converter takes octal input, splits it into individual octal values, converts each value to its decimal equivalent, and then to the corresponding ASCII character to produce the final text output."
        },
        {
            question: "What types of input does the converter accept?",
            answer: "The converter accepts octal numbers separated by spaces (e.g., 110 145 154 154 157). It can also process text files containing octal data."
        },
        {
            question: "What should I do if I receive an error message during conversion?",
            answer: "Ensure that your octal input consists solely of valid octal digits (0-7) and is properly formatted. If the input is valid and you still encounter issues, try clearing the input and re-entering the data."
        },
        {
            question: "Can I convert text back to octal?",
            answer: "While this converter specifically handles octal to text conversion, you can find or create a separate converter to transform text back into its octal representation."
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
