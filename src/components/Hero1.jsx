// Hero.jsx
import React from 'react';
// import { DownloadIcon, Mail } from 'lucide-react';
import { assets, socialIcons, themes } from './heroData.js';

const Hero1 = ({ darkMode }) => {
    const theme = darkMode ? themes.dark : themes.light;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section 
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'
            >
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                        
                        {/* 1ST LINE */}
                        <h1 
                            className={`font-courgette-regular text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'
                        >
                            Hi,
                        </h1>
                        <h1 
                            className={`title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'
                        >
                            I Am  &nbsp;
                            <span className='font-courgette-regular text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 font-bold'>
                                  Shashikanth Bhat
                            </span>
                        </h1>
                        
                        <h3 
                            className={`title-font text-1xl sm:text-2xl lg:text-3xl mb-4 font-semibold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'
                        >
                            PowerBI Analyst / Statistician
                        </h3>

                        {/* DESCRIPTION */}
                        <p 
                            className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg text-justify ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'
                        >
                            Power BI Analyst with 3+ years of experience and a Statistician with 10+ years of expertise, transforming complex data into actionable insights across healthcare, finance, and research. Skilled in building interactive dashboards, data modeling, and advanced analytics, with strong proficiency in Power BI, SQL, R, Python, and SAS to drive data-driven decisions and measurable business impact.
                        </p>

                        <h3 
                            className={`title-font text-1xl sm:text-2xl lg:text-3xl mb-4 font-semibold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'
                        >
                            See my works at :
                        </h3>

                        {/* Social Icons Container */}
                        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
                            {socialIcons.map(({ alt, href, icon: Icon }) => (
                                <a
                                    key={alt}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={alt}
                                    className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                >
                                    <Icon className="w-7 h-7" />
                                </a>
                            ))}
                        </div>

                        {/* BUTTONS */}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div 
                                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'
                            >
                                <a href={assets.cv} download className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-blue-500 to-cyan-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                        <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>
                                <a href='#contact' className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                        <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE CONTAINER */}
                    <div 
                        className='mt-16 md:mt-0 flex justify-center lg:justify-center relative'
                        data-aos = 'fade-left'
                    >
                        <div className='relative w-70 h-70 md:w-96 md:h-120'>
                            {/* Background Shadow Ring */}
                            <div className='absolute inset-0 z-0 rounded-full shadow-lg border-3 border-blue-500 translate-x-4 translate-y-4'></div>
                            
                            {/* Image Shell */}
                            <div className='relative z-0 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                                <img src={assets.hr} alt="About Profile" />
                            </div>
                        </div>
                    </div>
                     
                </div>
            </section>
        </div>
    );
};

export default Hero1;
