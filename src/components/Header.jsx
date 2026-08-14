import { Moon, Sun, Menu, X, Dot } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBluesky } from "react-icons/fa6";

const Header = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Expirience', link: '#expirience' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' }
    ];

    const colors = darkMode ? {
        navBg: 'bg-gray-900/80',
        textSecondary: 'text-gray-300',
        textActive: 'text-blue-400',
        indicator: 'from-blue-500 to-cyan-500',
        button: 'from-blue-500 to-cyan-500',
    } : {
        navBg: 'bg-white/80',
        textSecondary: 'text-gray-800',
        textActive: 'text-blue-600',
        indicator: 'from-blue-500 to-cyan-500',
        button: 'from-blue-500 to-cyan-500',
    };

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-50 w-fit z-50 flex justify-center p-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`w-full max-w-7xl px-6 py-3 rounded-2xl backdrop-blur-md ${colors.navBg}`}
            >
                {/* GRID CONTAINER */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-8">
                    
                    {/* GRID 1: LOGO */}
                    <div className="flex items-center">
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 shrink-0"
                        >
                            <FaBluesky className="text-blue-500 text-xl" />
                            <span className="text-2xl font-bold text-blue-500 flex items-center">
                                Shashi <Dot className="mt-1" />
                            </span>
                        </motion.a>
                    </div>

                    {/* GRID 2: NAVIGATION & ACTIONS */}
                    <div className="flex items-center justify-end space-x-8">
                        {/* Desktop Nav Items */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className="relative py-1"
                                >
                                    <motion.span
                                        className={`font-medium transition-colors ${
                                            activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary
                                        } hover:text-blue-500`}
                                    >
                                        {item.name}
                                    </motion.span>
                                    {activeSection === item.name.toLowerCase() && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${colors.indicator} rounded-full`}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Buttons Group */}
                        <div className="flex items-center space-x-4">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                            >
                                
                                {darkMode ? <Sun className="w-5 h-5 text-blue-500" /> : <Moon className="w-5 h-5 text-blue-500" />}
                            </motion.button>

                            <motion.a
                                href="#contact"
                                className={`hidden lg:block px-6 py-2 font-semibold rounded-xl bg-linear-to-r ${colors.button} text-white`}
                            >
                                Hire Me
                            </motion.a>

                            {/* Mobile Menu Toggle */}
                            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className={darkMode ? "text-white" : "text-black"} /> : <Menu className={darkMode ? "text-white" : "text-black"} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (unchanged logic) */}
                
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 overflow-hidden"
                        >
                            {navItems.map((item) => (
                                <a key={item.name} href={item.link} onClick={() => handleNavClick(item.name)}
                                   className={`block py-3 px-4 rounded-lg mb-1 ${activeSection === item.name.toLowerCase() ? 'bg-blue-500/10 text-blue-500' : colors.textSecondary}`}>
                                    {item.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                
            </motion.nav>
        </header>
    );
};

export default Header;
