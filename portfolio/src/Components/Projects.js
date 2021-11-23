import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Sample Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please see a preview of some of my past work below. Hover over the .gifs below to get a brief description of project, the technologies used, and the links to view the project. Both the GitHub repository links
            and deployed sites are available for you to view. 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-tight mb-1">{project.description}</p>
                  <a href={project.deployLink} className="tracking-widest text-sm title-font font-medium mt-1 hover:text-white">View Project</a>
                  <br />
                  <a href={project.repoLink} className="tracking-widest text-sm title-font font-medium mt-1 hover:text-white">GitHub Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}