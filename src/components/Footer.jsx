import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#E8D8C4]/70 backdrop-blur-xl border-t border-white/30 py-10">

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
            <h2 className="text-lg font-bold text-[#561C24]">
              Alifia.
            </h2>
            <p className="text-[#6D2932]/70 text-sm mt-1">
              Data-driven systems • AI • Cloud
            </p>
          </div>

          {/* MIDDLE LINKS */}
          <div className="flex gap-6 text-sm text-[#6D2932]/70">

            <a href="#about" className="hover:text-[#561C24] transition">
              About
            </a>

            <a href="#skills" className="hover:text-[#561C24] transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-[#561C24] transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-[#561C24] transition">
              Contact
            </a>

          </div>

          {/* RIGHT SOCIAL */}
          <div className="flex gap-4">

  {/* GITHUB */}
  <a
    href="https://github.com/alifiaamalia"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#561C24]/20 text-[#561C24] hover:bg-[#561C24] hover:text-white transition"
  >
    <FiGithub />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/alifia-amalia-azzara-4145b3339"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#561C24]/20 text-[#561C24] hover:bg-[#561C24] hover:text-white transition"
  >
    <FiLinkedin />
  </a>

  {/* EMAIL */}
  <a
    href="mailto:alifiaazzara1193@email.com"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#561C24]/20 text-[#561C24] hover:bg-[#561C24] hover:text-white transition"
  >
    <FiMail />
  </a>

</div>
        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-10 text-center text-[#6D2932]/50 text-xs">
          © {new Date().getFullYear()} Alifia. All rights reserved.
        </div>

      </div>

    </footer>
  );
}