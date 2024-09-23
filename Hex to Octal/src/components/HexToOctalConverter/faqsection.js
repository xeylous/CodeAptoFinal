'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " How does the base-16 hexadecimal system relate to the base-8 octal system? ",
            answer: "Both systems are compact representations of binary numbers, but hexadecimal uses groups of 4 bits while octal uses groups of 3 bits."
        },
        {
            question: "Why are hexadecimal and octal both used in computing?",
            answer: "Both are shorthand representations of binary data. Hexadecimal is more compact for representing memory addresses, while octal was historically used in early computing systems, especially Unix-based systems. "
        },
        {
            question: "Why is it necessary to convert hexadecimal to octal in computing?",
            answer: "Hexadecimal and octal both provide more compact representations of binary numbers, and certain systems or hardware may prefer one over the other for simplicity and readability."
        },
        {
            question: "What is the importance of hexadecimal-to-octal conversion in programming?",
            answer: "While less common in modern programming, some low-level programming tasks or legacy systems may require conversion between hexadecimal and octal for hardware interfacing or memory addressing."
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

