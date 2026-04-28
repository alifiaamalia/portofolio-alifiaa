import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    title: "BOTANI Winongo Asri",
    description:
      "Website resmi kelompok tani di Yogyakarta dengan fitur produk, eduwisata, galeri, dan blog pertanian modern.",
    tools: ["Web Development", "UI/UX", "Content Management"],
    image: "/botani.jpg",
    category: "Web",
    link: "https://botani.web.id/",
  },
  {
    title: "Himpunan Psikologi Yogyakarta",
    description:
      "Website organisasi profesional untuk komunikasi dan edukasi anggota.",
    tools: ["Web Development", "Information System"],
    image: "himpsi.jpg",
    category: "Web",
    link: "https://himpsidiy.or.id/",
  },
  {
    title: "Kongres HIMPSI XV",
    description:
      "Website resmi event nasional psikologi di Yogyakarta dengan informasi agenda lengkap.",
    tools: ["Web Development", "Event Platform"],
    image: "kongres.jpg",
    category: "Web",
    link: "https://kongresxvhimpsi.web.id/",
  },
  {
    title: "ECG Heartbeat Classification",
    description:
      "Model machine learning untuk klasifikasi detak jantung berbasis ECG untuk deteksi dini aritmia.",
    tools: ["Python", "Machine Learning", "LSTM", "Signal Processing"],
    image: "ecg.png",
    category: "ML",
    link: "https://github.com/alifiaamalia/ecg-data-pipeline",
  },
];

const filters = ["All", "ML", "Web", "Data"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-white py-28 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold text-[#561C24]">
            Selected Projects
          </h2>
          <p className="text-gray-600 mt-4">
            Small things, actually finished — curated portfolio.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === f
                  ? "bg-[#561C24] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filtered.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition bg-white">

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black group-hover:text-[#561C24]">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tools.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL APPLE STYLE */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-white/40 relative"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>

              {/* IMAGE */}
              <motion.img
                src={selected.image}
                className="rounded-2xl mb-4"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
              />

              {/* TITLE */}
              <h2 className="text-2xl font-bold text-[#561C24]">
                {selected.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-600 mt-2 leading-relaxed">
                {selected.description}
              </p>

              {/* BUTTON */}
              <div className="mt-6">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#561C24] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-medium shadow-md"
                  >
                    View Project →
                  </a>
                )}
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}