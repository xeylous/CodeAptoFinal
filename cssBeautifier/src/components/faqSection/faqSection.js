'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a CSS Beautifier?",
            answer: "A CSS Beautifier is a tool that formats your CSS code to make it more readable. It adds proper indentation, organizes properties, and places each rule on a separate line. This makes the CSS easier to understand and maintain."
        },
        {
            question: "How do I use this CSS Beautifier?",
            answer: "Simply paste your CSS code into the Paste your CSS here text area, then click the Beautify CSS button. You can also upload a .css file by clicking the File button. The beautified CSS will appear in the Beautified CSS section, and you can download, copy, or clear the result using the respective buttons."
        },
        {
            question: "Can I download the beautified CSS file?",
            answer: "Yes, after beautifying your CSS, you can click the Download button to save the beautified CSS code as a .css file on your device."
        },
        {
            question: "What should I do if my CSS code doesn't get beautified correctly?",
            answer: "If your CSS isn't beautified as expected, double-check that the CSS is valid and complete. If the tool encounters an issue, it will show an error message. Ensure that there are no syntax errors in your input."
        },
        {
            question: "Can I use this tool to upload and beautify large CSS files?",
            answer: "Yes, you can upload and beautify large CSS files using the File button. However, for extremely large files, processing might take a few moments depending on the size of the file."
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
