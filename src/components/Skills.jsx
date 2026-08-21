//Business Inteligence (BI)
import Powerbi_Dark from  '../assets/Skill_Icon/Blue-500/Logos_BI/Power_bi-Blue_500.png'
import Excel_Dark from  '../assets/Skill_Icon/Blue-500/Logos_BI/Excel-Blue_500.png'
import R_Dark from  '../assets/Skill_Icon/Blue-500/Logos_BI/R_BI-Blue_500.png'
import SPSS_Dark from  '../assets/Skill_Icon/Blue-500/Logos_BI/SPSS-Blue_500.png'
import Python_Dark from  '../assets/Skill_Icon/Blue-500/Logos_BI/Python-Blue_500.png'
import Powerbi_Light from  '../assets/Skill_Icon/Sky-500/Logos_BI/Power_bi-Sky_500.png'
import Excel_Light from  '../assets/Skill_Icon/Sky-500/Logos_BI/Excel-Sky_500.png'
import R_Light from  '../assets/Skill_Icon/Sky-500/Logos_BI/R_BI-Sky_500.png'
import SPSS_Light from  '../assets/Skill_Icon/Sky-500/Logos_BI/SPSS-Sky_500.png'
import Python_Light from  '../assets/Skill_Icon/Sky-500/Logos_BI/Python-Sky_500.png'

//Data Analysis & Modelling(DM)
import Daxdm_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DM/Dax_DM-Blue_500.png'
import Pq_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DM/Power_Querry-Blue_500.png'
import Etl_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DM/ETL-Blue_500.png'
import DataWH_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DM/Data_Warehousing-Blue_500.png'
import Daxdm_Light from  '../assets/Skill_Icon/Sky-500/Logos_DM/Dax-Sky_500.png'
import Pq_Light from  '../assets/Skill_Icon/Sky-500/Logos_DM/Power_Querry-Sky_500.png'
import Etl_Light from  '../assets/Skill_Icon/Sky-500/Logos_DM/ETL-Sky_500.png'
import DataWH_Light from  '../assets/Skill_Icon/Sky-500/Logos_DM/Data_Warehousing-Sky_500.png'

//Programming Languages(PL)
import Daxpl_Dark from  '../assets/Skill_Icon/Blue-500/Logos_PL/Dax-PL-Blue_500.png'
import Vba_Dark from  '../assets/Skill_Icon/Blue-500/Logos_PL/VBA-Blue_500.png'
import Rpl_Dark from  '../assets/Skill_Icon/Blue-500/Logos_PL/R_PL-Blue_500.png'
import Csharp_Dark from  '../assets/Skill_Icon/Blue-500/Logos_PL/C Sharp-Blue_500.png'
import Cpp_Dark from  '../assets/Skill_Icon/Blue-500/Logos_PL/CPP-Blue_500.png'
import Daxpl_Light from  '../assets/Skill_Icon/Sky-500/Logos_PL/Dax_PL-Sky_500.png'
import Vba_Light from  '../assets/Skill_Icon/Sky-500/Logos_PL/VBA-Sky_500.png'
import Rpl_Light from  '../assets/Skill_Icon/Sky-500/Logos_PL/R_PL-Sky_500.png'
import Csharp_Light from  '../assets/Skill_Icon/Sky-500/Logos_PL/C_Sharp-Sky_500.png'
import Cpp_Light from  '../assets/Skill_Icon/Sky-500/Logos_PL/CPP-Sky_500.png'

//Database Softwares(DB)
import Mysql_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DB/Mysql_DB-Blue_500.png'
import Mdb_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DB/Mongo_DB-Blue_500.png'
import Odb_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DB/Oracale_DB-Blue_500.png'
import Mss_Dark from  '../assets/Skill_Icon/Blue-500/Logos_DB/MC_sql_server-Blue_500.png'
import Mysql_Light from  '../assets/Skill_Icon/Sky-500/Logos_DB/Mysql_DB-Sky_500.png'
import Mdb_Light from  '../assets/Skill_Icon/Sky-500/Logos_DB/Mongo_DB-Sky_500.png'
import Odb_Light from  '../assets/Skill_Icon/Sky-500/Logos_DB/Oracale_DB-Sky_500.png'
import Mss_Light from  '../assets/Skill_Icon/Sky-500/Logos_DB/MC_sql_server-Sky_500.png'
import { head } from 'framer-motion/client'

