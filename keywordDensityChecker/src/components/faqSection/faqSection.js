'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
            {
                "question": "What is a Keyword Density Checker?",
                "answer": "A Keyword Density Checker is a tool that analyzes the frequency of keywords used in a given text or web page. It helps SEO professionals understand how often specific keywords appear, enabling them to optimize their content for better search engine rankings."
            },
            {
                "question": "How do I use the Keyword Density Checker?",
                "answer": "To use the Keyword Density Checker, enter the URL of the domain you want to analyze in the input field and click the 'Check Keyword Density' button. The tool will then display the frequency and density of keywords found on the page."
            },
            {
                "question": "Why is keyword density important for SEO?",
                "answer": "Keyword density is important for SEO because it helps search engines determine the relevance of a web page to a specific keyword. A balanced keyword density can improve your chances of ranking higher in search results, while excessive use can lead to keyword stuffing, which can harm your rankings."
            },
            {
                "question": "What is considered an optimal keyword density?",
                "answer": "While there is no strict rule, an optimal keyword density is generally considered to be between 1% to 3%. This means that for every 100 words, the keyword should appear 1 to 3 times. However, it's essential to focus on creating high-quality content rather than strictly adhering to a specific density."
            },
            {
                "question": "What should I do if the tool returns no results?",
                "answer": "If the tool returns no results, ensure that you entered a valid and accessible domain URL. If the problem persists, it may be due to restrictions on the target website or a temporary issue with the tool."
            }
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
