import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Cog, Cloud, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  function move() {
    navigate("/home");
  }

   const [darkMode, setDarkMode] = useState("light");
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  // );

  // Apply dark class + save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const steps = [
    {
      id: 1,
      icon: <Cog className="w-10 h-10 text-green-500" />,
      title: "Connect WhatsApp",
      desc: "Securely link your WhatsApp Business API account to our platform in minutes.",
    },
    {
      id: 2,
      icon: <Cloud className="w-10 h-10 text-green-500" />,
      title: "Configure AI Assistant",
      desc: "Customize your AI chatbot with industry-specific knowledge and response flows.",
    },
    {
      id: 3,
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "Launch & Monitor",
      desc: "Go live with your AI assistant and track performance with real-time analytics.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* ===== Navbar with Theme Toggle ===== */}
      <header className="flex justify-end p-4">
        <motion.button
        value={darkMode}
          aria-label="Toggle dark mode"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
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

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-11/12 mx-auto py-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-500">
            AI-Powered WhatsApp Assistant <br /> for Your Business
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg transition-colors duration-500">
            Automate conversations, provide instant support, and boost
            engagement with ChatBoost AI.
          </p>
          <motion.button
            onClick={move}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-colors duration-500"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center mb-10 md:mb-0"
        >
          <img
            src="src/IMG/Selection.png"
            alt="AI Assistant"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ===== Steps Section ===== */}
      <section className="flex flex-col items-center text-center py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500"
        >
          Seamless Integration, Simple Setup
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-500"
        >
          Get started with ChatBoost AI in just a few simple steps.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-11/12 md:w-4/5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-colors duration-500"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900 mb-4 transition-colors duration-500">
                {step.icon}
              </div>
              <span className="text-green-600 font-medium mb-1">
                Step {step.id}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
