import { image } from 'framer-motion/client'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

import Pproject1 from '../assets/Project_Imgs/Project_1.png'
import Pproject2 from '../assets/Project_Imgs/Project_2.png'
import Pproject3 from '../assets/Project_Imgs/Project_3.png'
import Pproject4 from '../assets/Project_Imgs/Project_4.png'
import Pproject5 from '../assets/Project_Imgs/Project_5.png'
import Pproject6 from '../assets/Project_Imgs/Project_6.png'
import { Tags } from 'lucide-react'


const Project = (  {darkMode}) => {
    const projects = [
        {
            id: 1,
            title: 'Sales v/s Budget Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject1,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
        {
            id: 2,
            title: 'Sports Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject2,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
        {
            id: 3,
            title: 'Marketing Campaign Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject3,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
        {
            id: 4,
            title: 'HR analytics Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject4,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
        {
            id: 5,
            title: 'Banking Analytics Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject5,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
         {
            id: 6,
            title: 'Sales Overview Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            image: Pproject6,
            Tags: ['PowerBI', 'DAX', 'Copilot']
        },
    ];

  return (
    <section
    id='projects'
    // style={{backgroundColor: darkMode ? '#111827' : '#f9fafb'}}
    className='relative py-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10' data-aos='fade-up'>
                {/* My Projects-Heading */}
                <h2 className='text-3xl sm:text-4xl font-bold mb-3'
                    style={{ color: darkMode ? 'white' : '#1f2937' }}>
                        My <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            }}>
                            Projects
                            </span>
                </h2>
                <p
                className='max-w-xl mx-auto'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    a showcase of my recent Work

                </p>
            </div>
            {/* project List */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    style={{
                        background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #06b6d4, #ffffff)',
                        borderColor: darkMode ? '#374151' : 'e5e7eb'
                    }}
                    className='group rounded-xl border duration-300 hover:border-blue-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay= {index * 100}>
                        <div className='h-50 overflow-hidden rounded-t-xl'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-fill group-hover:scale-110 transition-transform duration-500'/>
                        </div>
                        <div className='p-4'>
                            {/* project title */}
                            <h3 className='text-lg font-bold mb-2'
                                style={{
                                    color: darkMode ? 'white' : '#1f2937'
                                }}>
                                {project.title}
                            </h3>
                            {/* Discription */}
                            <p className='text-sm mb-3'
                                style={{color:darkMode ? '#d1d5db' : '#6b7280'}}>
                                    {project.desc}
                            </p>
                            {/* Tags */}
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.Tags.map((tag, idx) => (
                                    <span
                                    key={idx}
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : '#4b5563'}}
                                        className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                ))}
                            </div>
                            {/* Buttons */}
                            <div className='flex gap-2'>
                                {/* Github */}
                                <a
                                    href="#"
                                    style={{backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'}}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                    data-aos='zoom-in'
                                    data-aos-delay='300'>
                                        <FaGithub className='text-sm'/>
                                        <span>Code</span>
                                </a>

                                {/* Demo */}
                                <a
                                    href="#"
                                    style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all'
                                    data-aos='zoom-in'
                                    data-aos-delay='400'>
                                        <FaExternalLinkAlt className='text-sm'/>
                                        <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             
            {/* View All Projects */}
            <div className='text-center mt-10'>
                 <a
                    href="#"
                    style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                    className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='400'>
                    <FaGithub className='text-sm'/>
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Project