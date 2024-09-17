'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is a color converter, and how does it work?",
            answer: "A Color Converter is a tool that translates color values between different color representations like color name, HEX, RGB, CMYK, and HSL. It works by applying mathematical formulas to convert the values from one color model to another."
        },
        {
            question: "How do I convert a color from HSL to HEX format?",
            answer: "The HSL to HEX converter transforms colors by adjusting hue, saturation, and value. It calculates the HEX values using a formula that considers these parameters, altering color intensity and brightness. "
        },
        {
            question: "What are the most common color conversion formats used in design and development",
            answer: "The most common color conversion formats used in design and development are RGB: \n RGB: Stands for Red, Green, Blue, and is used for computer displays. RGB is a good choice for fine-grained control and compatibility with older tools."
        },
        {
            question: "How can I convert hex color codes to RGB or vice versa?",
            answer: "You can convert hex color codes to RGB and vice versa using a variety of tools, including: \n Retool: A free utility that allows you to specify a hex value and convert it to RGB values \n DronaHQ: A free tool that converts a six-digit hex code into its corresponding RGB values \n WebFX: A simple tool that converts hex values to RGB and vice versa"
        }
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

