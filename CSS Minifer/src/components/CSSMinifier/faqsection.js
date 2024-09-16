'use client'
import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is CSS minification ?",
            answer: "CSS minifying is the process of removing unnecessary characters like spaces,  and line breaks from CSS files without changing their functionality, to reduce file size and improve performance."
        },
        {
            question: "Why is it important to minify CSS files?",
            answer: "Minify CSS reduces file size of CSS,  which helps improve page load times, especially on slow networks. This leads to a better user experience and  contribute to higher search engine ranking."
        },
        {
            question: "How can I manually minify a CSS file?",
            answer: "You can manually minify Cascading Style Sheet (CSS) by removing spaces, line breaks, and comments from the file.  using automated tools like CSSNano or online minifiers is much faster ."
        },
        {
            question: "What tools are available for CSS minification?",
            answer: "Tools like CSSNano, CleanCSS, UglifyCSS, and online platforms like MinifyCSS or CSS Minifier are commonly used for minifying CSS files. Build tools like Gulp and Webpack also offer automated CSS minification as part of the build process."
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

