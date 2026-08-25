import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Jsx_Files/Header";
import Hero from "./components/Jsx_Files/Hero";
import About from "./components/Jsx_Files/About";
import Skills from "./components/Jsx_Files/Skills";
import Project from "./components/Jsx_Files/Project";
import Contact from "./components/Jsx_Files/Contact";
import Footer from "./components/Jsx_Files/Footer";
import Expirience from "./components/Jsx_Files/Expirience";
import Education from "./components/Jsx_Files/Education";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        document.documentElement.classList.add("dark");
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;

            document.documentElement.classList.toggle(
                "dark",
                newMode
            );

            return newMode;
        });
    };

    return (
        <div
            className={
                darkMode
                    ? "bg-[#0f182b] min-h-screen"
                    : "bg-[#d6e8ee] min-h-screen"
            }
        >

            {/* ================= HEADER ================= */}

            <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            {/* ================= ALL SECTIONS ================= */}

            <main>

                <section
                    id="home"
                    className="scroll-mt-28"
                >
                    <Hero darkMode={darkMode} />
                </section>

                <section
                    id="about"
                    className="scroll-mt-28"
                >
                    <About darkMode={darkMode} />
                </section>

                <section
                    id="expirience"
                    className="scroll-mt-28"
                >
                    <Expirience darkMode={darkMode} />
                </section>

                <section
                    id="skills"
                    className="scroll-mt-28"
                >
                    <Skills darkMode={darkMode} />
                </section>

                <section
                    id="education"
                    className="scroll-mt-28"
                >
                    <Education darkMode={darkMode} />
                </section>

                <section
                    id="projects"
                    className="scroll-mt-28"
                >
                    <Project darkMode={darkMode} />
                </section>

                <section
                    id="contact"
                    className="scroll-mt-28"
                >
                    <Contact darkMode={darkMode} />
                </section>

            </main>

            <Footer darkMode={darkMode} />

        </div>
    );
};

export default App;