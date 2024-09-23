'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is an Octal to Decimal Converter?",
            answer: "An Octal to Decimal converter transforms octal numbers (base-8) into their equivalent decimal (base-10) values, making it easier to work with numerical data in a more familiar format."
        },
        {
            question: "How do I input octal numbers for conversion?",
            answer: "You can input octal numbers by pasting them directly into the provided text area, ensuring they are separated by spaces (e.g., 110 145 154). You can also upload a text file containing octal data."
        },
        {
            question: "What happens if I enter invalid octal input?",
            answer: "If the input contains characters outside the range of valid octal digits (0-7) or is incorrectly formatted, the converter will display an error message indicating that the input is invalid."
        },
        {
            question: "Can I download the converted decimal output?",
            answer: "Yes! After converting the octal input, you can download the decimal output as a text file by clicking the Download button."
        },
        {
            question: "Is there a way to copy the converted decimal output directly?",
            answer: "Absolutely! You can copy the decimal output to your clipboard by clicking the Copy button, allowing you to easily paste it elsewhere."
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
