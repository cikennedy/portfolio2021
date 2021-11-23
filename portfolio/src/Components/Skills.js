import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import amazonwebservices from '../assets/amazonwebservices.png';
import bootstrap from '../assets/bootstrap.png';
import css3 from '../assets/css3.png';
import git from '../assets/git.png';
import handlebars from '../assets/handlebars.png';
import heroku from '../assets/heroku.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import jquery from '../assets/jquery.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/node-js.png';
import php from '../assets/php.png';
// import python from '../assets/python.png';
// import rails from '../assets/rails.png';
import reactpng from '../assets/react.png';
import sequelize from '../assets/sequelize.png';
import typescript from '../assets/typescript.png';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are technologies and skills that I have used in various projects. 
            I am always learning, so this list will be ever-growing!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <img
              
                src={amazonwebservices}
                alt="amazon-web-services"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={bootstrap}
                alt="bootstrap"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={css3}
                alt="css3"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={git}
                alt="git"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={handlebars}
                alt="handlebars"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={heroku}
                alt="heroku"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={html5}
                alt="html5"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={javascript}
                alt="javascript"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={jquery}
                alt="jquery"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={mongodb}
                alt="mongodb"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={mysql}
                alt="mysql"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={nodejs}
                alt="nodejs"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={php}
                alt="php"
                className="h-20 w-20 mx-4 my-4"
              />
              {/* <img
                src={python}
                alt="python"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              {/* <img
                src={rails}
                alt="rails"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              <img
                src={reactpng}
                alt="react"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={sequelize}
                alt="sequelize"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src={typescript}
                alt="typescript"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}