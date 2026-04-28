import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi Alifia 👋

Saya tertarik untuk terhubung dan berdiskusi lebih lanjut.

Nama: ${form.name}
Email: ${form.email}

Kebutuhan / Project:
${form.message}

Looking forward to your response ✨`;

    const url = `https://wa.me/6282153267078?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-[#E8D8C4] py-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6D2932] font-semibold mb-3">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#561C24] leading-tight">
            Let's build <br />
            something small together.
          </h2>

          <p className="mt-6 text-[#6D2932]/80 leading-relaxed">
            Internships, study groups, weekend project ideas, or just a thoughtful
            question about data — my inbox is open and I read every message.
          </p>

          {/* INFO */}
          <div className="mt-10 space-y-5 text-[#561C24]">

            <div className="bg-[#C7B7A3]/40 backdrop-blur border border-white/30 p-4 rounded-2xl shadow">
              <p className="text-sm text-[#6D2932]">Email</p>
              <p className="font-medium">alifiaazzara1193@gmail.com</p>
            </div>

            <div className="bg-[#C7B7A3]/40 backdrop-blur border border-white/30 p-4 rounded-2xl shadow">
              <p className="text-sm text-[#6D2932]">Based in</p>
              <p className="font-medium">Indonesia · Open to remote</p>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#C7B7A3]/30 backdrop-blur border border-white/30 p-8 rounded-2xl shadow-lg space-y-5"
        >

          {/* NAME */}
          <div>
            <label className="text-sm text-[#6D2932]">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full mt-2 p-3 rounded-xl bg-white/40 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#6D2932]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-[#6D2932]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="w-full mt-2 p-3 rounded-xl bg-white/40 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#6D2932]"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-[#6D2932]">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me what you're working on..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className="w-full mt-2 p-3 rounded-xl bg-white/40 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#6D2932]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#6D2932] hover:bg-[#561C24] text-white py-3 rounded-xl font-medium transition shadow-lg"
          >
            Send Message 🚀
          </button>

        </motion.form>

      </div>
    </section>
  );
}