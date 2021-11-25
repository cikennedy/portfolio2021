import React from "react";
import { useState } from 'react';

export default function Navbar() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto inline-flex flex-wrap p-5 md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="font-semibold text-xl dark:text-gray-100">
            Chris Kennedy
          </a>
          <p className="text-base font-light text-gray-500 dark:text-gray-300">
            Web Developer | Software Engineer
          </p>
        </p>

        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          </button>
          <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
        {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          
        </nav> */}
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
        <a href="#projects" className="mr-5 hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Skills
          </a>
        <a href="https://github.com/cikennedy/updated-portfolio/raw/main/assets/Resume.pdf"
          className="mr-5 hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Resume
          </a>
        <a
          href="#contact"
          className="mr-5 hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          Contact Me
        </a>
      </div>
      </div>
      </div>
    </header>
  );
}