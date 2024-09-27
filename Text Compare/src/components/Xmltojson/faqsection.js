'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a text compare tool?",
            answer: "A text compare tool is a software or web application that allows users to compare two or more text documents, highlighting the differences between them."
        },
        {
            question: "How does a text compare tool work?",
            answer: "A text compare tool works by analyzing two text files line by line or word by word and then highlighting the differences, whether they are additions, deletions, or modifications in the text."
        },
        {
            question: "What are the common uses of a text compare tool?",
            answer: "Common uses include comparing code versions, tracking document revisions, proofreading changes in contracts or legal documents, and ensuring data consistency."
        },
        {
            question: "Can a text compare tool detect small changes in large documents?",
            answer: "Yes, text compare tools are designed to detect even the smallest changes, making them useful for comparing large documents and identifying subtle differences quickly."
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

