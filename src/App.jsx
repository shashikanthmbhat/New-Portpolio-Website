import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Ggg from "./components/Ggg"
import Expirience from "./components/Expirience"
import Education from "./components/Education"
import Sksss from "./components/sksss"
import Ddkk from "./components/ddkk"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
          duration: 1000,
          once: false,
          offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };
  // Dark - #0f182b
  //light - #97cadb

  // className={
  //     darkMode
  //     ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
  //     : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
  //   }

  return (
    <div className={
      darkMode
      ? 'bg-[#0f182b] min-h-screen'
      : 'bg-[#d6e8ee] min-h-screen'
    }>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {/* <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> */}
      {/* <Hero darkMode={darkMode}/> */}
      <About darkMode={darkMode}/>
      <Expirience darkMode={darkMode}/>
      <Education darkMode={darkMode}/>
      {/* <Sksss darkMode={darkMode}/> */}
      {/* <Ddkk darkMode={darkMode}/> */}
      {/* <Skills darkMode={darkMode}/> */}
      {/* <Ggg darkMode={darkMode}/> */}
      {/* <Project darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/> */}
    </div>
  )
}

export default App