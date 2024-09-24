'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a page size checker?",
            answer: "A page size checker is a tool used to calculate the total size of a webpage, including HTML, CSS, JavaScript, images, and other assets. It helps assess website performance and loading speed."
        },
        {
            question: "Why is page size important for website performance?",
            answer: "Page size impacts the loading speed of a website. Larger pages take longer to load, which can lead to a poor user experience and negatively affect search engine rankings."
        },
        {
            question: "How does the page size checker tool work?",
            answer: "The tool fetches the content of the webpage and calculates the size in kilobytes (KB) or bytes. It sums up all the resources to give an accurate measurement of the webpage's size."
        },
        {
            question: "What factors contribute to a webpage's size?",
            answer: "A webpage’s size is affected by various factors such as the HTML file, CSS stylesheets, JavaScript files, images, fonts, and other media embedded on the page."
        },
        {
            question: "How can I reduce my webpage size?",
            answer: "You can reduce webpage size by compressing images, minifying CSS/JavaScript, using browser caching, removing unnecessary plugins, and optimizing resources like fonts and videos."
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
