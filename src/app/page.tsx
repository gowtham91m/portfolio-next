"use client";

import { useState, useEffect } from 'react';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail, AiOutlineCopy } from 'react-icons/ai';
import ParticlesComponent from './ParticlesComponent'; // Import the new particles component
import './styles.css'; // Import the CSS file
import experiences from './experiences';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipText, setTooltipText] = useState("email@gowtham.ai");
  const email = "email@gowtham.ai";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setTooltipText("Email copied!");
    setTimeout(() => setTooltipText(email), 2000);
  };

  return (
    <div className="min-h-screen bg-[rgb(15,23,42)] flex justify-center relative">
      {isClient && <ParticlesComponent />} {/* Use the new particles component */}
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row container relative z-10">
        <div className="w-full md:w-[30vw] flex flex-col justify-between pt-[100px] pl-4">
          <div className="flex-grow mb-4">
            <h1 className="text-[#b3b3b3] text-4xl">Gowtham Mallikarjuna</h1>
          </div>
          <footer className="flex items-center space-x-4 pt-4 pb-[20px] md:pb-[100px]">
            <a
              href="https://github.com/gowtham91m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#b3b3b3] hover:text-white"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-mallikarjuna/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#b3b3b3] hover:text-white"
            >
              <AiOutlineLinkedin size={24} />
            </a>
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCopyEmail}
            >
              {isHovered ? (
                <AiOutlineCopy size={24} className="text-[#b3b3b3] hover:text-white" />
              ) : (
                <AiOutlineMail size={24} className="text-[#b3b3b3] hover:text-white" />
              )}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {tooltipText}
              </span>
            </div>
          </footer>
        </div>
        <div className="w-full md:w-[70vw] flex flex-col justify-start items-center md:overflow-y-auto md:h-screen pb-10">
          <div className="pt-[100px] pl-4 md:pl-20 pb-4">
            <p className="text-[#b3b3b3] text-lg">
              As a seasoned full stack developer, I bring a wealth of experience in Java, Python, and TypeScript, with a strong focus on the React framework. My proficiency in AWS services, including Lambda, Fargate, EC2, DynamoDB, and S3, empowers me to build robust applications on cloud infrastructure. Leveraging the AWS CDK, I adhere to software development best practices to deliver scalable and efficient solutions.
            </p>
          </div>

          <div className="pt-12 px-4 pl-5 md:pl-20 text-[#b3b3b3]">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="flex mb-5 card">
                <div className="flex flex-col">
                  <span className="font-bold">
                    {exp.position} <span className="ml-2">({exp.year})</span>
                  </span>
                  <span className="mt-2">{exp.description}</span>
                  <div className="flex flex-wrap mt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
