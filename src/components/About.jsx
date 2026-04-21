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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-orange-500 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A student building <br />
            the long way around.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm Alifia — an Informatics student who fell in love with the quiet
            patterns hiding inside spreadsheets, logs, and APIs. I learn by
            building small, finished projects in AI, cloud, and data, then
            pulling them apart to figure out what actually made them work.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            My goal isn't to look like a senior engineer overnight. It's to keep
            showing up, stay curious, and ship things I'm proud of — one notebook,
            one deploy, one bug at a time.
          </p>

        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >

          {/* CARD 1 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">
              Informatics Student
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              Currently studying, currently obsessed with everything data.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">
              5+ Projects Built
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              From classroom to GitHub — small, real, finished things.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">
              AI & Machine Learning
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              Notebooks, models, and a healthy respect for clean data.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">
              Cloud Curious
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              Learning GCP fundamentals — storage, compute, deploy.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}