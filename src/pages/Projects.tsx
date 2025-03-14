import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

interface Project {
  title: string;
  period: string;
  description: string;
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Beyond the Screen",
      period: "June 2024 - Sep 2024",
      description: "Analyzed India's OTT industry, uncovering trends in audience engagement, content strategy, and monetization. Delivered insights to shape product marketing and growth strategies in the streaming sector.",
      link: "https://ott-report.super.site/"
    },
    {
      title: "Retention Blueprint",
      period: "Oct 2024 - Dec 2024",
      description: "Evaluated retention strategies to optimize customer engagement through targeted digital communication channels, driving lifecycle improvements and campaign efficiency.",
      link: "https://coherent-cadmium-d66.notion.site/Retention-Report-v1-14db6730d89e8089a6cef205be0266c4?pvs=4"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Projects - Adnan</title>
        <meta name="description" content="Projects and research work by Adnan Shamim" />
      </Helmet>

      <div className="flex flex-col">
        <h1 className="text-4xl font-mono mb-16">Projects</h1>
        
        <div className="w-full max-w-[540px] space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group py-2 px-1` rounded-lg transition-all duration-300 hover:bg-gray-800/40 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-mono">
                    <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline-offset-4 hover:underline"
                    >
                      {project.title}
                    </a>
                  </h2>
                </div>
                <span className="text-sm font-mono text-blue-400/80 ml-4 text-right">
                  {project.period}
                </span>
              </div>
              <p className="font-mono text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;