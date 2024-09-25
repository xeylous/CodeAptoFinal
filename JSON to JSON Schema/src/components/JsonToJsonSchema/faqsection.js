'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is JSON Schema?",
            answer: "JSON Schema is a declarative format for specifying the structure, content, and constraints of JSON data. It is used to define how a JSON object should be structured and validated."
        },
        {
            question: "How does a JSON to JSON Schema converter work?",
            answer: "A JSON to JSON Schema converter takes a JSON object as input and generates a corresponding JSON Schema that describes the structure, data types, and validation rules of that object."
        },
        {
            question: "Why is JSON Schema important for validating JSON data?",
            answer: "JSON Schema ensures that JSON data conforms to a specific structure and set of rules. This helps in data validation, improving data integrity and ensuring that applications process the correct format."
        },
        {
            question: "What are the main components of a JSON Schema?",
            answer: "The main components of a JSON Schema include properties, data types, required fields, additional properties, and constraints like minimum/maximum values for numbers or string length."
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

