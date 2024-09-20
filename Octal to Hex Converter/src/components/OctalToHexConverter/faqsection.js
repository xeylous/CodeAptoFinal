'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Why do we need to convert octal to hexadecimal?",
            answer: "Octal and hexadecimal are both used in computing to simplify binary representation. Converting between them is useful in understanding different systems or formats, especially when dealing with low-level programming and digital systems."
        },
        {
            question: "What are the steps to convert octal to binary before converting to hexadecimal?",
            answer: "Each octal digit converts to a 3-bit binary equivalent. After converting the entire octal number to binary, group the binary digits into sets of four and convert them into hexadecimal."
        },
        {
            question: "Can you convert fractional octal numbers to hexadecimal?",
            answer: "Yes, fractional octal numbers can be converted to binary (each digit after the decimal point is still represented by 3 bits), and then the binary is grouped and converted to hexadecimal. "
        },
        {
            question: "What is octal, and how is it different from hexadecimal?",
            answer: " Octal is a base-8 numbering system, using digits 0-7, while hexadecimal is base-16, using digits 0-9 and letters A-F to represent values 10-15."
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

