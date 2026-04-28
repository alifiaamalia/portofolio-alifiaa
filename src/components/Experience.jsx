import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    title: "Scientific Publication & Data Assistant",
    role: "BPI - LPPM UAD ",
    period: "Feb 2025 — Mar 2026",
    link: "https://bpi.uad.ac.id/publication/",
    desc: [
      "Managed and optimized web-based research publication systems to ensure reliable data access and performance",
      "Structured and standardized academic datasets to improve data consistency and usability",
      "Analyzed and supported CMS workflows, enhancing content management efficiency",
      "Ensured data integrity, validation, and accurate information delivery across platforms",
    ],
  },
  {
    title: "EXC Studio",
    role: "System Analyst",
    period: "2023 — Present",
    link: "https://excstudio.com/",
    desc: [
      "Gathered and analyzed business requirements to define clear system specifications",
      "Designed system workflows, use case diagrams, and data flow diagrams (DFD)",
      "Collaborated with developers and designers to ensure alignment between business needs and technical implementation",
      "Worked on multiple projects in a team-based environment, simulating real-world SDLC processes",
    ],
  },
  {
    title: "Bangkit Academy 2024",
    role: "Cloud Computing Cohort",
    period: "Sep 2024 — Jan 2025",
    desc: [
      "Built and deployed cloud-based applications using Google Cloud Platform (GCP)",
      "Worked with backend systems and processed real-world datasets",
      "Collaborated in cross-functional teams to develop scalable and data-driven solutions",
    ],
  },
  {
    title: "Edufio Tutoring Institution — Yogyakarta",
    role: "Private Tutor (IT Fundamentals)",
    period: "Nov 2023 — Oct 2024",
    desc: [
      "Delivered structured IT learning sessions covering programming fundamentals and computational thinking",
      "Applied analytical and problem-solving approaches to improve student understanding",
      "Developed communication and adaptability skills in dynamic learning environments",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F9F6F2] py-24 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-[#561C24] mx-auto mb-6 rounded-full" />

          <h2 className="text-5xl font-bold text-[#561C24]">
            Experience
          </h2>

          <p className="text-gray-600 mt-4">
            Experience in system analysis, data processing, and real-world project development.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => exp.link && window.open(exp.link, "_blank")}
              className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition cursor-pointer ${
                exp.link ? "hover:scale-[1.02]" : ""
              }`}
            >

              {/* TITLE */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#561C24]">
                  {exp.title}
                </h3>

                {exp.link && (
                  <FiExternalLink className="text-gray-400 group-hover:text-[#561C24]" />
                )}
              </div>

              {/* ROLE */}
              <p className="text-sm text-gray-500 mt-1">
                {exp.role}
              </p>

              {/* PERIOD */}
              <p className="text-sm text-gray-400 mb-4">
                {exp.period}
              </p>

              {/* DESC */}
              <ul className="space-y-2">
                {exp.desc.map((d, i) => (
                  <li key={i} className="text-gray-600 text-sm leading-relaxed">
                    • {d}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#561C24] hover:underline"
                >
                  View Website
                  <FiExternalLink size={14} />
                </a>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}