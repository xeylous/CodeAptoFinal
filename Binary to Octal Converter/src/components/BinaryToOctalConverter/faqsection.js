'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the process of converting binary to octal?",
            answer: "To convert binary to octal, group the binary digits into sets of three (starting from the right) and convert each set to its equivalent octal value. "
        },
        {
            question: "Why do we convert binary numbers to octal?",
            answer: "Binary numbers can become very long and difficult to read, so converting them to octal, which is a more compact form, simplifies representation while still preserving the value of the original binary number."
        },
        {
            question: "Are there any shortcuts for binary to octal conversion?",
            answer: "Yes, since octal numbers can be directly derived from binary by converting every three binary digits into one octal digit, it’s a straightforward process without requiring complex calculations. "
        },
        {
            question: "What are the steps involved in converting a binary number into an octal number?",
            answer: "First, divide the binary number into groups of three digits, starting from the right. If the number of binary digits isn’t divisible by three, add leading zeros to make complete groups. Then, convert each group to its octal equivalent. "
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

