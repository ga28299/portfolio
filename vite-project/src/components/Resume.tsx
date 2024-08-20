import React from 'react';

export const Resume = () => {

  return (
    
    <section className="py-16 bg-white dark:bg-gray-800">
        <h1>HI here fgoes resume btw</h1>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Resume</h2>
        <div className="flex flex-col items-center">
          <div className="w-full h-[calc(100vh-200px)] mb-4">
            <iframe
              src={`resumeUrl`}
              title="Resume"
              className="w-full h-full border-0"
            />
          </div>
            <a
                href={"site"}
                download="George_Resume.pdf"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            />
         
        </div>
      </div>
    </section>
  );
};