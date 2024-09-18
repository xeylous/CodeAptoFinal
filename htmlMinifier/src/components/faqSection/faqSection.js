'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What does the HTML Minifier do?",
            answer: "The HTML Minifier reduces the size of HTML by removing unnecessary whitespace, comments, and spaces between HTML tags to optimize the file for faster loading times."
        },
        {
            question: "How do I use the HTML Minifier?",
            answer: "You can paste your HTML code into the input box or upload an HTML file. Then, click the Minify HTML button to get the minified version in the output section."
        },
        {
            question: "Can I upload an HTML file for minification?",
            answer: "Yes, you can upload an HTML file by clicking the File button and selecting your file. The content will automatically load into the input box."
        },
        {
            question: "How can I download the minified HTML file?",
            answer: "After minifying the HTML, click the Download button to save the minified HTML to your device as a .html file."
        },
        {
            question: "Is there a way to copy the minified HTML output?",
            answer: "Yes, you can easily copy the minified HTML by clicking the Copy button, which copies the content to your clipboard."
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
