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
            A student building <br />
            the long way around.
          </h2>

          {/* text */}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >

          {[
            {
              title: "Informatics Student",
              desc: "Currently studying, currently obsessed with everything data."
            },
            {
              title: "5+ Projects Built",
              desc: "From classroom to GitHub — small, real, finished things."
            },
            {
              title: "AI & Machine Learning",
              desc: "Notebooks, models, and a healthy respect for clean data."
            },
            {
              title: "Cloud Curious",
              desc: "Learning GCP fundamentals — storage, compute, deploy."
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