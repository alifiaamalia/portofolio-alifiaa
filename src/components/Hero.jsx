import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* BACKGROUND BLOBS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-200 rounded-full blur-3xl opacity-40"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-pink-200 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow text-sm mb-6">
            ✨ Available for collaboration
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
            Hi, I'm <br />
            <span className="text-orange-500">Alifia</span>
          </h1>

          {/* description */}
          <p className="mt-5 text-gray-600 max-w-md text-lg leading-relaxed">
            Data Enthusiast • AI & Cloud Learner. I enjoy building meaningful and simple digital products.
          </p>

          {/* buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow flex items-center gap-2 hover:bg-gray-50 transition"
            >
              <FiMail />
              Contact Me
            </motion.button>

          </div>

          {/* stats */}
          <div className="mt-14 flex gap-10">

            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <p className="text-3xl font-bold">3+</p>
              <p className="text-gray-500 text-sm">Domains</p>
            </div>

            <div>
              <p className="text-3xl font-bold">∞</p>
              <p className="text-gray-500 text-sm">Curiosity</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* floating badge kiri */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-0 top-16 bg-white shadow-lg rounded-full px-4 py-2 text-sm flex items-center gap-2"
          >
            🐍 Python
          </motion.div>

          {/* floating badge kanan */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-0 bottom-16 bg-green-100 text-green-700 shadow-lg rounded-full px-4 py-2 text-sm"
          >
            Learning ML →
          </motion.div>

          {/* image card */}
          <div className="p-6 bg-white rounded-full shadow-2xl hover:scale-105 transition duration-300">

            <img
              src="/alifia.jpeg"
              alt="Alifia"
              className="w-72 h-72 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}