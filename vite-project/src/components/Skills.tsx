import React from 'react';
import SkillSection from './SkillSection';
import {languages} from '../data/languages';
import {tools} from '../data/tools';
import {frameworks} from '../data/frameworks';
import {databases} from '../data/databases';


interface Skill {
    name: string;
    image: string;
  }


export const Skills: React.FC = () => {
  return (
    <section className="max-lg px-4 py-16 ">
      <div className='container flex flex-col 
        justify-center items-center gap-6 mx-auto
        max-lg:w-full max-lg:items-start max-lg:py-16'>
        <div>
          <p className='text-2xl font-black mb-4'>
            <span>Skills</span>
          </p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            My TechStack and Skills
          </h2>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className='w-1/3 max-lg:w-full flex flex-col gap-20'>
            <SkillSection title="Programming Languages" skills={languages as Skill[]} />
            <SkillSection title="Tools" skills={tools as Skill[]} />
          </div>
          <div className='flex flex-col h-[inherit] justify-around max-lg:gap-40'>
            <SkillSection title="Frameworks" skills={frameworks as Skill[]} />
            <SkillSection title="Databases" skills={databases as Skill[]} />
          </div>
        </div>
      </div>
    </section>
  );
};