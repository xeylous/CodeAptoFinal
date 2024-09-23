'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a Binary to Octal Converter?",
            answer: "A Binary to Octal converter changes binary numbers (base-2) into their octal (base-8) equivalents. This makes it easier to read and interpret binary data in a more compact format."
        },
        {
            question: "How should I input binary numbers for conversion?",
            answer: "You can input binary numbers by pasting them directly into the designated text area. Ensure that the binary digits are separated by spaces (e.g., 1010 1111). You can also upload a text file containing binary data."
        },
        {
            question: "What will happen if I enter invalid binary input?",
            answer: "If the input contains characters other than 0 and 1 or is improperly formatted, the converter will display an error message indicating that the input is invalid."
        },
        {
            question: "Can I download the converted octal output?",
            answer: "Yes! After converting the binary input, you can download the octal output as a text file by clicking the Download button."
        },
        {
            question: "Is there a way to copy the converted octal output directly to my clipboard?",
            answer: "Yes, you can copy the octal output to your clipboard by clicking the Copy button, allowing for easy pasting into other applications or documents."
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
