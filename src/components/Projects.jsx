import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    title: "Cafe Sales Dashboard",
    description:
      "Dashboard interaktif untuk analisis penjualan cafe: revenue, top product, jam ramai.",
    tools: ["Python", "Pandas", "Streamlit"],
    image: "/project1.jpg",
    category: "Data",
  },
  {
    title: "Student Mood Classifier",
    description:
      "Model ML untuk prediksi tingkat stres mahasiswa berdasarkan aktivitas harian.",
    tools: ["Scikit-learn", "Python", "React"],
    image: "/project2.jpg",
    category: "ML",
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
            Small things, actually finished — Apple-style curated gallery.
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

              {/* CARD */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition bg-white">

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <motion.img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* glass overlay */}
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

                  {/* TAGS */}
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

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6"
            >
              <img
                src={selected.image}
                className="rounded-xl mb-4"
              />

              <h2 className="text-2xl font-bold text-[#561C24]">
                {selected.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {selected.description}
              </p>

              <button
                className="mt-6 bg-[#561C24] text-white px-5 py-2 rounded-full"
              >
                Visit Project →
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}