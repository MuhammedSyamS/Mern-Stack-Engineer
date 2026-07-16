import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Connect
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-8 mb-8 lg:mb-10">
              Have a project or opportunity? I'm always open to discussing
              new ideas and collaborations.
            </p>

            <div className="glass-card border-brand-primary/20 flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <FiMail size={24} />
              </div>

              <div className="min-w-0">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-bold">
                  Email Me
                </p>

                <a
                  href="mailto:muhammedsyam.dev@gmail.com"
                  className="block text-sm sm:text-base lg:text-lg font-bold hover:text-brand-primary transition-colors break-all"
                >
                  muhammedsyam.dev@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 text-sm sm:text-base outline-none focus:border-brand-primary transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 text-sm sm:text-base outline-none focus:border-brand-primary transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-bg-card border border-white/5 rounded-xl p-4 text-sm sm:text-base resize-none outline-none focus:border-brand-primary transition"
              />
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-green-400"
              >
                <CheckCircle className="shrink-0 mt-0.5" size={20} />

                <span className="text-sm leading-6">
                  Message sent! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-red-400"
              >
                <AlertCircle className="shrink-0 mt-0.5" size={20} />

                <span className="text-sm leading-6">
                  {!form.name || !form.email || !form.message
                    ? "Please fill in all fields before sending."
                    : "Something went wrong. Please email me directly."}
                </span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;