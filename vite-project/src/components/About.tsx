import React from 'react';
import hike from '../assets/hike.jpg'

export const About = () => {

    return (
      <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-gray-800 dark:text-white">About</h2>
        <div className="w-full  mx-auto">
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12">
          I'm a passionate data scientist and software engineer with a keen interest in machine learning and computer vision.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2 " 
              aria-label="Hobbies including camping, hiking, painting, movies, soccer, music, weightlifting, and robotics">Hobbies</h3>
              <p className="text-3xl text-gray-600 dark:text-gray-300">
              ⛺ 🏞️ 🎨 🍿 ⚽ 🎵 🏋️‍♀️ 🤖
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
              <p className="text-3xl text-gray-600 dark:text-gray-300">
                Boston (ET)
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Freelance/Work</h3>
              <p className="text-3xl text-gray-600 dark:text-gray-300">
                Available
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 ">
          <div className="flex-1 md:w-2/5">
            <img src={hike} alt="Profile" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex-1 md:w-1/3">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Hello!</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm George Abraham, and I'm excited to share more about my work and experiences. Feel free to explore my portfolio and get in touch if you'd like to discuss any opportunities or collaborations.
            </p>
          </div>
          </div>

            {/* Work Experience Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Work Experience</h2>
          <div className="flex flex-col gap-16">

            <div className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Jan 2023 - Present</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Bear Brown and Company</p>
                <p className="text-lg text-gray-800 dark:text-white">Machine Learning Engineer</p>
              </div>
              <div className="w-full ">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Worked on developing predictive models and analytics dashboards, improving data-driven decision-making.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Jan 2023 - Present</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Bear Brown and Company</p>
                <p className="text-lg text-gray-800 dark:text-white">Machine Learning Engineer</p>
              </div>
              <div className="w-full ">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Worked on developing predictive models and analytics dashboards, improving data-driven decision-making.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Jan 2023 - Present</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Bear Brown and Company</p>
                <p className="text-lg text-gray-800 dark:text-white">Machine Learning Engineer</p>
              </div>
              <div className="w-full ">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Worked on developing predictive models and analytics dashboards, improving data-driven decision-making.
                </p>
              </div>
            </div>


          </div>
          </div>

        </div>
      </div>
    </section>
    );
};