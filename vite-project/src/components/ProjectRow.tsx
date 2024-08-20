import React from 'react';

interface Project {
  title: string;
  description: string[];
  summary:string,
  technologies: string[];
  link?: string;
  image: string; // URL to the image
}

interface ProjectRowProps {
  project: Project;
  onClick: () => void;
  isImageLeft: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, onClick, isImageLeft }) => {
  return (
    <div className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`} onClick={onClick}>
      <div className="flex-1 p-4">
        <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.summary}</p>
        <div className="flex space-x-4">
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

export default ProjectRow;
