'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is CPM, and how is it calculated?",
            answer: "CPM stands for 'Cost Per Thousand' impressions. It is calculated by dividing the total cost of an advertising campaign by the number of impressions (in thousands) it generates."
        },
        {
            question: "What values do I need to input for the calculator to work?",
            answer: "You need to enter two of the three values: Total Cost, CPM Rate, or Ad Impressions. The calculator will automatically calculate the third value for you."
        },
        {
            question: "Why can’t I input values for all three fields?",
            answer: "The CPM Calculator requires only two inputs to calculate the third. If you enter values in all three fields, it cannot determine which one to calculate and will give an error."
        },
        {
            question: "What do I do if I get an error message?",
            answer: "The error message occurs if you enter values in more than two fields. To fix this, clear one of the fields and enter values in only two fields for the calculation to work."
        },
        {
            question: "Can I use decimal values for cost and CPM?",
            answer: "Yes, both the Total Cost and CPM Rate can accept decimal values to provide more precise calculations. However, Ad Impressions must be entered as a whole number."
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
