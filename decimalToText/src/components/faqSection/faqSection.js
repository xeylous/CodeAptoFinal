'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a Decimal to Text Converter?",
            answer: "A Decimal to Text Converter converts a series of decimal values (numbers) into corresponding characters based on the ASCII encoding standard."
        },
        {
            question: "How does the conversion from decimal to text work?",
            answer: "Each decimal number represents an ASCII code that corresponds to a character. For example, 72 represents 'H', 101 represents 'e', and so on. The converter takes these decimal values and transforms them into readable text."
        },
        {
            question: "What format should the input decimal numbers be in?",
            answer: "The input should be a series of decimal numbers separated by spaces. For example, 72 101 108 108 111 would be converted to Hello."
        },
        {
            question: "Can I upload a file with decimal values for conversion?",
            answer: "Yes, you can upload a .txt file with decimal values, and the converter will process the file content to generate the corresponding text."
        },
        {
            question: "What happens if I input invalid decimal values?",
            answer: "If you input invalid decimal numbers or non-numeric characters, the converter will show an error message indicating the invalid input. Make sure to input only valid decimal values."
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
