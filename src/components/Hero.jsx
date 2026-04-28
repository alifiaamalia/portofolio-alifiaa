import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#E8D8C4] px-6 py-20">

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="inline-block bg-[#561C24]/10 text-[#561C24] px-4 py-2 rounded-full text-xs mb-5">
            Open to Work • System Analyst / Data Analyst
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-[#561C24] leading-tight">
            Hi, I'm <br /> Alifia
          </h1>

          <p className="mt-4 text-sm md:text-lg text-[#6D2932]/80 max-w-md">
            System Analyst with a strong foundation in data, AI, and cloud computing.
            Passionate about building efficient and scalable systems.
          </p>

          {/* BUTTON */}
          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href="/cv-alifia.pdf"
              download
              className="bg-[#561C24] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2"
            >
              <FiDownload /> CV
            </a>

            <a
              href="#contact"
              className="border border-[#561C24] text-[#561C24] px-5 py-2 rounded-full text-sm flex items-center gap-2"
            >
              <FiMail /> Contact
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/alifia.jpeg"
            alt="Alifia"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}