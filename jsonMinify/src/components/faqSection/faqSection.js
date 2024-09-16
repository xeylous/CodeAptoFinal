'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is JSON minification?",
            answer: "JSON minification is the process of removing unnecessary characters from a JSON file without affecting its functionality. This includes removing whitespace, line breaks, comments, and other redundant characters. The goal is to reduce the file size, which can improve load times and efficiency, especially when transmitting JSON data over the network."
        },
        {
            question: "Why should I minify my JSON data?",
            answer: "Minifying JSON data can reduce file size, which leads to faster download times and improved performance in applications that use the data. Smaller JSON files require less bandwidth and storage, making them ideal for use in web applications and APIs where speed and efficiency are important."
        },
        {
            question: "How do I use a JSON minifier tool?",
            answer: "To use a JSON minifier tool, simply paste your JSON data into the provided input box or upload your JSON file. The tool will process the data, remove unnecessary characters, and provide you with the minified JSON output. Some tools also allow you to download the minified JSON file directly or copy it to your clipboard."
        },
        {
            question: "Does JSON minification affect the functionality of the data?",
            answer: "No, JSON minification does not affect the functionality or structure of the data. It only removes extraneous characters that are not needed for the data to be correctly parsed and used. The minified JSON will have the same structure and content as the original, just in a more compact form."
        },
        {
            question: "Can I reverse the minification process?",
            answer: "Yes, you can reverse the minification process by formatting the minified JSON back into a readable format using a JSON beautifier or pretty-print tool. These tools add indentation, line breaks, and spaces to make the JSON data more human-readable, but they do not alter the underlying data structure or content."
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
