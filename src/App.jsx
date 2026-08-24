import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from "./components/Header"
import Hero from "./components/Jsx_Files/Hero"
import About from "./components/Jsx_Files/About"
import Skills from "./components/Jsx_Files/Skills"
import Project from "./components/Project"
import Contact from "./components/Jsx_Files/Contact"
import Footer from "./components/Jsx_Files/Footer"
import Expirience from "./components/Jsx_Files/Expirience"
import Education from "./components/Jsx_Files/Education"

import Navbar from "./components/Old/Navbar"
import Ggg from "./components/Old/Ggg"
import Sksss from "./components/Old/Sksss"
import Ddkk from "./components/Old/Ddkk"

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
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Expirience darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Education darkMode={darkMode}/>
      {/* <Sksss darkMode={darkMode}/> */}
      {/* <Ddkk darkMode={darkMode}/> */}
      {/* <Ggg darkMode={darkMode}/> */}
      <Project darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/> 
    </div>
  )
}

export default App