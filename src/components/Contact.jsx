import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
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
               <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <FiMail size={28} />
               </div>
               <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                  <a href="mailto:muhammedsyam.dev@gmail.com" className="text-xl font-bold hover:text-brand-primary transition-colors">
                     muhammedsyam.dev@gmail.com
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project..." 
                className="w-full bg-bg-card border border-white/5 rounded-xl p-4 focus:border-brand-primary outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2 group">
              Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
