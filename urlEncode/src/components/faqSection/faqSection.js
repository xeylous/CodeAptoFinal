'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is URL encoding and why is it necessary?",
            answer: "URL encoding converts characters into a format that can be transmitted over the Internet. It is necessary because URLs can only be sent over the Internet using the ASCII character set, and certain characters, like spaces and special symbols, need to be encoded for proper communication."
        },
        {
            question: "What characters need to be URL encoded?",
            answer: "Characters that are not allowed in a URL or have special meanings, such as spaces ( ), slashes (/), question marks (?), and ampersands (&), need to be URL encoded to avoid misinterpretation."
        },
        {
            question: "What is the difference between URL encoding and Base64 encoding?",
            answer: "URL encoding is specifically designed for converting URLs into a safe format for transmission over the web. Base64 encoding is used to encode binary data into ASCII text for storage or transmission, often used for things like embedding images in web pages."
        },
        {
            question: "How does URL decoding work?",
            answer: "URL decoding is the reverse process of URL encoding. It translates the encoded characters back into their original form so that the URL can be understood by a web browser or server."
        },
        {
            question: "Are there any limitations to URL length?",
            answer: "Yes, there are practical limits to URL length. For instance, the maximum length of a URL in most browsers is 2,083 characters. URL encoding may increase the length of a URL, so care must be taken not to exceed these limits."
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
