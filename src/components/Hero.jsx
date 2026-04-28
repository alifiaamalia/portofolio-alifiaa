import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#E8D8C4]">

      {/* BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-white/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-white/30 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* OPEN TO WORK */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-[#561C24]/90 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-md"
          >
            🚀 Open to Work — System Analyst / Data Analyst
          </motion.div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#561C24]">
            Hi, I'm <br />
            <span className="text-[#6D2932]">Alifia</span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-5 text-[#6D2932]/90 max-w-md text-lg leading-relaxed">
            System Analyst with a strong foundation in Data Engineering and AI,
            focusing on building efficient, data-driven systems.
          </p>

          {/* SUB TEXT */}
          <p className="mt-3 text-[#6D2932]/70 max-w-md text-sm">
            Experienced in analyzing system requirements, designing data workflows, 
            and developing intelligent solutions using Machine Learning and Cloud Technology.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="/cv-alifia.pdf"
              download
              className="bg-[#561C24] hover:bg-[#6D2932] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium transition"
            >
              <FiDownload />
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white text-[#561C24] border border-white px-6 py-3 rounded-full shadow flex items-center gap-2 hover:bg-[#f5eee6] transition"
            >
              <FiMail />
              Contact Me
            </motion.a>

          </div>

          {/* STATS */}
          <div className="mt-14 flex gap-10 text-[#6D2932]">
            <div>
              <p className="text-3xl font-bold text-[#561C24]">6+</p>
              <p className="text-sm text-[#6D2932]/70">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#561C24]">3+</p>
              <p className="text-sm text-[#6D2932]/70">Domains</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#561C24]">Data</p>
              <p className="text-sm text-[#6D2932]/70">Driven Systems</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >

          <div className="absolute inset-0 bg-[#C7B7A3]/30 blur-3xl rounded-full" />

          <img
            src="/alifia.jpeg"
            alt="Alifia"
            className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white"
          />

        </motion.div>

      </div>
    </section>
  );
}