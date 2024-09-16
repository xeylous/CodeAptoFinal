'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is CSV to JSON conversion and why is it useful?",
            answer: " CSV (Comma-Separated Values) to JSON (JavaScript Object Notation) conversion is the process of transforming data from a CSV file format into a JSON format. CSV is a simple text format for tabular data, while JSON is a lightweight data-interchange format that is easy to read and write for humans and machines. Converting CSV to JSON is useful because JSON is often used in web applications and APIs due to its structured and hierarchical nature, making it easier to handle and integrate with modern programming languages and frameworks."
        },
        {
            question: "What are the common issues encountered during CSV to JSON conversion?",
            answer: "Common issues during CSV to JSON conversion includes Inconsistent Data ,Incorrect Headers,Special Characters and Empty Values"
        },
        {
            question: "How can I handle large CSV files during conversion?",
            answer: "Handling large CSV files can be challenging due to memory constraints and processing time. To manage large files, Use a streaming parser: Instead of loading the entire file into memory, use a streaming parser to process the file line by line. This can reduce memory usage and improve performance. Use batch processing: Split the large file into smaller batches and process them separately. This can help distribute the workload and prevent memory issues. Optimize the conversion process: Use efficient algorithms and data structures to optimize the conversion process. This can help reduce processing time and improve performance."
        },
        {
            question: "Can I customize the CSV to JSON conversion to handle different delimiters and data formats?",
            answer: "Yes, customization is often possible to handle different delimiters and data formats during CSV to JSON conversion."
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
