'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is hex to text conversion?",
            answer: "Hex to text conversion involves translating hexadecimal values (base-16) into human-readable text by mapping hex codes to their corresponding ASCII characters. "
        },
        {
            question: "How do you convert hexadecimal values to text manually?",
            answer: "To manually convert hex to text, break the hex string into pairs of digits (each representing one byte), convert each pair to its decimal equivalent, and then map that number to its corresponding ASCII character."
        },
        {
            question: "Can you convert a string of text back into hex format?",
            answer: "Yes, you can convert text back into hex by converting each character of the string into its ASCII value and then converting that value into its hex representation.  "
        },
        {
            question: "What is the most efficient way to convert a large hex string to text?",
            answer: "The most efficient way is to use programming languages like Python or JavaScript, which have built-in functions to handle large strings and process them quickly."
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

