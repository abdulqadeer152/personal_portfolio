import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        
        <div className="flex flex-col items-center">
          <Image
            alt="logo"
            height={100}
            width={100}
            src={require('../../../public/Screenshot__23_-removebg-preview.png')}
          />
          <p className="text-orange-500 font-semibold mt-2">Q.A Services@</p>
        </div>

        
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Q.A Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
