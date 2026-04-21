import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/40 dark:bg-gray-900/40 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* logo */}
        <h1 className="font-bold text-orange-500 text-xl">
         Portofolio Alifia.
        </h1>

        {/* menu */}
        <div className="hidden md:flex gap-8 ml-auto mr-10 text-gray-500">
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#skills" className="hover:text-orange-500 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-orange-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* toggle dark */}
        <button
          onClick={() => setDark(!dark)}
          className="text-xl"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}