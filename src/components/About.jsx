import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 mb-6 shadow-sm">
            About Me
          </div>

          {/* title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            System Analyst & <br />
            Data Enthusiast
          </h2>

          {/* text */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm Alifia — a fresh graduate in Informatics with a strong interest in system analysis and data engineering. I focus on translating business requirements into structured system workflows and building data-driven solutions using Python and SQL.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I have hands-on experience working on real-world projects, including developing web-based systems and building end-to-end ETL pipelines for data processing. I enjoy designing efficient systems, structuring data, and collaborating in team environments to deliver scalable solutions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Currently, I am focused on growing as a professional in system analysis and data engineering, continuously improving my skills in system design, cloud computing, and modern data technologies.
          </p>

        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >

          {[
            {
              title: "System Analysis",
              desc: "Requirement gathering, UML, DFD, and structured system workflow design."
            },
            {
              title: "Data Engineering",
              desc: "Building ETL pipelines, data processing, and SQL-based data management."
            },
            {
              title: "Real-World Projects",
              desc: "Experience in web systems and data-driven applications in team environments."
            },
            {
              title: "Cloud & Backend",
              desc: "Hands-on experience with GCP, backend systems, and scalable solutions."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                p-6 rounded-2xl
                bg-gray-50
                border border-gray-200
                shadow-sm hover:shadow-md
                transition
              "
            >
              <h3 className="font-semibold text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-1 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}