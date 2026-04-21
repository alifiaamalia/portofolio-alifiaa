import { motion } from "framer-motion";

const projects = [
  {
    title: "Cafe Sales Dashboard",
    description:
      "An interactive dashboard for a local cafe — daily revenue, top items, and quiet-hour heatmaps.",
    tools: ["Python", "Pandas", "Streamlit"],
  },
  {
    title: "Student Mood Classifier",
    description:
      "A small ML model that predicts student stress levels from sleep, study hours, and screen time.",
    tools: ["Scikit-learn", "Python", "React"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selected Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Small things, actually finished. A handful of recent builds across
            data, ML, and cloud. Click through for live demos and source —
            feedback always welcome.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-gray-50 shadow hover:shadow-xl transition"
            >

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* LINKS (placeholder dulu) */}
              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-orange-500 hover:underline"
                >
                  Live Demo →
                </a>

                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Source
                </a>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}