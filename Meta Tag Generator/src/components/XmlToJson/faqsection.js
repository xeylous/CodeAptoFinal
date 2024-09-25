'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a meta tag generator?",
            answer: "A meta tag generator is a tool that helps create meta tags for web pages, which include key details like the page title, description, and keywords to improve search engine optimization (SEO)."
        },
        {
            question: "How does a meta tag generator work?",
            answer: "A meta tag generator works by allowing you to input important information about your web page, such as its title and description, and then automatically generates the corresponding meta tags."
        },
        {
            question: "Why are meta tags important for SEO?",
            answer: "Meta tags are important for SEO because they provide search engines with key information about a web page, which can influence search rankings and click-through rates in search results."
        },
        {
            question: "What types of meta tags can a meta tag generator create?",
            answer: "A meta tag generator can create various types of meta tags, including title tags, description tags, keyword tags, viewport tags for mobile optimization, and Open Graph tags for social sharing."
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

