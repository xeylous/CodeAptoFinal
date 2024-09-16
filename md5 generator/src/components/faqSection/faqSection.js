'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is MD5 hashing, and how does it work?",
            answer: "MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit hash value. It's often used for verifying data integrity, converting input data into a fixed-size hash value (32 hexadecimal characters).The process is one-way, meaning it's not possible to retrieve the original data from the hash."
        },
        {
            question: "Can MD5 hashes be reversed?",
            answer: "No, MD5 is a one-way cryptographic function, meaning it’s designed to be irreversible. Once a hash is generated from input data, it's computationally infeasible to reverse it back to the original text."
        },
        {
            question: "Why is MD5 no longer considered secure for cryptographic purposes?",
            answer: "MD5 is considered insecure because of its susceptibility to collisions, where two different inputs produce the same hash value. This flaw can be exploited in attacks, making MD5 unsuitable for applications requiring strong data integrity or security, such as password storage and digital signatures."
        },
        {
            question: "What is the difference between MD5 and other hashing algorithms like SHA-256?",
            answer: "MD5 generates a 128-bit hash, while SHA-256 (part of the SHA-2 family) generates a 256-bit hash, providing a higher level of security and reducing the risk of collisions. SHA-256 is widely used for secure cryptographic applications, whereas MD5 is considered outdated and vulnerable."
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
