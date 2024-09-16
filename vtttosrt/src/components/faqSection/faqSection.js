'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the difference between VTT and SRT files?",
            answer: "VTT (WebVTT) and SRT (SubRip Subtitle) are both text-based subtitle formats. The primary difference is that VTT files support additional features such as text styling and positional cues, making them more suited for modern web-based applications like HTML5 videos. SRT files are simpler and commonly used for basic subtitle needs."
        },
        {
            question: "How do I convert an VTT file to SRT using this tool?",
            answer: "For conversion of an VTT file to SRT file, click on the 'Browse' button to select the VTT file you want to convert. Once you've chosen your file, select SRT as the desired output format from the available options. After making your selection, click the 'Convert' button to convert select file into desired format. "
        },
        {
            question: "Can I convert multiple VTT files at once?",
            answer: "No,this tool allows you to convert one VTT file at a time. If you need to convert multiple files, you can convert each one individually. Batch conversion may be added in future updates."
        },
        {
            question: "Does this converter work offline?",
            answer: "No, this converter is an online tool that requires an internet connection to function. You can upload your VTT file, and once converted, download the SRT file directly from your browser."
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
