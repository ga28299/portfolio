import React, { useEffect } from 'react';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  summary: string;
  link?: string;
  image: string;
}

interface ProjectPopupProps {
  project: Project;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('.popup-content') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 h-4/5 flex relative popup-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          aria-label="Close"
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>

        {/* Image on the Left */}
        <div className="w-1/3 pr-4">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Text on the Right */}
        <div className="w-2/3 pl-4 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description.map((para,index)=>(
            <p key={index}>{para}</p>
          ))}</p>
          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Technologies:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
