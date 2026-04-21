import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-orange-500 font-semibold mb-3">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let's build <br />
            something small together.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Internships, study groups, weekend project ideas, or just a thoughtful
            question about data — my inbox is open and I read every message.
          </p>

          {/* contact info */}
          <div className="mt-10 space-y-4 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">hello@alifia.dev</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Based in</p>
              <p className="font-medium">Indonesia · Open to remote</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow space-y-5"
        >

          {/* name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* message */}
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me what you're working on, or what you'd like to build…"
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
          >
            Send message
          </button>

        </motion.form>

      </div>
    </section>
  );
}