import { motion } from "framer-motion";

const skills = [
  { name: "Python", status: "Daily", level: 88 },
  { name: "SQL", status: "Comfortable", level: 80 },
  { name: "Machine Learning", status: "Learning", level: 70 },
  { name: "React", status: "Confident", level: 75 },
  { name: "Tailwind CSS", status: "Confident", level: 82 },
  { name: "Cloud (GCP basic)", status: "Exploring", level: 55 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-[#E8D8C4] py-24 relative overflow-hidden"
    >

      {/* HERO STYLE BACKGROUND BLOBS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#C7B7A3] rounded-full blur-3xl opacity-40"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-white/30 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-[#561C24]">
            Skills
          </h2>

          <p className="text-[#6D2932]/80 mt-4 max-w-md">
            What I work with — and how well, honestly.
          </p>

        </motion.div>

        {/* RIGHT SKILLS CARD (GLASS LIKE HERO CARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            p-6 rounded-[30px]
            bg-white/40 backdrop-blur-xl
            border border-white/40
            shadow-2xl
          "
        >

          {skills.map((skill, index) => (
            <div key={index} className="mb-6 last:mb-0">

              {/* TOP ROW */}
              <div className="flex justify-between items-center mb-2">

                <h3 className="text-[#561C24] font-semibold">
                  {skill.name}
                </h3>

                <span className="text-sm text-[#6D2932]/70">
                  {skill.status}
                </span>

              </div>

              {/* PROGRESS BAR (MATCH HERO ACCENT) */}
              <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-[#C7B7A3] rounded-full"
                />

              </div>

              {/* PERCENT */}
              <p className="text-right text-xs text-[#6D2932]/60 mt-1">
                {skill.level}%
              </p>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}