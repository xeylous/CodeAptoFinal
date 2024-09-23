
'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t-2 border-gray-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
        {/* Navigation links on the same line */}
        <Link href="/contact-us" className="hover:text-gray-300">
          Contact Us
        </Link>

        <Link href="/terms-and-conditions" className="hover:text-gray-300">
          Terms and Conditions
        </Link>

        {/* YouTube Icon */}
        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </Link>

        {/* Copyright on the same line */}
        <div className="text-sm text-center md:text-left">
          © 2024 {' '}
          <Link href="https://codeapto.com" target="_blank" rel="noopener noreferrer" className="underline">
            CodeApto India
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;