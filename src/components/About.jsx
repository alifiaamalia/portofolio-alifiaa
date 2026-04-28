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

          <div className="inline-flex items-center gap-2 bg-[#561C24]/10 px-4 py-2 rounded-full text-sm text-[#561C24] mb-6">
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#561C24] leading-tight">
            System Analyst & <br />
            Data Enthusiast
          </h2>

          {/* SIMPLE VERSION */}
          <p className="mt-6 text-[#6D2932]/80 leading-relaxed">
            I’m Alifia, a fresh graduate in Informatics focused on system analysis and data engineering.
            I enjoy turning complex requirements into structured systems and data-driven solutions using Python and SQL.
          </p>

          <p className="mt-4 text-[#6D2932]/80 leading-relaxed">
            I have experience in building web systems, ETL pipelines, and working on collaborative real-world projects.
            Currently growing in system design, cloud computing, and modern data technologies.
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
              desc: "Requirement gathering, UML, and workflow design."
            },
            {
              title: "Data Engineering",
              desc: "ETL pipelines, SQL, and data processing."
            },
            {
              title: "Projects",
              desc: "Web systems & data-driven applications."
            },
            {
              title: "Cloud & Backend",
              desc: "GCP, backend systems, scalable solutions."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                p-6 rounded-2xl
                bg-white
                border border-gray-200
                shadow-sm hover:shadow-md
                transition
              "
            >
              <h3 className="font-semibold text-[#561C24]">
                {item.title}
              </h3>

              <p className="text-[#6D2932]/80 mt-1 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}