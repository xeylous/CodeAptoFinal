'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a probability calculator?",
            answer: "A probability calculator is a tool used to compute the likelihood of an event occurring, based on given conditions or data."
        },
        {
            question: "How does a probability calculator work?",
            answer: "A probability calculator works by applying probability formulas to the input data, such as the number of favorable outcomes and total possible outcomes, to calculate the probability of an event."
        },
        {
            question: "What types of probabilities can a probability calculator compute?",
            answer: "A probability calculator can compute various probabilities, including single-event probability, conditional probability, joint probability, and the probability of multiple independent events."
        },
        {
            question: "How can a probability calculator be used in real-world scenarios?",
            answer: "A probability calculator can be used in real-world scenarios such as risk assessment, predicting outcomes in games, calculating insurance risks, and making informed business decisions."
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

