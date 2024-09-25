'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is an Open Graph generator?",
            answer: "An Open Graph generator is a tool that helps create Open Graph meta tags, which control how web content is displayed when shared on social media platforms like Facebook, Twitter, and LinkedIn."
        },
        {
            question: "How does an Open Graph generator work?",
            answer: "An Open Graph generator allows you to input details about your web page, such as title, description, image, and URL, and then it generates the necessary Open Graph meta tags to include in your website’s HTML."
        },
        {
            question: "Why is Open Graph important for social media sharing?",
            answer: "Open Graph is important because it ensures that when your content is shared on social media, it appears with the correct title, description, and image, which can increase user engagement and clicks."
        },
        {
            question: "What key properties can an Open Graph generator create?",
            answer: "An Open Graph generator can create properties like `og:title`, `og:description`, `og:image`, `og:url`, and others that define how your content is displayed when shared on social media."
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

