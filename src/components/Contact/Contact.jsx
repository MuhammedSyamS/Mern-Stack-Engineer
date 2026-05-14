import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import axios from 'axios';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp } from '../../utils/animations';
import styles from './Contact.module.css';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const response = await axios.post('/api/contact', formData);
        if (response.data.success) {
          setIsSuccess(true);
        } else {
          throw new Error(response.data.message || 'Failed to send message');
        }
      } catch (error) {
        console.error('Contact Form Error:', error);
        const errorMessage = error.response?.data?.message || error.message || 'Something went wrong. Please try again later.';
        alert(`Error: ${errorMessage}`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">Let's Build Together</h2>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hi? I'm always open to new opportunities
            and collaborations. Drop me a message below or email me directly at <a href="mailto:muhammedsyam.dev@gmail.com" className={styles.emailLink}>muhammedsyam.dev@gmail.com</a>.
          </p>
        </motion.div>

        <div className={styles.formContainer}>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.successMessage}
              >
                <FiCheckCircle size={64} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  className={styles.btn} 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -50 }}
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ''}
                    placeholder="Your Name"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.errorText}
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ''}
                    placeholder="you@example.com"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.errorText}
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? styles.inputError : ''}
                    placeholder="Tell me about your project..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.errorText}
                      >
                        {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
