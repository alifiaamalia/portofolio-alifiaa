import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState("about");

  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);

      if (current > lastScroll && current > 120) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const linkClass = (id) =>
    `relative text-sm font-medium transition-all duration-300 ${
      active === id
        ? "text-[#561C24]"
        : "text-[#561C24]/50 hover:text-[#561C24]"
    }`;

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-500
        ${hide ? "-top-24" : "top-3"}

        /* 🍎 APPLE GLASS STYLE */
        ${
          scrolled
            ? "bg-[#E8D8C4]/40 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "bg-transparent"
        }
      `}
    >
      {/* inner floating container */}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between rounded-full">

        {/* LOGO */}
        <h1 className="font-semibold text-[#561C24] text-lg tracking-tight">
          Portfolio Alifia
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 relative">

          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* 🍎 sliding active indicator */}
          <span
            className="absolute bottom-[-6px] h-[2px] bg-[#6D2932] transition-all duration-300 rounded-full"
            style={{
              width: "60px",
              transform: `translateX(${
                ["about", "skills", "projects", "contact"].indexOf(active) * 80
              }px)`,
              opacity: 0.7,
            }}
          />
        </div>

        {/* TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="text-xl text-[#561C24] hover:scale-110 transition"
        >
          {dark ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}