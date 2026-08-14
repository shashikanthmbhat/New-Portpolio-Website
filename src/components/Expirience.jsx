import React from 'react'
import { BriefcaseIcon, Building, Calendar } from 'lucide-react';

const Expirience = ({ darkMode }) => {
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
  return (
    <section id="expirience" className={`min-h-screen overflow-hidden flex items-start justify-center z-10 px-4 sm:px-6 pt-23`}>
      <div data-aos='fade-left'
        data-aos-delay='300'>
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
                      <div className='shrink-0 mt-1'>
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
                        {/* =============End=================== */}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
      </div>
    </section>
  )
}

export default Expirience