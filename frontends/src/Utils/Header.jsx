import React from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const navLinks = ["Home", "About", "Login", "Contact"]
const MotionNavLink = motion.create(NavLink)

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-indigo-600"
        >
          MyBrand
        </motion.h1>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
<MotionNavLink 
  key={link} 
  to={link==="Home" ? "/":`/${link.toLowerCase()}`}
    initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 + index * 0.1 }}
         whileHover={{ scale: 1.1, color: "#4f46e5" }}

         className={(isactive)=>{
isactive?"text-gray-700 hover":"text-indigo-600 font-medium transition-colors"
         }}
  
  >

{link}

</MotionNavLink>

            // <motion.a
            //   key={link}
            //   href={`#${link.toLowerCase()}`}
            //   initial={{ opacity: 0, y: -20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: 0.3 + index * 0.1 }}
            //   whileHover={{ scale: 1.1, color: "#4f46e5" }}
            //   className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            // >
            //   {link}
            // </motion.a>
          ))}
        </nav>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
        >
          Get Started
        </motion.button>
      </div>
    </motion.header>
  )
}
