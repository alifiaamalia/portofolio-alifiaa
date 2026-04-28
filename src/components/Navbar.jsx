import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const menu = ["about", "skills", "experience", "projects", "contact"];

  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // indicator
  useEffect(() => {
    const index = menu.indexOf(active);
    const el = itemRefs.current[index];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled
          ? "top-0 bg-[#E8D8C4]/80 backdrop-blur border-b border-white/30 shadow-sm"
          : "top-3 bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-semibold text-[#561C24]">
          Alifia
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 relative">

          {menu.map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => setActive(item)}
              className={`text-sm transition ${
                active === item
                  ? "font-semibold text-[#561C24]"
                  : "text-[#561C24]/60 hover:text-[#561C24]"
              }`}
            >
              {item}
            </a>
          ))}

          {/* underline */}
          <span
            className="absolute bottom-[-6px] h-[2px] bg-[#561C24] transition-all duration-300"
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
          />
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl text-[#561C24]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE */}
      {open && (
        <div className="md:hidden mx-6 mt-2 bg-white rounded-xl shadow p-4 flex flex-col gap-4">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`${
                active === item
                  ? "font-semibold text-[#561C24]"
                  : "text-[#561C24]/70"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}