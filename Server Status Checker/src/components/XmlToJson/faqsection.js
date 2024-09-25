'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a server status checker?",
            answer: "A server status checker is a tool that monitors the availability and performance of a server, providing real-time information about its operational status, response times, and potential issues."
        },
        {
            question: "What are the common methods used to check server status?",
            answer: "Common methods to check server status include pinging the server, checking HTTP response codes, using SNMP monitoring, and employing specialized server monitoring tools that track various metrics."
        },
        {
            question: "Why is it important to monitor server status?",
            answer: "Monitoring server status is crucial for maintaining website performance and uptime. It helps identify issues before they impact users, allowing for quick troubleshooting and minimizing downtime."
        },
        {
            question: "What types of issues can a server status checker detect?",
            answer: "A server status checker can detect various issues such as server downtime, slow response times, high resource usage, and specific errors (e.g., 404 or 500 errors), enabling proactive management of server health."
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

