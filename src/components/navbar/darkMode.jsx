import React, { useState, useEffect } from 'react'
import darkButton  from '../../assets/website/dark-mode-button.png'
import lightButton  from '../../assets/website/light-mode-button.png'

const DarkMode = () => {
    const [mode, setMode] = useState(
      localStorage.length > 0 ? localStorage.getItem("mode") : ""
    );
  
    const element = document.documentElement; // html element
  
    useEffect(() => {
      if (mode === "dark") {
        element.classList.add("dark");
        localStorage.setItem("mode", "dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("mode", "light");
      }
    }, [mode]);
  
    return (
      <div className="relative">
        <img src={lightButton} alt="" onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 absolute right-0 z-10 
        ${ mode === "dark" ? "opacity-0" : "opacity-100" }`}/>

        <img src={darkButton} alt="" onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>  
      </div>
    );
  };

export default DarkMode