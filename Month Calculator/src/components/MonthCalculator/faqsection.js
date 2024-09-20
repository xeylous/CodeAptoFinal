'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How does a month calculator work?",
            answer: "A month calculator determines the number of months between two dates by counting the months and adjusting for any partial months if needed."
        },
        {
            question: "How do you calculate the number of months between two dates manually?",
            answer: "To calculate manually, subtract the earlier date’s year and month from the later date’s year and month, then adjust for any remaining days if partial months are included. "
        },
        {
            question: "Can a month calculator be used to determine due dates or deadlines?",
            answer: " Yes, month calculators are often used to determine due dates, especially for tasks or events scheduled several months in advance, like bills, loans, or projects."
        },
        {
            question: "How do you calculate the number of months from today to a future date?",
            answer: "To calculate months from today, input today’s date and the future date into the calculator and it will return the number of months between the two dates."
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

