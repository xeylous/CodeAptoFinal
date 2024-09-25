'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a user agent?",
            answer: "A user agent is a string of text that a web browser sends to a web server, identifying the browser type, version, and operating system being used. It helps servers tailor their responses based on the client’s environment."
        },
        {
            question: "How can I find my user agent?",
            answer: "You can find your user agent by visiting websites like 'whatismybrowser.com' or by checking the developer tools in your web browser (usually accessible via F12 or right-click > Inspect, then looking under the 'Network' tab)."
        },
        {
            question: "What information does a user agent contain?",
            answer: "A user agent typically contains information such as the browser name, version, the operating system, and sometimes additional details like the device type or rendering engine."
        },
        {
            question: "Why is my user agent important for web browsing?",
            answer: "Your user agent is important because it allows websites to deliver content that is optimized for your specific browser and device, improving compatibility and user experience."
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

