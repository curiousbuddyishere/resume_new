import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

interface Experience {
  company: string;
  location?: string;
  role: string;
  period: string;
  achievements?: string[];
}

const CV = () => {
  const experiences: Experience[] = [
    {
      company: "Noon",
      role: "Growth Intern",
      period: "Jan 2025 - Present",
      achievements: [
        "Increased AOV by 10% through strategic discount optimization and real-time competitive benchmarking",
        "Elevated add-to-cart actions by 25% through targeted UI optimizations and personalized product popup.",
        "Boosted user retention by 10% by building a framework to automate reengagement and identify at-risk users",
        "Drove a 7% order uplift through sale planning, coordinated marketing efforts, and targeted promotions"
      ]
    },
    {
      company: "STAGE",
      role: "Product Management Intern",
      period: "Nov 2023 - Aug 2024",
      achievements: [
        "Improved Trial conversion by 20% through development of UPI Autopay integration for multiple Payment Gateways",
        "Boosted monthly revenue ₹25L through enhancing a recommendation engine using data driven insights",
        "Increased Play Store rating from 3.8 to 4.7 and NPS by 10% through UX improvements and feature prioritization",
        "Spearheaded the integration of Juspay SmartConnect, resulting in a 5% uptick in the Payment Success rate",
        "Created 5+ incident response guides that cut downtime by 30% and reduced resolution time by 25%",
        "Accelerated revenue growth by 30% QoQ through A/B testing of payment flows & ambassador integration"
      ]
    },
    {
      company: "CoffeeBeans",
      role: "Product Management Intern",
      period: "Aug 2023 - Sep 2023",
      achievements: [
        "Reduced hiring costs by 20% through  launching an MVP of a Gen AI platform for candidate screening",
        "Boosted candidate screening efficiency by 70% over manual processes using predictive matching algorithms",
        "Reduced interview false positives by 10% by implementing comprehensive KPIs for candidate evaluation"
      ]
    },
    {
      company: "Marketing Consultant",
      role: "Freelance",
      period: "Jun 2022 - Dec 2022",
      achievements: [
        "Grew subscribers by 150% for multiple channels through successful YouTube content strategies and campaigns",
        "Increased the Click Through Rate(CTR) by 25% through A/B testing on thumbnails, using hooks and titles",
        "Boosted views by 45% and shares by 30% through branded visual content and cross-functional collaboration"
      ]
    }
  ];

  // const education = [
  //   {
  //     school: "Stanford University",
  //     degree: "Bachelor's Degree in Physics (concentration: Mathematics)",
  //     period: "2018 - 2023",
  //     courses: [
  //       "Thermodynamics", "Electromagnetics", "Quantum Mechanics",
  //       "Lagrangian Mechanics", "Hamiltonian Mechanics",
  //       "Laser Physics & Optics", "Perturbation Theory & Chaos",
  //       "ODEs & PDEs", "Multivariable Calculus", "Applied Matrix Theory",
  //       "Differential Geometry", "Groups & Symmetry",
  //       "Special & General Relativity", "Signal Processing", "Art History",
  //       "Oil Painting", "Educational Design", "German", "Spanish"
  //     ]
  //   },
  //   {
  //     school: "Stanford University Graduate School of Engineering",
  //     degree: "Master's Degree of Computer Science (concentration: Real-World Computing and Computer Graphics)",
  //     period: "2021 - 2023",
  //     advisor: "advisor: Kayvon Fatahalian",
  //     courses: [
  //       "Physically Based Rendering", "Natural Language Processing",
  //       "Diffusion Models", "Large Language Models",
  //       "Reinforcement Learning", "Robotics Design",
  //       "Interactive Computer Graphics", "Motion Planning & Robot Autonomy",
  //       "Machine Learning", "Operating Systems", "Game Design", "Set Theory",
  //       "Formal Logic", "AI Ethics", "Computer Organization", "Animation",
  //       "Simulation", "Image Manipulation", "Computational Logic",
  //       "Biomedical Image Analysis", "Complexity Theory"
  //     ]
  //   }
  // ];

  return (
    <Layout>
      <Helmet>
        <title>CV - Adnan Shamim</title>
        <meta name="description" content="Adnan Shamim's CV and professional experience" />
      </Helmet>

      <div className="flex flex-col w-full max-w-[540px] ">
        <h1 className="text-4xl font-mono mb-16">Experience</h1>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-mono flex items-center gap-2">
                    {exp.company}
                    {exp.location && (
                      <span className="text-sm text-[#4444aa] bg-[#111144] px-2 py-0.5 rounded">
                        {exp.location}
                      </span>
                    )}
                  </h2>
                  <p className="font-mono text-[#6666cc] mt-1">{exp.role}</p>
                </div>
                <span className="text-sm font-mono text-[#4444aa] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              {exp.achievements && (
                <ul className="list-disc pl-5 space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="font-mono text-gray-300 leading-relaxed pl-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* <h1 className="text-4xl font-mono mb-16">Education</h1> */}
        
        {/* <div className="space-y-16 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-mono">{edu.school}</h2>
                  <p className="font-mono text-[#6666cc] mt-1">{edu.degree}</p>
                  {edu.advisor && (
                    <p className="font-mono text-[#4444aa] text-sm mt-1">{edu.advisor}</p>
                  )}
                </div>
                <span className="text-sm font-mono text-[#4444aa] whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#111144] text-[#6666cc] px-2 py-0.5 text-sm font-mono rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </Layout>
  );
};

export default CV;