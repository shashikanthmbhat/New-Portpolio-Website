import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ChartBarIcon } from '@heroicons/react/24/solid'

const Footer = ({ darkMode }) => {
    const currentYr =new Date().getFullYear();

  return (
    <footer
    style={{
        background : darkMode ? 'linear-linear(to bottom, #000000, #111827)' : 'linear-linear(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
        }}
        className="border-t">
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left side */}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2 text-cyan-500 dark:text-blue-500">
                            Shashikanth Bhat
                        </h3>
                        <p className="text-sm"
                        style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                            Statistician & PowerBI Analyst
                        </p>
                    </div>

                    {/* Center side */}
                    <div className="flex gap-4">
                        <div className="mt-8">
                            {/* headding-follow Me */}
                            <h4 className="text-lg font-bold mb-2"
                            style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                Follw Me:
                            </h4>

                            {/* Icons */}
                            <div className="flex gap-4">
                                <a href="#"
                                className="p-3 rounded-xl hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                style={{
                                    color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)',
                                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                                    border: darkMode ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(6, 182, 212, 0.4)'
                                    }}>
                                    <FaGithub className="w-7 h-7"/>
                                </a>

                                <a href="#"
                                className="p-3 rounded-xl hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                style={{
                                    color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)',
                                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                                    border: darkMode ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(6, 182, 212, 0.4)'
                                    }}>
                                        <FaLinkedinIn className="w-7 h-7"/>
                                </a>

                                <a href="#"
                                className="p-3 rounded-xl hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                style={{
                                    color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)',
                                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                                    border: darkMode ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(6, 182, 212, 0.4)'
                                    }}>
                                        <FaYoutube className="w-7 h-7"/>
                                </a>

                                <a href="#"
                                className="p-3 rounded-xl hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                style={{
                                    color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)',
                                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                                    border: darkMode ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(6, 182, 212, 0.4)'
                                    }}>
                                        <FaInstagram className="w-7 h-7"/>
                                </a>

                                <a href="#"
                                className="p-3 rounded-xl hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] transition-all"
                                style={{
                                    color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)',
                                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                                    border: darkMode ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(6, 182, 212, 0.4)'
                                    }}>
                                        <ChartBarIcon className="w-7 h-7"/>
                                </a>   
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="text-center">
                        <p className="flex items-center justify-end gap-1 text-cyan-500 dark:text-blue-500">
                            Phone : <span className="text-[#6b7280] dark:text-[#9ca3af]"> +91 9886226207</span>
                        </p>
                        <p className="flex items-center justify-end gap-1 text-cyan-500 dark:text-blue-500">
                            Email : <span className="text-[#6b7280] dark:text-[#9ca3af]"> shashikanthmbhat@gmail.com</span>
                        </p>
                        <p className="flex items-center justify-end gap-1 text-cyan-500 dark:text-blue-500">
                            LinkedIn : <span className="text-[#6b7280] dark:text-[#9ca3af]"> Shashikanthm Bhat</span>
                        </p>   
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer