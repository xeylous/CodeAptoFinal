'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " How do you convert an ASCII character to binary?",
            answer: "To convert an ASCII character to binary, look up the decimal value of the character from the ASCII table and then convert that decimal value to its binary equivalent."
        },
        {
            question: "How can ASCII to binary conversion be useful in data encoding and transmission? ",
            answer: "ASCII to binary conversion is crucial for encoding data in digital formats like files, protocols, and networks. Binary data is more efficient for computers to process and can be compressed or encrypted for secure transmission. "
        },
        {
            question: "Why is ASCII to binary conversion important in programming?",
            answer: "ASCII to binary conversion is crucial because computers store and process data in binary. Converting ASCII to binary allows computers to handle textual data for tasks like file storage, network transmission, and encoding."
        },
        {
            question: "How does converting ASCII to binary work in digital communications?",
            answer: " In digital communications, textual data is converted from ASCII to binary so that it can be transmitted over digital channels, as these systems primarily process binary data."
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