const Skills = ( {darkMode}) => {
    const skillsBI = [
            {name: 'PowerBI', icon_Dark: Powerbi_Dark , icon_Light: Powerbi_Light ,level: 95, color: '#f2c811'},
            {name: 'Excel', icon_Dark: Excel_Dark , icon_Light: Excel_Light ,level: 95, color: '#185c37'},
            {name: 'R', icon_Dark: R_Dark , icon_Light: R_Light ,level: 90, color: '#2369bd'},
            {name: 'SPSS', icon_Dark: SPSS_Dark , icon_Light: SPSS_Light ,level: 85, color: '#d50b38'},
            {name: 'Python', icon_Dark: Python_Dark , icon_Light: Python_Light ,level: 85, color: '#264d6f'},
    ];

    const skillsDM = [
            {name: 'Power BI DAX', icon_Dark: Daxdm_Dark , icon_Light: Daxdm_Light ,level: 95, color: '#cca300'},
            {name: 'Power Querry', icon_Dark: Pq_Dark , icon_Light: Pq_Light ,level: 95, color: '#11676a'},
            {name: 'ETL', icon_Dark: Etl_Dark , icon_Light: Etl_Light ,level: 90, color: '#00167a'},
            {name: 'Data Wrhouse', icon_Dark: DataWH_Dark , icon_Light: DataWH_Light ,level: 90, color: '#7a0000'},
        ];

    const skillsPL = [
            {name: 'DAX', icon_Dark: Daxpl_Dark , icon_Light: Daxpl_Light ,level: 95, color: '#f2c811'},
            {name: 'VBA', icon_Dark: Vba_Dark , icon_Light: Vba_Light ,level: 95, color: '#782379'},
            {name: 'R', icon_Dark: Rpl_Dark , icon_Light: Rpl_Light ,level: 90, color: '#2369bd'},
            {name: 'C #', icon_Dark: Csharp_Dark , icon_Light: Csharp_Light ,level: 85, color: '#782379'},
            {name: 'C++', icon_Dark: Cpp_Dark , icon_Light: Cpp_Light ,level: 85, color: '#004482'},
        ];
    
    const skillsDB = [
            {name: 'My SQL', icon_Dark: Mysql_Dark , icon_Light: Mysql_Light ,level: 95, color: '#00758f'},
            {name: 'Mongo DB', icon_Dark: Mdb_Dark , icon_Light: Mdb_Light ,level: 95, color: '#10aa50'},
            {name: 'Oracle DB', icon_Dark: Odb_Dark , icon_Light: Odb_Light ,level: 90, color: '#c94634'},
            {name: 'Microsoft SQL', icon_Dark: Mss_Dark , icon_Light: Mss_Light ,level: 90, color: '#b71c1c'},
        ];

    const stats = [
                {id: 1, name: 'Statistical modelling'}, {id: 2, name: 'Data Analytics'}, {id: 3, name: 'Biostatistics'}, {id: 4, name: 'Data Insights'}, {id: 5, name: 'Designs of Experiments (DOE)'}, {id: 6, name: 'Decision Trees'},
                {id: 7, name: 'Quality control tools'}, {id: 8, name: 'Multivariate data analysis'}, {id: 9, name: 'Operational research'}, {id: 10, name: 'Regression Analysis'}, {id: 11, name: 'Clustering Techniques'},
                {id: 12, name: 'Generalized Linear Model'}, {id: 13, name: 'Research Methodology'}, {id: 14, name: 'Artificial Intelligence'}, {id: 15, name: 'Econometrics'}, {id: 16, name: 'Psychometric'}, {id: 17, name: 'Sampling'},
                {id: 18, name: 'Data Science'}, {id: 19, name: 'Classification Algorithms'}, {id: 20, name: 'Predictive Analytic'}, {id: 21, name: 'Machine Learning'}, {id: 22, name: 'Data Mining'}, {id: 23, name: 'Bigdata Analytics'},
                {id: 24, name: 'Natural Language Processing (NLP)'}, {id: 25, name: 'Supervised Learning.'}, {id: 26, name: 'LPP'}, {id: 27, name: 'Unsupervised Learning'}, {id: 28, name: 'Reinforcement Learning'},
                {id: 29, name: 'Deep Learning'}, {id: 30, name: 'Ensemble Methods'}, {id: 31, name: 'ARIMA'}, {id: 32, name: 'Stochastic Optimization'}, {id: 33, name: 'Dynamic Programming'}, {id: 34, name: 'Queueing Theory'},  
            ];

    const headerSkills= {
    title1: 'My',
    title2: 'Skills',
    description: 'A specialized toolkit of modern frameworks, languages, and cloud technologies leveraged to build scalable, high-performance web applications'
    };


  return (
    <section 
    id='skills'
    className='py-1 relative overflow-hidden'>
        <div className='py-10 relative overflow-hidden'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center mb-10' data-aos='fade-up'>

                    {/* Headding : My Skills */}
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        {headerSkills.title1} <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                            }}>
                                {headerSkills.title2}
                            </span>
                    </h1>

                    {/* Discription - My Skills */}
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563'}}>
                        {headerSkills.description}
                    </p>
                </div>

                {/*================================= Business Inteligence (BI) ==================================*/}
                {/* Heading */}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Business Inteligence Tools :
                    </h1>
                </div>
                
                {/* My Skill set BI */}
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skillsBI.map((skillbi, index1) =>(
                            <div
                        key={index1}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index1 * 100}`}>
                            {/* Background */}
                            <div className={`h-full p-6 rounded-2xl border transition-all hover:translate--y-2 group duration-300
                                ${darkMode 
                                    ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                                    : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                }`}>
                                {/* Icon & Name */}
                                <div className='flex items-center mb-4'>
                                    {/* Icon */}
                                    <div 
                                        className='w-20 h-20 rounded-xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={darkMode ? skillbi.icon_Dark : skillbi.icon_Light}
                                            alt={skillbi.name}
                                            className='w-full h-full object-contain '/>
                                    </div>
                                    {/* Name */}
                                    <h3 className='text-xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skillbi.name}
                                    </h3>
                                </div>

                                {/* Proficiency Level */}
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                        style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                                            Proficiency
                                    </span>
                                    <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                    }}
                                    className='font-bold'>
                                            {skillbi.level}%
                                    </span>
                                </div>
                                {/* Proficiency Bar */}
                                <div className='w-full rounded-full h-2 overflow-hidden'
                                    style={{backgroundColor: darkMode ? '#374151' : '#e5e7eb'}}>
                                    <div className={`h-full rounded-full transition-all duration-1000 ease-out`}
                                        style={{ backgroundColor: darkMode ? '#3b82f6' : '#0ea5e9',
                                                width: `${skillbi.level}%`}}>
                                    </div>
                                </div>
                                <div className={`mt-6 pt-4 border-t
                                    ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*================================= (BI) (End) ==================================*/}
                <br/>

                {/*================================= Data Analysis & Modelling (DM) ==================================*/}
                {/* Heading */}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Data Analysis & Modelling Tools :
                    </h1>
                </div>
                
                {/* My Skill set DM */}
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skillsDM.map((skilldm, index2) =>(
                            <div
                        key={index2}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index2 * 100}`}>
                            {/* Background */}
                            <div className={`h-full p-6 rounded-2xl border transition-all hover:translate--y-2 group duration-300
                                ${darkMode 
                                    ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                                    : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                }`}>
                                {/* Icon & Name */}
                                <div className='flex items-center mb-4'>
                                    {/* Icon */}
                                    <div 
                                        className='w-20 h-20 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={darkMode ? skilldm.icon_Dark : skilldm.icon_Light}
                                            alt={skilldm.name}
                                            className='w-full h-full object-contain '/>
                                    </div>
                                    {/* Name */}
                                    <h3 className='text-xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skilldm.name}
                                    </h3>
                                </div>

                                {/* Proficiency Level */}
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                        style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                                            Proficiency
                                    </span>
                                    <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                    }}
                                    className='font-bold'>
                                            {skilldm.level}%
                                    </span>
                                </div>
                                {/* Proficiency Bar */}
                                <div className='w-full rounded-full h-2 overflow-hidden'
                                    style={{backgroundColor: darkMode ? '#374151' : '#e5e7eb'}}>
                                    <div className={`h-full rounded-full transition-all duration-1000 ease-out`}
                                        style={{ backgroundColor: darkMode ? '#3b82f6' : '#0ea5e9',
                                                width: `${skilldm.level}%`}}>
                                    </div>
                                </div>
                                <div className={`mt-6 pt-4 border-t
                                    ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*================================= (DM) (End) ==================================*/}
                <br/>
                
                {/*================================= Programming Languages (PL) ==================================*/}
                {/* Heading */}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Programming Languages Tools :
                    </h1>
                </div>
                
                {/* My Skill set PL */}
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skillsPL.map((skillpl, index3) =>(
                            <div
                        key={index3}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index3 * 100}`}>
                            {/* Background */}
                            <div className={`h-full p-6 rounded-2xl border transition-all hover:translate--y-2 group duration-300
                                ${darkMode 
                                    ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                                    : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                }`}>
                                {/* Icon & Name */}
                                <div className='flex items-center mb-4'>
                                    {/* Icon */}
                                    <div 
                                        className='w-20 h-20 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={darkMode ? skillpl.icon_Dark : skillpl.icon_Light}
                                            alt={skillpl.name}
                                            className='w-full h-full object-contain '/>
                                    </div>
                                    {/* Name */}
                                    <h3 className='text-xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skillpl.name}
                                    </h3>
                                </div>

                                {/* Proficiency Level */}
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                        style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                                            Proficiency
                                    </span>
                                    <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                    }}
                                    className='font-bold'>
                                            {skillpl.level}%
                                    </span>
                                </div>
                                {/* Proficiency Bar */}
                                <div className='w-full rounded-full h-2 overflow-hidden'
                                    style={{backgroundColor: darkMode ? '#374151' : '#e5e7eb'}}>
                                    <div className={`h-full rounded-full transition-all duration-1000 ease-out`}
                                        style={{ backgroundColor: darkMode ? '#3b82f6' : '#0ea5e9',
                                                width: `${skillpl.level}%`}}>
                                    </div>
                                </div>
                                <div className={`mt-6 pt-4 border-t
                                    ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*================================= (PL) (End) ==================================*/}
                <br/>

                {/*================================= Database Softwares (DB) ==================================*/}
                {/* Heading */}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Database Softwares Tools :
                    </h1>
                </div>
                
                {/* My Skill set DB */}
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skillsDB.map((skilldb, index4) =>(
                            <div
                        key={index4}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index4 * 100}`}>
                            {/* Background */}
                            <div className={`h-full p-6 rounded-2xl border transition-all hover:translate--y-2 group duration-300
                                ${darkMode 
                                    ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                                    : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                }`}>
                                {/* Icon & Name */}
                                <div className='flex items-center mb-4'>
                                    {/* Icon */}
                                    <div 
                                        className='w-20 h-20 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={darkMode ? skilldb.icon_Dark : skilldb.icon_Light}
                                            alt={skilldb.name}
                                            className='w-full h-full object-contain '/>
                                    </div>
                                    {/* Name */}
                                    <h3 className='text-xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skilldb.name}
                                    </h3>
                                </div>

                                {/* Proficiency Level */}
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                        style={{color: darkMode ? '#9ca3af' : '#1f2937'}}>
                                            Proficiency
                                    </span>
                                    <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                    }}
                                    className='font-bold'>
                                            {skilldb.level}%
                                    </span>
                                </div>
                                {/* Proficiency Bar */}
                                <div className='w-full rounded-full h-2 overflow-hidden'
                                    style={{backgroundColor: darkMode ? '#374151' : '#e5e7eb'}}>
                                    <div className={`h-full rounded-full transition-all duration-1000 ease-out`}
                                        style={{ backgroundColor: darkMode ? '#3b82f6' : '#0ea5e9',
                                                width: `${skilldb.level}%`}}>
                                    </div>
                                </div>
                                <div className={`mt-6 pt-4 border-t
                                    ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                        style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*================================= (DB) (End) ==================================*/}
                <br/>

                {/*================================= Statistical Skills ==================================*/}
                {/* Statistical Skills Heading*/}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Statistical Skills :
                    </h1>
                </div>

                {/* Statistical Skills*/}
                <div className='my-4' data-aos='fade-up' data-aos-delay='200'>
                    {/* Background Card Wrapper */}
                    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group
                        ${darkMode 
                            ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                            : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                        }`}>
                    
                        {/* Active Tag Layout Container */}
                        <div className="flex flex-wrap gap-x-1.5 gap-y-3">
                            {stats.map((itm, idx) => (
                                <span key={idx} data-aos='fade-up' data-aos-delay='500'
                                    className={`px-3 py-1 text-xl rounded-full border-2 transition-all duration-200
                                    ${darkMode
                                        ? 'border-[#3b82f6] text-[#9ca3af] hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'
                                        : 'border-[#06b6d4] text-[#1f2937] hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                    }`}>
                                    {itm.name}
                                </span>
                            ))}
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills