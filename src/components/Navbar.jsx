import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["about", "skills", "experience", "projects", "contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#E8D8C4]/80 backdrop-blur px-6 py-4">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="font-bold text-[#561C24]">Alifia</h1>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <a key={item} href={`#${item}`} className="text-[#561C24]">
              {item}
            </a>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl text-[#561C24]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow">

          {menu.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="text-[#561C24]"
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}