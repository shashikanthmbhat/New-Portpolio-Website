import React from 'react'
import educ from '../assets/Me/educ.png'
import { BriefcaseIcon, Building, Calendar, CheckCircle, GraduationCap } from 'lucide-react';

const Education = ({ darkMode }) => {
      const Expiriences = [
    {id: 1, 
    role: 'PowerBI Analyst', 
    compeny: 'A.J. Hospital & Research Centre',
    date: 'Sep-2024 - Jun-2025',
    disc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit']
    },

    {id: 2, 
    role: 'PowerBI Analyst', 
    compeny: 'A.J. Hospital & Research Centre',
    date: 'Mar-2023 - Aug-2024',
    disc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit']
    },

    {id: 3, 
    role: 'Statistician', 
    compeny: 'A.J. Hospital & Research Centre',
    date: 'Nov-2015 - Feb-2023',
    disc: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit']
    }
  ];

    const educationData = [
    {
      id: 1,
      degree: 'Masters Of Science (M.Sc) (Statistics)',
      duration: '2013 - 2015',
      collage: 'Mangalore University',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      id: 2,
      degree: 'Batulers Of Science (B.Sc)',
      duration: '2010 - 2013',
      collage: 'Mangalore University',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

  return (
    <section className='text-white py-20 overflow-hidden' id='education'>
        {/* Education */}
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                
                <div className='flex flex-col lg:flex-row lg:items-start items-center gap-5'>
                    {/* Work Expirience Details */}
                    <div className='w-full lg:w-6/12 space-y-6'
                    data-aos='fade-left'>
                        {/* My Education Header */}
                        <header>
                        <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}
                            data-aos='fade-up'
                            data-aos-delay='400'>
                            Work <span style={{
                                    background: 'linear-gradient(to right, #3b82f6,#06b6d4)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    }}>
                                    Expirience
                                    </span>
                            </h1>
                        </header>

                        {/* Work Expirience Details */}
                        <div className='space-y-6'>
                            {Expiriences.map((exp) => (
                                <div key={exp.id}
                                className='group relative p-6 rounded-2xl bg-[#1f1641] hover:border-blue-500/50 transition-all duration-300'>
                                    <div className='flex gap-4'>
                                        <div     className='shrink-0 mt-1'>
                                            <div className='p-3 bg-[#050816] rounded-xl border-gray-800 group-hover: border-blue-600 transition-colors'>
                                                <BriefcaseIcon className='text-blue-500' size={24}/>
                                            </div>
                                        </div>
                                          
                                        <div className='grow'>
                                        {/* Role */}
                                        <h3 className='text-xl font-bold text-white group-hover:text-blue-500 transition-colors'>
                                            {exp.role}
                                        </h3>
                    
                                        {/* company & Date */}
                                        <div className='flex flex-col sm:flex-row sm:items-center italic justify-between gap-2 sm:gap-4 mt-2 text-sm text-gray-400'>
                                            <span className='flex items-center gap-1.5'>
                                                <Building size={14} className='text-blue-500' />
                                                {exp.compeny}
                                            </span>
                                            <span className='flex items-center italic gap-1.5'>
                                                <Calendar size={14} className='text-blue-500' />
                                                {exp.date}
                                            </span>
                                        </div>
                                        <br/>
                                        {/* Discription (bullet list) */}
                                        <div>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                {exp.disc.map((bullet, index) => (
                                                  <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        </div>  
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </div>
                                {/* =============Work Expirience End =================== */}

                                </div>
                                {/** =======================End Of Work Expirience ========== */}
                                
                                {/* Education Details */}
                                <div className='w-full lg:w-6/12 space-y-6'
                                data-aos='fade-left'>
                                    <header>
                                    <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text'
                                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                                        data-aos='fade-up'
                                        data-aos-delay='400'>
                                        My <span style={{
                                                background: 'linear-gradient(to right, #3b82f6,#06b6d4)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                                }}>
                                                Education
                                                </span>
                                        </h1>
                                    </header>
                                    {educationData.map((edu) => (
                            <div
                                    key={edu.id}
                                    className='group relative p-6 rounded-2xl bg-[#111a3e] transition-all duration-300 hover:border-blue-500/50'>
                                        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                        <div className='flex items-center gap-3'>
                                            {/* Graduation cap and digree Name */}
                                            <div className='p-2 bg-[#050816] rounded-lg border border-blue-500/20 group-hover:border-blue-500 transition-colors'>
                                            <GraduationCap className='text-blue-500' size={24} />
                                            </div>
                                            <div>
                                            <h3 className='text-lg font-bold text-white group-hover:text-blue-500 transition-colors'>
                                                {edu.degree}
                                            </h3>
                                            <p className='text-gray-400 text-sm'>
                                                {edu.collage}
                                            </p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border-gray-700 w-fit'>
                                            <Calendar size={12} className='text-blue-500' />
                                            {edu.duration}
                                            </div>
                                        </div>
                                        <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                        {edu.details}
                                        </p>
                                        <div className='flex items-center gap-2 text-[10px] uppercase-wider text-blue-500 font-bold'>
                                        <CheckCircle size={12} />
                                        Academic Excellence
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                {/* =============Work Education End =================== */}

                </div>
            </div>
        </div>

    </section>
  )
}

export default Education

        
        
        