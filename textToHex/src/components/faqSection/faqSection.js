'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a Hex to Text Converter?",
            answer: "A Hex to Text Converter is a tool that converts hexadecimal (base-16) encoded strings into readable text. It is commonly used in programming, data storage, and debugging processes."
        },
        {
            question: "How do I use the Hex to Text Converter?",
            answer: "Simply enter the hexadecimal string into the input box and choose the conversion option (e.g., Hex to Text). Then, click the 'Convert' button to see the result."
        },
        {
            question: "What kind of input should I provide?",
            answer: "You can input a hexadecimal string, binary string, text, ASCII, or decimal numbers depending on the conversion you want to perform. For hexadecimal input, you should enter the values separated by spaces (e.g., 48 65 6c 6c 6f)."
        },
        {
            question: "Can I convert other formats, like binary or ASCII, using this tool?",
            answer: "Yes, this converter supports various formats like Hex, Binary, Text, ASCII, and Decimal. You can choose your input and output format from the dropdown menus."
        },
        {
            question: "What happens if I input an invalid value?",
            answer: "If you enter an invalid or incorrect value, the converter might not work as expected. Make sure your input matches the selected format. For instance, ensure that the hexadecimal values are valid when converting Hex to Text."
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
