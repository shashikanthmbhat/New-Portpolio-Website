import Eexcel from '../assets/Skill_Icon/Eexcel.png'
import PpowerBI from '../assets/Skill_Icon/PpowerBI.png'
import Rr from '../assets/Skill_Icon/Rr.png'
import Sspss from '../assets/Skill_Icon/Sspss.png'
import Ppython from '../assets/Skill_Icon/Ppython.png'
import Ddax from  '../assets/Skill_Icon/Ddax.png'
import Vvba from  '../assets/Skill_Icon/Vvba.png'
import Ccsharp from  '../assets/Skill_Icon/Ccsharp.png'
import Ccplusplus from  '../assets/Skill_Icon/Ccplussplus.png'
import Rreact from '../assets/Skill_Icon/Rreact.png'

const Skills = ( {darkMode}) => {
    const skills1 = [
        {name: 'Excel', icon: Eexcel, level: 95, color: 'from-green-500 to-emerald-500'},
        {name: 'PowerBI', icon: PpowerBI, level: 95, color: 'from-yellow-300 to-amber-300'},
        {name: 'R', icon: Rr, level: 90, color: 'from-blue-500 to-sky-500'},
        {name: 'SPSS', icon: Sspss, level: 85, color: 'from-sky-500 to-cyan-500'},
        {name: 'Python', icon: Ppython, level: 85, color: 'from-blue-500 to-sky-500'},
    ];

    const skills2 = [
        {name: 'DAX', icon: Ddax, level: 95, color: 'from-yellow-300 to-amber-300'},
        {name: 'VBA', icon: Vvba, level: 95, color: 'from-violet-500 to-purple-500'},
        {name: 'C#', icon: Ccsharp, level: 90, color: 'from-purple-700 to-violet-700'},
        {name: 'C++', icon: Ccplusplus, level: 90, color: 'from-blue-500 to-sky-500'},
        {name: 'React', icon: Rreact, level: 85, color: 'from-cyan-500 to-blue-500'},
    ];

    const stats = [
        {id: 1, name: 'Statistical modelling'},
        {id: 2, name: 'Designs of Experiments (DOE)'},
        {id: 3, name: 'Multivariate data analysis'},
        {id: 4, name: 'Quality control tools'},
        {id: 5, name: 'Operational research'},
        {id: 6, name: 'Regression Analysis'},
        {id: 7, name:  'Generalized Linear Model'},
        {id: 8, name: 'Decision Trees'},
    ];

  return (
    <section 
    id='skills'
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>

                    {/* Headding : My Skills */}
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        My <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                            }}>
                                Skills
                            </span>
                    </h1>

                    {/* Discription - My Skills */}
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563'}}>
                        A specialized toolkit of modern frameworks, languages, and cloud technologies leveraged to build scalable, high-performance web applications
                    </p>
                </div>

                {/* My Skill set 1 Heading*/}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Business Inteligence Tools :
                    </h1>
                </div>
                
                {/* My Skill set 1 */}
                <div className='flex flex-wrap -m-4'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skills1.map((skill1, index1) =>(
                            <div
                        key={index1}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index1 * 100}`}>
                            <div
                            style={{
                                background: darkMode
                                ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                                : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='h-full p-6 rounded-2xl border hover:border-blue-500/50 transition-all hover:translate--y-2 group duration-300 hover:shadow-[0_0_30px_rgb(59, 130, 240,0.15)]'>
                                <div className='flex items-center mb-6'>
                                    <div style={{
                                        background: darkMode
                                         ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                                        : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                                         }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={skill1.icon}
                                            alt={skill1.name}
                                            className='w-full h-full object-contain '/>
                                    </div>
                                    <h3 className='text-2xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skill1.name}
                                    </h3>
                                </div>
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                    style={{
                                        color: darkMode ? '#dad5db' : '#6b7280'
                                        }}>
                                            Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                        className='font-bold'>
                                            {skill1.level}%
                                        </span>
                                </div>
                                <div className='w-full rounded-full h-3 overflow-hidden'
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                        }}>
                                            <div className={`h-full rounded-full bg-linear-to-r ${skill1.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill1.level}%`}}>
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

                {/* My Skill set 2 Heading*/}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Data Analysis & Modelling Tools :
                    </h1>
                </div>

                {/* My Skill Set-2 */}
                <div className='flex flex-wrap -m-4 mt-2'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        {skills2.map((skill2, index2) =>(
                            <div
                        key={index2}
                        className='p-4 lg:w-1/5 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index2 * 100}`}>
                            <div
                            style={{
                                background: darkMode
                                ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                                : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='h-full p-6 rounded-2xl border hover:border-blue-500/50 transition-all hover:translate--y-2 group duration-300 hover:shadow-[0_0_30px_rgb(59, 130, 246,0.15)]'>
                                <div className='flex items-center mb-6'>
                                    <div style={{
                                        background: darkMode
                                         ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                                        : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                                         }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <img src={skill2.icon}
                                            alt={skill2.name}
                                            className='w-full h-full object-contain'/>
                                    </div>
                                    <h3 className='text-2xl font-bold ml-4'
                                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                                        {skill2.name}
                                    </h3>
                                </div>
                                <div className='mb-2 flex justify-between items-center '>
                                    <span className='font-medium'
                                    style={{
                                        color: darkMode ? '#dad5db' : '#6b7280'
                                        }}>
                                            Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                                            WebkitBackgroundClip:'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                        className='font-bold'>
                                            {skill2.level}%
                                        </span>
                                </div>
                                <div className='w-full rounded-full h-3 overflow-hidden'
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                        }}>
                                            <div className={`h-full rounded-full bg-linear-to-r ${skill2.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill2.level}%`}}>
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

                {/* Statistical Skills Heading*/}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Statistical Skills :
                    </h1>
                </div>

                {/* Statistical Skills*/}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                    {stats.map((itm, idx) => (
                        <span
                            key={idx}
                            style={{
                                // backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                               border: darkMode ? '2px solid #3b82f6' : '2px solid #06b6d4',
                                color: darkMode ? '#d1d5db' : '#4b5563'}}
                            className='px-2 py-1 text-xl rounded-full'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            {itm.name}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
};

export default Skills