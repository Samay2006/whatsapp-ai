import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Cog, Cloud, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";


 

  // const [darkMode, setDarkMode] = useState(
  //   localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  // );

  // Apply dark class + save preference
 
function Theam(){
   const [darkMode, setDarkMode] = useState("light");

 useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

    return (
      <div>
      <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        {/* ===== Navbar with Theme Toggle ===== */}
        <header className="flex justify-end p-4">
          <motion.button
          value={darkMode}
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => setDarkMode(e.target.value)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500"
          >
            {darkMode ? (
              <>
                <Sun className="w-5 h-5" /> Light
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" /> Dark
              </>
            )}
          </motion.button>
        </header>
        </div>
        </div>
        )}