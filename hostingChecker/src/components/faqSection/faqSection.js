'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a hosting checker?",
            answer: "A hosting checker is a tool that helps you identify which company or server is hosting a particular domain. It provides details like the hosting provider, IP address, and nameservers."
        },
        {
            question: "How do I find out who is hosting my website?",
            answer: "Simply enter your website's domain name into the hosting checker, and it will display details about your hosting provider, including IP address and DNS information."
        },
        {
            question: "What is the difference between a domain name and a host?",
            answer: "A domain name is the web address that users type to access your site (e.g., example.com), while a host refers to the server where your website files are stored and served to users."
        },
        {
            question: "What are nameservers and why are they important?",
            answer: "Nameservers are servers that translate your domain name into an IP address, helping direct traffic to the correct server. They play a crucial role in ensuring your website is reachable on the internet."
        },
        {
            question: "Can I change my hosting provider without changing my domain?",
            answer: "Yes, you can change your hosting provider while keeping your domain name. You would need to update your domain's nameservers to point to your new hosting provider."
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
