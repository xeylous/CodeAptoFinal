'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Can an AdSense calculator be used for any website?",
            answer: "Yes, an AdSense calculator can be used for any website that displays Google AdSense ads, as long as the site has relevant traffic and metrics available."
        },
        {
            question: "How does an AdSense calculator work?",
            answer: "An AdSense calculator works by inputting your website’s average daily page views, CTR, and CPC, then calculating the estimated revenue by multiplying these values."
        },
        {
            question: "What factors does an AdSense calculator consider?",
            answer: "An AdSense calculator typically considers factors like page views, click-through rate (CTR), cost-per-click (CPC), and sometimes traffic sources to estimate earnings."
        },
        {
            question: "How can an AdSense calculator help optimize revenue?",
            answer: "An AdSense calculator helps identify the key metrics that impact revenue, allowing you to focus on improving traffic, CTR, and CPC to maximize earnings."
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

