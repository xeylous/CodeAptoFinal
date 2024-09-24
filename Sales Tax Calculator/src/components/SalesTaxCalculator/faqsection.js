'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a sales tax calculator?",
            answer: "A sales tax calculator is a tool that helps you calculate the amount of sales tax applied to a product or service based on the tax rate and the purchase price."
        },
        {
            question: "How does a sales tax calculator work?",
            answer: "A sales tax calculator works by taking the purchase price and multiplying it by the applicable sales tax rate to determine the amount of tax to be added."
        },
        {
            question: "Why is it important to calculate sales tax accurately?",
            answer: "Accurately calculating sales tax ensures that businesses comply with local tax laws and that consumers are charged the correct amount, avoiding potential penalties or overcharges."
        },
        {
            question: "How do you use a sales tax calculator?",
            answer: "To use a sales tax calculator, input the purchase price and the sales tax rate. The calculator will provide the amount of tax and the total cost of the purchase including tax."
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

