import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 mb-10">
              Have a project or opportunity? I'm always open to discussing new ideas and collaborations.
            </p>

            <div className="glass-card flex items-center gap-6 border-brand-primary/20">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0">
                <FiMail size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <a
                  href="mailto:muhammedsyam.dev@gmail.com"
                  className="text-lg font-bold hover:text-brand-primary transition-colors break-all"
                >
                  muhammedsyam.dev@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3"
              >
                <CheckCircle size={20} className="shrink-0" />
                <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
              >
                <AlertCircle size={20} className="shrink-0" />
                <span className="text-sm font-medium">
                  {!form.name || !form.email || !form.message
                    ? 'Please fill in all fields before sending.'
                    : 'Something went wrong. Please email me directly.'}
                </span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
