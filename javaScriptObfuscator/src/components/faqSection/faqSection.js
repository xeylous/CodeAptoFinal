'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is JavaScript obfuscation?",
            answer: "JavaScript obfuscation is the process of transforming JavaScript code into a version that is harder for humans to understand, making it more difficult for others to reverse-engineer or copy the code."
        },
        {
            question: "Does obfuscation affect the performance of my JavaScript code?",
            answer: "In most cases, obfuscation does not significantly impact the performance of your JavaScript code. However, adding excessive layers of obfuscation could introduce a slight overhead."
        },
        {
            question: "Can obfuscated JavaScript be reversed?",
            answer: "While obfuscation makes it difficult to read and understand the code, it does not provide full protection. Skilled individuals can reverse or decode obfuscated JavaScript, but it raises the level of complexity."
        },
        {
            question: "Is obfuscating JavaScript a replacement for security measures?",
            answer: "No, obfuscation is not a security measure. It is mainly used to deter code theft and unauthorized reuse, but sensitive data and operations should be protected using proper security practices such as encryption."
        },
        {
            question: "What happens if the obfuscated code does not work?",
            answer: "If the obfuscated JavaScript does not function correctly, there could be an issue with the obfuscation process. Review the original code for errors or test it before obfuscating."
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
