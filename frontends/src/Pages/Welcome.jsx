import React from "react";
import { motion } from "framer-motion";

function Welcome({ onStart }) {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-green-400 via-green-300 to-green-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10 bg-white rounded-3xl shadow-2xl max-w-2xl w-full"
      >
        {/* Logo */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="App Logo"
          className="h-24 w-24 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Welcome to WhatsApp Chat Automation
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Supercharge your WhatsApp with AI 🚀  
          Automate messages, respond instantly, and stay connected smarter!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => onStart("login")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={() => onStart("signup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-500 text-green-600 px-6 py-3 rounded-full shadow-lg hover:bg-green-50 transition"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-400">
          💡 Tip: Works best with AI-powered automation enabled
        </p>
      </motion.div>
    </div>
  );
}

export default Welcome;
