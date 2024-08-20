import React, { useState } from 'react';
import ProjectRow from './ProjectRow';
import ProjectPopup from './ProjectPopup';

interface Project {
  title: string;
  description: string[];
  summary: string;
  technologies: string[];
  link?: string;
  image: string;
}

const ProjectList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  
  const projects = [
    {
      title: "TikTok Shop Backend with Vector Search",
      summary: "Developed a FastAPI backend with vector-based search for TikTok Shop.",
      description: [
        "Objective: Develop a backend for TikTok Shop to enhance product search capabilities.",
        "Result: Enabled efficient vector-based product search and seamless integration with a TypeScript frontend.",
        "Learning: Gained experience in building scalable search solutions and integrating advanced APIs for enhanced user experiences."
      ],
      technologies: ["FastAPI", "PineconeDB", "OpenAI API", "TypeScript"],
      link: "http://example.com/tiktok-shop-backend",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Performance Analysis of Machine Learning Models on Diverse Hardware",
      summary: "Evaluated machine learning models across different hardware platforms.",
      description: [
        "Objective: Evaluate and optimize the performance of machine learning models on various hardware platforms.",
        "Result: Identified bottlenecks and optimization opportunities, leading to enhanced model performance.",
        "Learning: Developed skills in performance benchmarking and hardware-specific optimizations for machine learning models."
      ],
      technologies: ["Python", "TensorFlow", "PyTorch"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Smart Parking System",
      summary: "Developed a deep learning system for tracking license plates.",
      description: [
        "Objective: Create a system to track and record license plates from images.",
        "Result: Successfully tracked and recorded license plates with high accuracy.",
        "Learning: Improved understanding of image processing and deep learning applications in real-world scenarios."
      ],
      technologies: ["TensorFlow", "Python", "OpenCV"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Natural Language Search for TikTok Shop",
      summary: "Enhanced product discovery with a semantic search engine.",
      description: [
        "Objective: Enhance product discovery with a semantic search engine.",
        "Result: Achieved a 40% improvement in product discovery and search relevance.",
        "Learning: Advanced skills in semantic search, NLP, and ranking algorithms."
      ],
      technologies: ["LLMs", "Vector Databases", "HyDE", "MMR"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Personal Portfolio Site with LLM and Retrieval-Augmented Generation (RAG)",
      summary: "Developed an interactive portfolio site with LLM-based chat feature.",
      description: [
        "Objective: Create an interactive portfolio with an LLM-based chat feature.",
        "Result: Enabled dynamic and interactive exploration of professional background and projects.",
        "Learning: Gained experience in integrating LLMs, RAG techniques, and user-friendly web design."
      ],
      technologies: ["Cohere", "Gemini APIs", "React", "TypeScript"],
      link: "http://example.com/personal-portfolio-site",
      image: "https://via.placeholder.com/200"
    },
    {
      title: "E-commerce Backend in Go",
      summary: "Built a high-performance e-commerce backend using Go.",
      description: [
        "Objective: Build a high-performance e-commerce backend.",
        "Result: Demonstrated full-stack proficiency with a robust e-commerce solution.",
        "Learning: Enhanced skills in backend development, authentication, and full-stack integration."
      ],
      technologies: ["Go", "PostgreSQL", "JWT", "HTMX"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Distributed Climate Data Processing System",
      summary: "Implemented a scalable data pipeline for climate data processing.",
      description: [
        "Objective: Process and analyze climate data at scale.",
        "Result: Enabled scalable and efficient climate data processing.",
        "Learning: Improved understanding of distributed data processing and scalable data analysis techniques."
      ],
      technologies: ["Python", "Kafka", "Spark", "REST API"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Climate Data Analysis and Clustering",
      summary: "Analyzed and clustered climate data to identify patterns.",
      description: [
        "Objective: Analyze and cluster climate data to identify patterns.",
        "Result: Provided clear insights into climate patterns and improved data-driven decision-making.",
        "Learning: Developed expertise in data clustering and visualization techniques."
      ],
      technologies: ["Python", "Spark", "Kafka", "PostgreSQL"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Food Access Analysis",
      summary: "Analyzed food access challenges within the Medicare population.",
      description: [
        "Objective: Analyze food access challenges within the Medicare population.",
        "Result: Identified key challenges and impacts related to food access.",
        "Learning: Enhanced skills in predictive modeling and public health data analysis."
      ],
      technologies: ["Python", "Random Forest", "CDC Data", "FDA Data"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Generative Model Sprite Generation",
      summary: "Developed a system to generate sprites using Diffusion Models.",
      description: [
        "Objective: Generate sprites using generative models.",
        "Result: Achieved significant speedup in image generation with modern sampling techniques.",
        "Learning: Advanced knowledge in generative modeling and text-conditioned image synthesis."
      ],
      technologies: ["Diffusion Models", "PyTorch", "Text Conditioning"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Street Fighter Game | Unity, C#",
      summary: "Developed a 2D fighting game for a Game Jam competition.",
      description: [
        "Objective: Develop a 2D fighting game for a Game Jam competition.",
        "Result: Successfully completed the game within a short timeframe, demonstrating rapid development skills.",
        "Learning: Gained experience in game development and object-oriented programming principles."
      ],
      technologies: ["Unity", "C#", "Game Mechanics"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Poster Genre Classification",
      summary: "Classified movie genres based on posters using deep learning.",
      description: [
        "Objective: Classify movie genres based on posters.",
        "Result: Achieved 93% accuracy in genre classification.",
        "Learning: Improved skills in deep learning and image classification."
      ],
      technologies: ["TensorFlow", "Deep Learning", "IMDB Dataset"],
      image: "https://via.placeholder.com/200"
    },
    {
      title: "Medical Publication Data ETL, Warehousing and Analysis",
      summary: "Managed and analyzed healthcare literature data.",
      description: [
        "Objective: Manage and analyze healthcare literature data.",
        "Result: Enhanced data management and analysis capabilities, improving query performance by 20%.",
        "Learning: Developed expertise in data warehousing and performance optimization."
      ],
      technologies: ["MySQL", "AWS RDS", "ETL", "Data Warehousing"],
      image: "https://via.placeholder.com/200"
    }
  ];
  


  "https://via.placeholder.com/200"

  const handleRowClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectRow
          key={index}
          project={project}
          onClick={() => handleRowClick(project)}
          isImageLeft={index % 2 === 0}
        />
      ))}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup} />}
    </div>
  );
};

export default ProjectList;
