'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the URL Parser tool used for?",
            answer: "The URL Parser tool is designed to extract and display different components of a URL, such as the protocol, host, path, and query parameters. This helps in understanding the structure of a URL and retrieving important information from it."
        },
        {
            question: "How do I use the URL Parser tool?",
            answer: "To use the tool, simply enter a valid URL into the input box, and it will parse the URL into its components. If the URL contains query parameters, the tool will also extract and display them."
        },
        {
            question: "What happens if I enter an invalid URL?",
            answer: "If an invalid URL is entered, the tool will display an error message indicating that the URL is invalid. Ensure the URL is correctly formatted (e.g., starting with http:// or https://)."
        },
        {
            question: "Can this tool extract query parameters from the URL?",
            answer: "Yes, the URL Parser tool can extract query parameters such as currentJobId, eBP, refId, and trackingId. These parameters are displayed in a table under the parsed URL output if they are present in the URL."
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
