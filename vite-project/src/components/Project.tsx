import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  fullDescription: string;
}

export const Project = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1",
      fullDescription: "This is a detailed description of project 1. It includes the purpose, challenges, solutions, and outcomes."
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      technologies: ["Python", "TensorFlow", "Pandas"],
      link: "https://github.com/yourusername/project2",
      fullDescription: "This is a detailed description of project 2. It covers the problem statement, technology stack, and results."
    },
    {
      title: "Project 3",
      description: "A brief description of project 3.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/yourusername/project3",
      fullDescription: "This is a detailed description of project 3. It covers the architecture, design patterns, and performance optimizations."
    },
    {
      title: "Project 4",
      description: "A brief description of project 4.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/yourusername/project3",
      fullDescription: "This is a detailed description of project 3. It covers the architecture, design patterns, and performance optimizations."
    },
    {
      title: "Project 5",
      description: "A brief description of project 5.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/yourusername/project3",
      fullDescription: "This is a detailed description of project 3. It covers the architecture, design patterns, and performance optimizations."
    },
    // Add more projects as needed
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Calculate previous and next project indices
  const prevProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Projects</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Here are some of my projects that demonstrate my skills and experiences in various technologies.</p>
        <div className="carousel">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                index === currentProjectIndex ? 'active' : index === prevProjectIndex ? 'prev' : index === nextProjectIndex ? 'next' : 'hidden'
              }`}
              onClick={() => openModal(index)}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{projects[currentProjectIndex].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{projects[currentProjectIndex].fullDescription}</p>
              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Technologies:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {projects[currentProjectIndex].technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              {projects[currentProjectIndex].link && (
                <a
                  href={projects[currentProjectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  aria-label={`View project ${projects[currentProjectIndex].title}`}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .carousel {
          display: flex;
          justify-content: center;
          position: relative;
          max-width: 100%;
          overflow: hidden;
        }

        .project-card {
          flex: 0 0 30%;
          margin: 0 10px;
          opacity: 0;
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          cursor: pointer;
          text-align: center;
          position: absolute;
        }

        .project-card.active {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 2;
        }

        .project-card.prev {
          transform: translateX(-110%) scale(0.8);
          opacity: 0.5;
          z-index: 1;
        }

        .project-card.next {
          transform: translateX(110%) scale(0.8);
          opacity: 0.5;
          z-index: 1;
        }

        .project-card.hidden {
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }

        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          position: relative;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
