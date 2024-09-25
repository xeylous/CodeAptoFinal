'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
            {
                "question": "What is the Meta Tag Analyzer?",
                "answer": "The Meta Tag Analyzer is a tool that allows you to analyze the meta tags of a given URL. It retrieves important metadata like title, description, keywords, and more, helping you understand how your website or others are optimized for search engines."
            },
            {
                "question": "How do I use the Meta Tag Analyzer?",
                "answer": "Simply enter the URL of the website you want to analyze in the input field and click the 'Analyze Meta Tags' button. The tool will fetch the meta tags and display the extracted information such as the title, description, and keywords."
            },
            {
                "question": "Can I download the meta tag results?",
                "answer": "Yes, after analyzing the meta tags, you can click the 'Download JSON' button to download the extracted meta tag information as a JSON file."
            },
            {
                "question": "What does the Clear button do?",
                "answer": "The Clear button allows you to reset the input field and remove any previously fetched meta tag data, so you can start a new analysis."
            },
            {
                "question": "What types of meta tags can I extract with this tool?",
                "answer": "The Meta Tag Analyzer can extract common meta tags such as the page title, description, keywords, charset, and viewport. Depending on the website's structure, more tags can also be retrieved if available."
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
