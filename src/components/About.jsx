//This is 'About Me section
import hero2 from '../assets/hero2.png' //Not Used kept for alternative
import Me4 from '../assets/Me/Me4.png'
import Me from '../assets/Me/Me.png'
import educ from '../assets/Me/educ.png'


const About = ({ darkMode }) => {

    const imageStyle = {
    border: '5px solid #555',
    borderRadius: '10px',
    padding: '5px'
  };

  return (
   <section id="about" className={`min-h-screen overflow-hidden flex items-start justify-center z-10 px-4 sm:px-6 pt-23`}>
    {/* 1. Changed items-center to items-stretch to enforce identical column heights on desktop */}
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
        
        {/** Left Half - About me Img (Now fills height) */}
        <div className='w-full flex justify-center lg:justify-start h-full' data-aos='fade-right'>
            {/* 2. Added h-full to the absolute/relative positioning layout */}
            <div className='relative w-full max-w-sm lg:max-w-md h-full min-h-87.5 lg:min-h-0'>
                {/**Shadow Outline */}
                <div className='absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border-3 border-blue-500'>
                </div>
                {/**Image Wrapper */}
                <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641] h-full'>
                    {/* 3. Changed fixed height classes to h-full so it fills the container while maintaining aspect ratio */}
                    <img 
                        src={Me} 
                        alt='About Me' 
                        className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-110'
                    />
                </div>
            </div>
        </div>

        {/**Right Half */}
        <article
        data-aos='fade-left'
        data-aos-delay='300'
        className='text-center lg:text-left relative flex flex-col justify-between'>
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text'
                style={{ color: darkMode ? 'white' : '#1f2937' }}
                data-aos='fade-up'
                data-aos-delay='400'>
                    About <span style={{
                            background: 'linear-gradient(to right, #3b82f6,#06b6d4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            }}>
                            Me
                            </span>
                </h1>
            </header>

            {/* Description */}
            <p className={`text-sm sm:text-base lg:text-lg text-justify mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-blue-900/10 to-blue-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            data-aos='fade-up'
            data-aos-delay='500'>
                    PowerBI Analyst | Experienced Statistician | Data-Driven Decision Maker | Research & Analytics Expert
                    <br/>
                    <br/>
                    <span className='text-justify'>
                        Power BI Analyst with 3+ years of experience and a Statistician with 10+ years of expertise, transforming complex data into actionable insights across healthcare, finance, and research. Skilled in building interactive dashboards, data modeling, and advanced analytics, with strong proficiency in Power BI, SQL, R, Python, and SAS to drive data-driven decisions and measurable business impact.
                    </span>
            </p>
            
            <div className='flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                
                {/* Education */}
                <div className='text-center'
                data-aos='zoom-in'
                data-aos-delay='600'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>
                        5+
                    </div>
                    <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} `}>
                        Years of Education
                    </div>
                </div>

                {/* Experience */}
                <div className='text-center'
                data-aos='zoom-in'
                data-aos-delay='650'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>
                        10+
                    </div>
                    <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} `}>
                        Years of Experience
                    </div>
                </div>

                {/* Projects */}
                <div className='text-center'
                data-aos='zoom-in'
                data-aos-delay='700'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>
                        100+
                    </div>
                    <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} `}>
                        Projects completed
                    </div>
                </div>
            </div>
            <div>
                <button className={`w-full sm:w-auto border-2 border-blue-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform
                    ${darkMode
                        ? 'text-white bg-blue-500/10'
                        : 'text-gray-800 bg-white/90'}`}
                        data-aos='fade-up'
                        data-aos-delay='800'>
                    Learn More
                </button>
            </div>
        </article> 
    </div>
</section>

  )
}

export default About

//for filled octagon
// className="absolute -inset-6 lg:-inset-20 bg-linear-to-l from-[#3b82f6] via-[#0ea5e5] to-[#06b6d4] octagon-shape z-0"