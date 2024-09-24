'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How do I calculate the difference between two times?",
            answer: "To calculate the difference between two times, input the start and end dates, along with their respective times (AM/PM format). Then, click the Calculate button to see the result."
        },
        {
            question: "What is the 'Now' button used for?",
            answer: "The 'Now' button automatically sets the current date and time in the start or end fields, making it easier to calculate time differences from the present moment."
        },
        {
            question: "Can I calculate the time difference between two different dates?",
            answer: "Yes, you can calculate the time difference between two different dates by selecting the appropriate start and end dates and times."
        },
        {
            question: "What format should I use for inputting time?",
            answer: "Input time in the 12-hour format (HH) and select either AM or PM from the dropdown."
        },
        {
            question: "What happens if the end time is earlier than the start time?",
            answer: "If the end time is earlier than the start time, the calculator will set the hours difference to 0, ensuring that no negative results are shown."
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
