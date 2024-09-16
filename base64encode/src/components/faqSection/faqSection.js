'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is Base64 encoding?",
            answer: "Base64 encoding is a method for converting binary data into an ASCII string format. It is used to safely transmit binary data over systems that handle only text, such as email, URLs, or JSON. The encoded data is a string of characters from a set of 64 possible values, making it compatible with systems that process plain text."
        },
        {
            question: "How does Base64 encoding work?",
            answer: "Base64 encoding takes binary data and splits it into 6-bit chunks, mapping each chunk to a corresponding character in the Base64 index table, which consists of 64 characters (letters, numbers, +, and /). Decoding reverses this process, converting Base64 back into the original binary data."
        },
        {
            question: "Can Base64 encoding be used for encrypting data?",
            answer: "No, Base64 encoding is not for encryption. It is simply a way to represent binary data as text, and it does not provide any security."
        },
        {
            question: "What are the common use cases of Base64 encoding?",
            answer: "Base64 encoding is commonly used in Embedding images in HTML/CSS,Transmitting data in APIs,Email attachments and Data URIs."
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
