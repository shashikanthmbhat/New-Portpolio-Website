import React from 'react'
import { BriefcaseIcon, Building, Calendar, CheckCircle, GraduationCap } from 'lucide-react';


const Expirience = ( {darkMode}) => {

  const headerWe = {
    title1: 'Work',
    title2: 'Experience',
    description: 'I deliver impactful digital solutions by combining technical expertise with creative problem-solving. My professional journey features a proven track record of successful, high-quality projects.'
    };

    const Expiriences = [
    {id: 1, 
    role: 'PowerBI Analyst', 
    compeny: 'A.J. Hospital & Research Centre',
    date: 'Sep-2024 - Jun-2025',
    disc: ['Developed interactive Power BI dashboards and reports to visualize key business metrics, improving decision-making efficiency,',
           'Optimized data models and DAX calculations, reducing report load time by 50%.',
           'Integrated multiple data sources, including SQL Server, Excel, and cloud-based platforms, to create centralized reporting solutions.',
           'Conducted data analysis and provided insights that led to 20% improvement in operational efficiency.',
           'Collaborated with business teams to identify reporting needs and provided training on Power BI best practices.', 
           'Presented data-driven insights to senior management, leading to strategic changes in business.'
          ]
    },

    {id: 2, 
    role: 'Statistician', 
    compeny: 'A.J. Hospital & Research Centre',
    date: 'Nov-2015 - Dec-2024',
    disc: ['Define and document all active and inactive channels for data collection, investigating the possibilities of linking fields, merging tables and archiving legacy information in compressed formats',
           'Develop analysis schemas that include textual and visual components to model what to expect from a particular plan of action',
           'Independently applies logic to set up cohort based on data plan as provided', 
           'Fitted a regression model for waiting time in emergency department using a regression analysis',
           'Wrote R programs and SAS programs for automation of statistical analysis which increased the hospital productivity', 
           'Provided statistical analysis earlier than expected which helped delayed projects get back on time',
           'Develop programs to perform data validation and error detection to ensure data integrity',
           'Learns and applies new statistical theory and techniques for ongoing projects or proposals',
           'Supported various investigations by providing statistical analysis which is the key in decision making',
           'Work with the study team and PhD statisticians to develop reporting plans and generate reports on study progress',
           'Summarized, interpreted and presented results from research projects of Doctors, Management students, Post- Graduates &Interns', 
           'Performed data quality checks on the input data and provided professional analysed data',
           'Provided detailed interpretation of data and recommendations to optimize the future practice'
          ]
    }
  ];

  return (
    <section 
    id='expirience'
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                
                    {/* Headding : Work Expirience */}
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        {headerWe.title1} <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                            }}>
                                {headerWe.title2}
                            </span>
                    </h1>

                    {/* Discription - WOrk Expirience */}
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563'}}>
                       {headerWe.description}
                    </p>
                </div>
                {/* ============================ Start of Work Expirience ============================ */}
                {/* Work Expirience Details */}
                            <div className='space-y-6'>
                              {Expiriences.map((exp) => (
                                  <div key={exp.id}
                                  className='group relative p-6 rounded-2xl bg-linear-to-r from-blue-900/10 to-blue-900/5 hover:border-blue-500/50 transition-all duration-300'
                                  style={{color: darkMode ? 'text-gray-300' : 'text-gray-700'}}>
                                    <div className='flex gap-4'>
                                      <div className='shrink-0 mt-1'>
                                        {/* Briefcase Icon */}
                                        <div className={`p-3 rounded-xl border-transparent group-hover:border-blue-600 transition-colors ${
                                            darkMode ? 'bg-gray-300' : 'bg-gray-700'
                                            }`}>
                                            <BriefcaseIcon size={24} color={darkMode ? '#03060e' : '#e9ebf3'} />
                                        </div>

                                      </div>
                                      
                                      <div className='grow'>
                                        {/* Role */}
                                        <h3 className='text-xl font-bold group-hover:text-blue-500 transition-colors'>
                                          {exp.role}
                                        </h3>
                
                                        {/* company & Date */}
                                        <div className='flex flex-col sm:flex-row sm:items-center italic justify-between gap-2 sm:gap-4 mt-2 text-sm'>
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
                                        <div className='lg:text-base sm:text-sm leading-relaxed mb-4'>
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
                {/* =============Work Expirience End ================================================== */} 
            </div>
        </div>
    </section>
  );
};

export default Expirience