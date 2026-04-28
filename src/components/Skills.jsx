import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiTensorflow,
  SiGooglecloud,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiJira,
  SiConfluence,
  SiTrello,
  SiFigma,
} from "react-icons/si";

import {
  FiLayers,
  FiGrid,
  FiPenTool,
  FiFileText,
} from "react-icons/fi";

export default function Skills() {
  const systemSkills = [
    { name: "Lucidchart / Draw.io", icon: <FiGrid /> },
    { name: "Microsoft Visio", icon: <FiLayers /> },
    { name: "UML & DFD Modeling", icon: <FiFileText /> },
    { name: "Wireframing (Balsamiq)", icon: <FiPenTool /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Trello", icon: <SiTrello /> },
    { name: "Confluence", icon: <SiConfluence /> },
  ];

  const dataSkills = [
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Machine Learning", icon: <SiTensorflow /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Backend API", icon: <SiNodedotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#E8D8C4] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#561C24]">
            Skills
          </h2>
          <p className="text-[#6D2932]/80 mt-3">
            System analysis tools and data technologies I use in real-world projects
          </p>
        </motion.div>

        {/* SYSTEM ANALYST */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#561C24] mb-6">
            System Analysis
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {systemSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  p-5 rounded-xl text-center
                  bg-white/60 backdrop-blur
                  border border-white/40
                  shadow-sm hover:shadow-md
                  transition
                "
              >
                <div className="text-3xl text-[#561C24] mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <p className="text-sm text-[#561C24]">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DATA & DEVELOPMENT */}
        <div>
          <h3 className="text-xl font-semibold text-[#561C24] mb-6">
            Data & Development
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  p-5 rounded-xl text-center
                  bg-white/60 backdrop-blur
                  border border-white/40
                  shadow-sm hover:shadow-md
                  transition
                "
              >
                <div className="text-3xl text-[#561C24] mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <p className="text-sm text-[#561C24]">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}