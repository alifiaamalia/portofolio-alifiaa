import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#E8D8C4] px-6 py-24 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-white/40 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#C7B7A3]/50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* BADGE */}
          <div className="inline-block bg-[#561C24]/10 text-[#561C24] px-4 py-2 rounded-full text-sm mb-6">
            Open to Work • System Analyst / Data Analyst
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#561C24] leading-tight">
            I'm Alifia <br />
            <span className="text-[#6D2932]">System Analyst & Data Enthusiast</span>
          </h1>

          {/* DESC */}
          <p className="mt-6 text-base md:text-lg text-[#6D2932]/80 max-w-lg leading-relaxed">
            I’m Alifia — a System Analyst with a strong foundation in 
            <span className="font-semibold text-[#561C24]"> data, AI, and cloud computing</span>.
            Passionate about transforming requirements into scalable solutions.
          </p>

          {/* 🔥 SKILL TAGS */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Python", "SQL", "Machine Learning", "GCP", "System Design"].map((skill, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-white/60 rounded-full text-[#561C24]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/cv-alifia.pdf"
              download
              className="bg-[#561C24] text-white px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 shadow hover:scale-105 transition"
            >
              <FiDownload /> Download CV
            </a>

            <a
              href="#contact"
              className="border border-[#561C24] text-[#561C24] px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 hover:bg-[#561C24]/10 transition"
            >
              <FiMail /> Contact Me
            </a>

          </div>

          {/* 🔥 MINI STATS */}
          <div className="mt-12 flex gap-10 text-[#561C24]">
            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-xs text-[#6D2932]">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold">3+</p>
              <p className="text-xs text-[#6D2932]">Domains</p>
            </div>
            <div>
              <p className="text-2xl font-bold">∞</p>
              <p className="text-xs text-[#6D2932]">Learning</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mt-10 md:mt-0 relative"
        >

          {/* glow belakang foto */}
          <div className="absolute w-72 h-72 bg-[#C7B7A3]/40 blur-3xl rounded-full"></div>

          <img
            src="/alifia.jpeg"
            alt="Alifia"
            className="relative w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
          />

        </motion.div>

      </div>
    </section>
  );
}