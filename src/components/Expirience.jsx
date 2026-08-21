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
    className='py-1 relative overflow-hidden'>
        <div className='py-10 relative overflow-hidden'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center mb-10' data-aos='fade-up'>
                
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
                  {/* ============================ Education (Start) ============================ */}
                  {/* Education Details */}
                  <div className='w-full space-y-8'
                    data-aos='fade-left'>
                    {/* Education Heading*/}
                    {Expiriences.map((exp) => (
                    <div
                      key={exp.id}
                      className={`group relative p-6 border rounded-2xl transition-all duration-300
                        ${darkMode 
                            ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                            : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                          }`}>
                      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                        
                      {/* Graduation Cap and digree Name & Collage */}
                      <div className='flex items-center gap-3'>
                      {/* Briefcase Icon */}
                      <div className={`p-2 rounded-lg border-transparent transition-colors group-hover:rotate-12
                        ${darkMode ? 'bg-blue-500' : 'bg-sky-300'}`}>
                          <BriefcaseIcon size={36} color={darkMode ? 'white' : 'black'} />
                      </div>
                  
                      {/* Role */}
                      <div>
                      <h3 className={` text-xl font-bold transition-colors
                        ${darkMode 
                          ? 'text-white hover:text-blue-500' 
                          : 'text-black hover:text-sky-500'
                        }`}>
                        {exp.role}
                        </h3>
                         {/* company */}
                         <div className='flex flex-col sm:flex-row sm:items-center italic justify-between gap-2 sm:gap-4 mt-2 text-sm'
                         style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                            <span className='flex items-center gap-1.5'>
                              <Building size={14} style={{color: darkMode ? '#9ca3af' : '#1f2937'}} />
                              {exp.compeny}
                            </span>
                         </div>
                        
                      </div>
                    </div>
                     {/* Date */}
                    <div className={`flex items-center gap-2 text-sm font-medium italic px-3 py-1 rounded-full w-fit
                      ${darkMode 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-sky-300 text-black'
                      }`}>
                      <Calendar size={12} color={darkMode ? 'white' : 'black'} />
                      {exp.date}
                    </div> 
                  </div>
                  <p className='lg:text-xl sm:text-base leading-relaxed mb-4'
                    style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                    Discription :
                  </p>
                   {/* Discription (bullet list) */}
                  <p className='lg:text-base sm:text-sm leading-relaxed mb-4'
                        style={{color: darkMode ? 'white' : 'black'}}>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            {exp.disc.map((bullet, index) => (
                             <li key={index}>{bullet}</li>
                              ))}
                        </ul>
                  </p>
                </div>
              ))}
            </div>
            {/* ============================ Education (End) ============================== */}
                  
            {/* =============Work Expirience End ================================================== */} 
            </div>
        </div>
    </section>
  );
};

export default Expirience