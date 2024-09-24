'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: " How does the decimal number system differ from the binary system?",
            answer: " The decimal system uses ten digits (0-9) and is based on powers of 10, while the binary system uses only two digits (0 and 1) and is based on powers of 2. "
        },
        {
            question: " What is the significance of base 2 in binary conversion? ",
            answer: " Base 2 means that each digit in the binary system represents a power of 2, just as each digit in the decimal system represents a power of 10."
        },
        {
            question: " How does binary represent negative decimal numbers? ",
            answer: "  Negative decimal numbers are represented in binary using methods like two's complement, where the most significant bit (MSB) indicates the sign (0 for positive, 1 for negative). "
        },
        {
            question: " Can you convert large decimal numbers to binary? ",
            answer: "  Yes, large decimal numbers can be converted to binary using the same method of dividing by 2 and recording remainders, although for very large numbers, automated tools or programming methods are preferred. "
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

