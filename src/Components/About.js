import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Me
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi! I'm a software engineer specializing in web development. I have most recently created full-stack projects using the MERN stack 
            and am experienced using JavaScript, HTML, CSS, Front End Frameworks, and both SQL and NoSQL database systems. 
            <br />
            <br />
            My communication skills and ability to quickly adapt have been particularly helpful when working under pressure with teams to complete tasks and overcome unique obstacles. 
            I strive to show a strong attention to detail while being flexible enough to collaborate with others to complete the team's goals. 
           
            <br />
            <br />
            Outside of work, I enjoy cooking, trying new restaurants, music, concerts, golf, snowboarding, hiking, and basically any activity that can get me outside! 
            
            <br />
            <br />
            Below you can see a sample of my previous work, 
            the technologies and skills I have used, and my contact information. Please send a message so that we can connect! 
           
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./ckphoto.jpeg"
          />
        </div>
      </div>
    </section>
  );
}