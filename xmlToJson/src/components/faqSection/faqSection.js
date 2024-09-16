'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is XML to JSON conversion?",
            answer: "XML to JSON conversion is the process of translating XML (eXtensible Markup Language) data into JSON (JavaScript Object Notation) format. XML and JSON are both used to represent structured data, but JSON is often preferred in modern web applications due to its simplicity and compatibility with JavaScript. This tool helps transform XML data into JSON format, making it easier to work with in web development."
        },
        {
            question: "What types of XML files can be converted?",
            answer: "The tool can convert standard XML files that adhere to XML syntax rules. This includes well-formed XML documents with proper nesting and tags. However, it’s important to note that XML documents with complex schemas, mixed content (text and elements), or unusual structures might require additional handling or adjustments during conversion."
        },
        {
            question: "How do I upload my XML file for conversion?",
            answer: "To upload your XML file, click the Upload button or drag and drop your XML file into the designated area on the tool's interface. The tool will process the file and display the converted JSON output. Ensure that your XML file is correctly formatted and adheres to XML standards for successful conversion."
        },
        {
            question: "Can I convert XML data pasted directly into the tool?",
            answer: "Yes, you can paste XML data directly into the input box provided by the tool. Simply copy your XML data and paste it into the designated text area. The tool will then convert the pasted XML data into JSON format and display the result."
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
