import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>We're here to help with your booking and inquiries</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Sagana, Kirinyaga County, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>0701-155-589</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>info@acornsagana.com</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={24} />
              <div>
                <h3>Reception Hours</h3>
                <p>24/7 Available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Sagana, Kirinyaga</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
