'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "  What is the process for converting large decimal numbers to hexadecimal?  ",
            answer: "The process is the same: divide the large decimal number by 16, keep track of remainders, and continue dividing until the quotient is zero. Combine the remainders in reverse order to get the hexadecimal equivalent."
        },
        {
            question: " Why is hexadecimal preferred in low-level programming languages?",
            answer: "Hexadecimal closely aligns with binary, so it simplifies reading and writing long binary numbers, which is essential in low-level programming for memory management and machine instructions. "
        },
        {
            question: "Are there any shortcuts or tricks for converting decimal to hexadecimal?",
            answer: "One trick is to recognize common decimal-to-hexadecimal conversions for small numbers, such as 10 = A, 11 = B, 15 = F, and to work with smaller remainders."
        },
        {
            question: "How do floating-point decimal numbers convert to hexadecimal?",
            answer: " Floating-point decimal numbers can be converted by separating the integer and fractional parts, converting each part to hexadecimal, and combining them. For the fractional part, multiply by 16 repeatedly as explained earlier."
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

