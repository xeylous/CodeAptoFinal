'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is binary?",
            answer: "Binary is a base-2 numeral system that uses only two digits, 0 and 1. It is the foundational language of computers and digital systems."
        },
        {
            question: "How do I convert binary to decimal?",
            answer: "To convert binary to decimal, multiply each bit by 2 raised to the power of its position (starting from 0 on the right) and then sum all the results."
        },
        {
            question: "What if my binary input contains spaces?",
            answer: "Spaces in the binary input are allowed and will be ignored during conversion. Each group of binary digits is treated as a separate number."
        },
        {
            question: "Can I upload a file with binary data?",
            answer: "Yes, you can upload a text file containing binary data. The converter will read the binary numbers from the file and convert them to decimal."
        },
        {
            question: "What should I do if I see an error message?",
            answer: "If you see an error message, ensure that your input only contains valid binary digits (0s and 1s). Check for any invalid characters or formatting issues."
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
