import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full flex justify-between p-4 bg-slate-100 dark:bg-neutral-800 ">
      <h1 className="text-4xl font-sans font-bold dark:text-zinc-200">Notes</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

export default Header;

const SunIcon = () => {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={transition}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

const MoonIcon = () => {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <motion.path
        animate={{ pathLength: 1.5, scale: 1.2 }}
        transition={transition}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};
