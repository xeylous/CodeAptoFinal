'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a confidence interval calculator?",
            answer: "  A confidence interval calculator is a statistical tool that computes the range within which a population parameter is expected to lie, based on sample data."
        },
        {
            question: " How does a confidence interval calculator work? ",
            answer: "  The calculator uses sample data (mean, standard deviation, and sample size) along with a specified confidence level to compute the upper and lower bounds of the confidence interval using statistical formulas. "
        },
        {
            question: "What inputs are required to use a confidence interval calculator?  ",
            answer: "  You typically need the sample mean, standard deviation, sample size, and the desired confidence level."
        },
        {
            question: "  Can confidence intervals be used in hypothesis testing?",
            answer: " Yes, confidence intervals can be used in hypothesis testing to determine if a null hypothesis can be rejected by checking if the hypothesized value falls within the calculated interval."
        },
    ]
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

