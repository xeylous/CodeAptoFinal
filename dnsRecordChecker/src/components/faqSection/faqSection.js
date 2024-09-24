'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a DNS record?",
            answer: "A DNS record is information stored in the Domain Name System (DNS) that provides details about a domain, such as its associated IP address, mail servers, and other configurations."
        },
        {
            question: "What types of DNS records can I check with this tool?",
            answer: "You can check various DNS records such as A, AAAA, MX, NS, TXT, and SOA records. Each type serves a different purpose, like mapping a domain to an IP address or specifying mail servers for a domain."
        },
        {
            question: "Why do I need to check DNS records?",
            answer: "Checking DNS records helps troubleshoot domain name resolution issues, verify correct domain configuration, and ensure that services like email or websites are set up correctly."
        },
        {
            question: "How often should I check my DNS records?",
            answer: "It’s a good practice to check DNS records when you make changes to your domain settings, migrate your website to a new host, or if you experience issues with domain resolution or service availability."
        },
        {
            question: "What does it mean if no DNS records are found?",
            answer: "If no DNS records are found, it could indicate that the domain is not properly configured, the domain does not exist, or there may be an issue with the DNS server. You may need to verify the domain name or contact your DNS provider."
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
