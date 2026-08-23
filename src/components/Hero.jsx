// Hero.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { assets, socialIcons, themes } from './Aaimg.js';
import { motion, AnimatePresence } from 'framer-motion'

const Hero = ({ darkMode }) => {
const theme = darkMode ? themes.dark : themes.light;

const [text, setText] = useState('');
const [isDeleting, setIsDeleting] = useState(0);
const [loopNo, setLoopNo] = useState(0);
const [typeSpeed, setTypeSpeed] = useState(150);
const titles = ['Shashikanth Bhat', 'PowerBI Analyst', 'Statistician'];

useEffect(() => {
    const i = loopNo % titles.length;
    const fullText = titles[i];

    const handleTyping = () => {
        // Use functional state updates to prevent stale closure bugs
        setText((prevText) => {
            if (isDeleting) {
                return fullText.substring(0, prevText.length - 1);
            } else {
                return fullText.substring(0, prevText.length + 1);
            }
        });

        // Set typing speed based on the action
        setTypeSpeed(isDeleting ? 30 : 150);

        // Handle phase transitions
        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNo((prevLoop) => prevLoop + 1);
        }
    };

    // Schedule the next typing tick
    const timer = setTimeout(handleTyping, typeSpeed);

    // Clean up the timer when dependencies change or component unmounts
    return () => clearTimeout(timer);
}, [text, isDeleting, loopNo, typeSpeed, titles]);


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
                        <motion.div
                        initial = {{opacity: 0,x: -50}}
                        animate = {{opacity: 1,x: 0}}
                        transition={{duration: 0.8, ease:'easeOut'}}
                        className='flex-1 text-center lg:text-left lg:-mt-5 mt-5'>
                            <motion.h1
                            className={`font-courgette-regular text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'> 
                                Hi,
                            </motion.h1>
                            <motion.h1
                            className={`title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay = '500'
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.6}}>
                                <span>
                                    I Am  &nbsp;
                                </span>
                                {/* bg-[linear-gradient(to_right,#ef4444,#f59e0b,#10b981,#3b82f6,#8b5cf6)] */}
                                <motion.span
                                className='text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text  font-bold bg-cyan-500 dark:bg-blue-500'
                                transition={{ duration: 3, repeat: Infinity, }}>
                                    {text}
                                </motion.span >
                            </motion.h1>
                        </motion.div>
                        

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
                                        <assets.DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>
                                <a href='#contact' className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                        <assets.Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
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
                        <div className='relative w-70 h-70 md:w-96 md:h-120 flex items-center justify-center'>
                            {/* Background Shadow Ring */}
                            <motion.div 
                                className='absolute inset-0 z-0 rounded-full border-3 border-blue-500'
                                style={{ boxShadow: '0 0 20px rgb(34 211 238)' }}></motion.div>
                            
                            {/* Image Shell (Scaled down to 97% of container size) */}
                            <motion.div 
                                className='relative z-10 w-[97%] h-[97%] rounded-full overflow-hidden border border-[#1f1641]'
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <img 
                                    src={assets.hero1} 
                                    alt="About Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                    </div>
                     
                </div>
            </section>
        </div>
    );
};

export default Hero;
