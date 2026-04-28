import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState("about");

  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const menu = ["about", "skills", "experience", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);
      setHide(current > 120);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const index = menu.indexOf(active);
    const el = itemRefs.current[index];

    if (el && menuRef.current) {
      const { offsetLeft, offsetWidth } = el;
      setIndicator({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [active]);

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
        ${
          scrolled
            ? "bg-[#E8D8C4]/40 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between rounded-full">

        {/* LOGO */}
        <h1 className="font-semibold text-[#561C24] text-lg tracking-tight">
          Portfolio Alifia
        </h1>

        {/* MENU */}
        <div
          ref={menuRef}
          className="hidden md:flex items-center gap-10 relative"
        >
          {menu.map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => setActive(item)}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* 🔥 INDICATOR FIX */}
          <span
            className="absolute bottom-[-6px] h-[2px] bg-[#6D2932] transition-all duration-300 rounded-full"
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
          />
        </div>

        {/* DARK MODE */}
        <button
          onClick={() => setDark(!dark)}
          className="text-xl text-[#561C24] hover:scale-110 transition"
        />
      </div>
    </nav>
  );
}