// SkillSection.tsx
import React from 'react';



interface Skill {
    name: string;
    image: string;
  }

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
  return (
    <div className='h-auto rounded-2xl p-8 pt-16'>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className='grid grid-cols-3 gap-10 max-lg:grid-cols-2'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center skill-container'>
          <img src={skill.image} alt={skill.name} className='w-16 h-16 mb-2 image-bw' />
          <p className='skill-name'>{skill.name}</p>
        </div>
        ))}
      </div>
    </div>
  );
};
export default SkillSection;
