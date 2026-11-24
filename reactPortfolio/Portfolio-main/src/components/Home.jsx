import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {


  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          saleem khan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        {/* ADDED: new paragraph about my skills */}
        <p className='text-[#8892b0] pb-4 max-w-[700px]'>
          I enjoy working with React, Node.js, and Tailwind CSS to create fast and
          simple websites.
        </p>
        {/* ADDED: third paragraph about what I am learning */}
<p className='text-[#8892b0] pb-4 max-w-[700px]'>
  Right now I am learning Git and GitHub so I can work with my team on real
  projects.
</p>
{/* ADDED: fourth paragraph about my goal */}
<p className='text-[#8892b0] pb-4 max-w-[700px]'>
  My goal is to build and share projects that other developers can learn from.
</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500} className="flex">
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
