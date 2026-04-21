import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#E8D8C4]">

      {/* SOFT GLOW BACKGROUND */}
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

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full border border-white text-sm mb-6 text-gray-700 shadow-sm"
          >
            ✨ Available for collaboration
          </motion.div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-black">
            Hi, I'm <br />
            <span className="text-gray-700">Alifia</span>
          </h1>

          {/* description */}
          <p className="mt-5 text-gray-600 max-w-md text-lg leading-relaxed">
            Data Enthusiast • AI & Cloud Learner. I enjoy building meaningful and simple digital products.
          </p>

          {/* buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            {/* PRIMARY */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium transition"
            >
              <FiDownload />
              Download CV
            </motion.button>

            {/* SECONDARY */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-700 border border-white px-6 py-3 rounded-full shadow flex items-center gap-2 hover:bg-gray-50 transition"
            >
              <FiMail />
              Contact Me
            </motion.button>

          </div>

          {/* stats */}
          <div className="mt-14 flex gap-10 text-gray-700">

            <motion.div whileHover={{ y: -3 }}>
              <p className="text-3xl font-bold text-black">5+</p>
              <p className="text-sm text-gray-500">Projects</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }}>
              <p className="text-3xl font-bold text-black">3+</p>
              <p className="text-sm text-gray-500">Domains</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }}>
              <p className="text-3xl font-bold text-black">∞</p>
              <p className="text-sm text-gray-500">Curiosity</p>
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >

          {/* FLOAT BADGE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-0 top-16 bg-white text-gray-700 shadow-lg rounded-full px-4 py-2 text-sm border border-white"
          >
            🐍 Python
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-0 bottom-16 bg-white text-gray-600 shadow-lg rounded-full px-4 py-2 text-sm border border-white"
          >
            Learning ML →
          </motion.div>

          {/* IMAGE WITH SOFT GLOW */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative p-6"
          >

            {/* glow */}
            <div className="absolute inset-0 bg-yellow-300/20 blur-3xl rounded-full" />

            {/* image */}
            <img
              src="/alifia.jpeg"
              alt="Alifia"
              className="relative w-72 h-72 object-cover rounded-full shadow-2xl"
            />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}