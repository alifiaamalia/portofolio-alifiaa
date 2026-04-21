import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-900">
              Alifia.
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Building small things, learning every day.
            </p>
          </div>

          {/* MIDDLE LINKS */}
          <div className="flex gap-6 text-sm text-gray-500">
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

          {/* RIGHT SOCIAL */}
          <div className="flex gap-4 text-gray-500 text-sm">

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Email
            </a>

          </div>

        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-10 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Alifia. All rights reserved.
        </div>

      </div>

    </footer>
  );
}