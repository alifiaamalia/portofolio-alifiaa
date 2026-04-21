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
      className="min-h-screen flex items-center bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What I work with — and how well, honestly. No inflated bars.
            Just where I’m comfortable, learning, or still exploring.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
            >

              {/* top row */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">
                  {skill.name}
                </h3>

                <span className="text-sm text-gray-500">
                  {skill.status}
                </span>
              </div>

              {/* progress bar */}
              <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* percent */}
              <p className="text-right text-xs text-gray-500 mt-2">
                {skill.level}%
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}