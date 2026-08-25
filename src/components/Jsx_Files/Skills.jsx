import {
    skillsBI,
    skillsDM,
    skillsPL,
    skillsDB,
    stats,
    headerSkills,
} from "../Js_Files/Skillsdata";

const Skills = ({ darkMode }) => {

    return (
        <section
            id="skills"
            className="py-14 relative overflow-hidden"
        >
            <div className='py-14 relative overflow-hidden'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ===================== Header ===================== */}
                    <div
                        className="text-center mb-10 sm:mb-10 md:mb-12"
                        data-aos="fade-up"
                    >
                        <h2 className={darkMode ? "style1-dark" : "style1-light"}>
                            {headerSkills.title1}
                            <span className='style2'>
                                {" "}
                                {headerSkills.title2}
                            </span>
                        </h2>

                        <p
                            className="text-base sm:text-lg md:text-xl"
                            style={{
                                color: darkMode ? "#d1d5db" : "#6b7280",
                            }}
                        >
                            {headerSkills.description}
                        </p>
                    </div>


                    {/* =====================================================
                        Business Intelligence
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-5 sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Business Intelligence Tools
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {skillsBI.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`group rounded-xl border p-4 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}
                                >
                                    {/* Icon */}
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={
                                                darkMode
                                                    ? skill.icon_Dark
                                                    : skill.icon_Light
                                            }
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Skill Name */}
                                    <h4
                                        className="text-center text-xl font-semibold mb-3"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "black",
                                        }}
                                    >
                                        {skill.name}
                                    </h4>
                                    

                                    {/* Progress Bar */}
                                    <div
                                        className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode
                                                ? "bg-gray-700"
                                                : "bg-gray-200"
                                        }`}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? '#0ea5e9' : '#06b6d4'
                                            }}
                                        />
                                    </div>

                                    {/* Proficieny & Percentage */}
                                    <div className='mb-2 flex mt-3 justify-between items-center '>
                                        <span className='font-medium'
                                            style={{ color: darkMode ? 'white' : 'black'}}>
                                                Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)', WebkitBackgroundClip:'text', backgroundClip: 'text', color: 'transparent'}}
                                            className='font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* =====================================================
                        Data Analysis & Modelling
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-5 sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Data Analysis & Modelling Tools
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {skillsDM.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`group rounded-xl border p-4 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}
                                >
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={
                                                darkMode
                                                    ? skill.icon_Dark
                                                    : skill.icon_Light
                                            }
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <h4
                                        className="text-center text-xl font-semibold mb-3"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "black",
                                        }}
                                    >
                                        {skill.name}
                                    </h4>
                                    

                                    <div
                                        className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode
                                                ? "bg-gray-700"
                                                : "bg-gray-200"
                                        }`}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? '#0ea5e9' : '#06b6d4',
                                            }}
                                        />
                                    </div>

                                    {/* Proficieny & Percentage */}
                                    <div className='mb-2 flex mt-3 justify-between items-center '>
                                        <span className='font-medium'
                                            style={{ color: darkMode ? 'white' : 'black'}}>
                                                Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)', WebkitBackgroundClip:'text', backgroundClip: 'text', color: 'transparent'}}
                                            className='font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* =====================================================
                        Programming Languages
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-5 sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Programming Languages
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {skillsPL.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`group rounded-xl border p-4 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}
                                >
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={
                                                darkMode
                                                    ? skill.icon_Dark
                                                    : skill.icon_Light
                                            }
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <h4
                                        className="text-center font-semibold mb-3"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "black",
                                        }}
                                    >
                                        {skill.name}
                                    </h4>

                                    <div
                                        className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode
                                                ? "bg-gray-700"
                                                : "bg-gray-200"
                                        }`}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? '#0ea5e9' : '#06b6d4',
                                            }}
                                        />
                                    </div>

                                    {/* Proficieny & Percentage */}
                                    <div className='mb-2 flex mt-3 justify-between items-center '>
                                        <span className='font-medium'
                                            style={{ color: darkMode ? 'white' : 'black'}}>
                                                Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)', WebkitBackgroundClip:'text', backgroundClip: 'text', color: 'transparent'}}
                                            className='font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* =====================================================
                        Database Softwares
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-5 sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Database Softwares
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {skillsDB.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`group rounded-xl border p-4 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}
                                >
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={
                                                darkMode
                                                    ? skill.icon_Dark
                                                    : skill.icon_Light
                                            }
                                            alt={skill.name}
                                            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <h4
                                        className="text-center font-semibold mb-3"
                                        style={{
                                            color: darkMode
                                                ? "white"
                                                : "black",
                                        }}
                                    >
                                        {skill.name}
                                    </h4>

                                    <div
                                        className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode
                                                ? "bg-gray-700"
                                                : "bg-gray-200"
                                        }`}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? '#0ea5e9' : '#06b6d4',
                                            }}
                                        />
                                    </div>

                                    {/* Proficieny & Percentage */}
                                    <div className='mb-2 flex mt-3 justify-between items-center '>
                                        <span className='font-medium'
                                            style={{ color: darkMode ? 'white' : 'black'}}>
                                                Proficiency
                                        </span>
                                        <span style={{background: 'linear-gradient(to right, #3b82f6, #06b6f4)', WebkitBackgroundClip:'text', backgroundClip: 'text', color: 'transparent'}}
                                            className='font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* =====================================================
                        Statistical Skills
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-4  sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Statistical Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className={`px-2 py-2 items-center rounded-lg border transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-blue-500/30 text-gray-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10"
                                            : "bg-white border-sky-500/30 text-gray-700 hover:border-sky-500 hover:text-black hover:bg-sky-500/10"
                                    }`}
                                >
                                    {stat.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;