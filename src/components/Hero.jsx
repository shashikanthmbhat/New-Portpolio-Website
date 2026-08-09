//Home section

import github from '../assets/github.png'
import powerBI from '../assets/powerBI.png'
import linkedIn from '../assets/linkedIn.png'
import youtube from '../assets/youtube.png'
import hero1 from '../assets/hero1.png'
import cv from '../assets/cv.pdf'
import { DownloadIcon, Mail } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'
import { ChartBarIcon } from '@heroicons/react/24/solid'

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { icon: github, alt: 'Github'},
        { icon: powerBI, alt: 'PowerBI'},
        { icon: linkedIn, alt: 'LinkedIn'},
        { icon: youtube, alt: 'Youtube'},
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-blue-500 hover:bg-blue-600`,
        decorativeCircle: 'bg-blue-500 opacity-10'
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-white`,
        decorativeCircle: 'bg-orange-400 opacity-20'
    };

    const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section 
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    
                    {/*1ST LINE */}
                    <h1 className={`font-courgette-regular text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold ${theme.textPrimary}`}
                    data-aos='fade-up'
                    data-aos-delay = '500'>
                        Hi,
                    </h1>
                    <h1 className={`title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold ${theme.textPrimary}`}
                    data-aos='fade-up'
                    data-aos-delay = '500'>
                        I Am  &nbsp;
                        <span className='font-courgette-regular text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 font-bold'>
                              Shashikanth Bhat
                        </span>
                    </h1>
                    
                    <h3 className={`title-font text-1xl sm:text-2xl lg:text-3xl mb-4 font-semibold ${theme.textPrimary}`}
                    data-aos='fade-up'
                    data-aos-delay = '500'>
                        PowerBI Analiyt/ Statistician
                    </h3>
                    {/* DISCRIPTION */}
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg text-justify ${theme.textSecondary}`}
                    data-aos='fade-up'
                    data-aos-delay='600'>
                        Power BI Analyst with 3+ years of experience and a Statistician with 10+ years of expertise, transforming complex data into actionable insights across healthcare, finance, and research. Skilled in building interactive dashboards, data modeling, and advanced analytics, with strong proficiency in Power BI, SQL, R, Python, and SAS to drive data-driven decisions and measurable business impact.
                    </p>

                    <h3 className={`title-font text-1xl sm:text-2xl lg:text-3xl mb-4 font-semibold ${theme.textPrimary}`}
                    data-aos='fade-up'
                    data-aos-delay = '500'>
                        See my works at :
                    </h3>
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {/* Github */}
                        <a href="#"
                        className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all">
                            <FaGithub className="w-7 h-7"/>
                        </a>

                        {/* PoweBI */}
                        <a href="#"
                        className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all">
                            <ChartBarIcon className="w-7 h-7"/>
                        </a>

                        {/* LinkedIn */}
                        <a href="#"
                        className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all">
                            <FaLinkedinIn className="w-7 h-7"/>
                        </a>

                        {/* Youtube */}
                        <a href="#"
                        className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all">
                            <FaYoutube className="w-7 h-7"/>
                        </a>

                        {/* Instagram */}
                        <a href="#"
                        className="p-3 rounded-xl text-blue-500 border-2 border-blue-500 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all">
                            <FaInstagram className="w-7 h-7"/>
                        </a>
                    </div> 

                    {/*BUTTON */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                        data-aos='fade-up'
                        data-aos-delay='700'>
                            <a href={cv} download className='w-full sm:w-auto'>
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
                {/* IMAGE */}
                <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center '
                data-aos='fade-left'
                data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                        <div className='relative overflow-hidden'>
                            <img
                            src={hero1}
                            alt="Me2 Image"
                            className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />
                            
                            {/* <div> Hi Image </div> */}
                        </div>
                    </div>
                </div>
                
            </div>

        </section>

    </div>
  )
}

export default Hero