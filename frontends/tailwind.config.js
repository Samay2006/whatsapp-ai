/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ⬅️ Enable dark mode with a 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
