'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is Open Graph Data?",
            answer: "Open Graph data is a set of meta tags embedded in a webpage’s HTML that provides information about the content, such as the title, description, image, and URL. This data is primarily used by social media platforms to generate rich previews when sharing links."
        },
        {
            question: "How does the Open Graph Checker work?",
            answer: "The Open Graph Checker tool extracts and displays the Open Graph meta tags from the webpage you enter. It helps you verify how your webpage will appear when shared on platforms like Facebook, LinkedIn, and Twitter."
        },
        {
            question: "Why are Open Graph tags important?",
            answer: "Open Graph tags improve the way content is presented on social media platforms. They ensure that when users share a link, it includes a well-structured title, description, and image, leading to more engagement and clicks."
        },
        {
            question: "What should I do if my webpage doesn't have Open Graph tags?",
            answer: "If your webpage lacks Open Graph tags, you can add them to the <head> section of your HTML. Common tags include og:title, og:description, og:image, and og:url. You can use the tool to check if they are properly implemented."
        },
        {
            question: "Can I download the Open Graph data from this tool?",
            answer: "Yes, the tool provides an option to download the fetched Open Graph data as a JSON file. You can click the download icon to save the extracted data for future reference or debugging."
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
