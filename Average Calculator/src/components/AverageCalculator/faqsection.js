'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "How does an average calculator work?",
            answer: "  The average calculator takes a list of numbers as input and performs mathematical operations to calculate the average. For the mean, it sums all the numbers and divides by the count of numbers."
        },
        {
            question: "  Why is it important to calculate averages? ",
            answer: " Calculating averages helps summarize large datasets, identify trends, compare groups, and make informed decisions based on data analysis."
        },
        {
            question: "  How does an average calculator handle large datasets? ",
            answer: "  Average calculators can typically handle large datasets efficiently by using algorithms that minimize computational resources, ensuring quick calculations even for extensive lists of numbers."
        },
        {
            question: " What types of averages can an average calculator compute? ",
            answer: " An average calculator can compute different types of averages, including mean (arithmetic average), median (middle value), and mode (most frequent value). "
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

