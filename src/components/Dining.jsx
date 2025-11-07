import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/Dining.css'

const Dining = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [currentImage, setCurrentImage] = useState(0)

  const diningImages = [
    '/images/dining/Screenshot From 2025-10-30 22-32-35.png',
    '/images/dining/Screenshot From 2025-10-30 22-33-12.png',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM (1).jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM.jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM (1).jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM.jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.18 PM.jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (2).jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (3).jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM.jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.20 PM (1).jpeg',
    '/images/dining/WhatsApp Image 2025-11-01 at 4.57.20 PM.jpeg'
  ]

  const menuItems = [
    { name: 'Traditional Nyama Choma', desc: 'Grilled meat with ugali and sukuma wiki' },
    { name: 'Continental Breakfast', desc: 'Fresh fruits, pastries, eggs, and coffee' },
    { name: 'Local Delicacies', desc: 'Authentic Kenyan dishes prepared fresh daily' },
    { name: 'International Cuisine', desc: 'Variety of global flavors' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % diningImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [diningImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % diningImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + diningImages.length) % diningImages.length)
  }

  return (
    <section id="dining" className="dining" ref={ref}>
      <div className="dining-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Dining Experience</h2>
          <p>Savor delicious meals prepared with love</p>
        </motion.div>

        <div className="dining-content">
          <motion.div
            className="dining-image-carousel"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={diningImages[currentImage]}
                alt={`Dining ${currentImage + 1}`}
                className="dining-img"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            <button className="carousel-btn prev-btn" onClick={prevImage} aria-label="Previous image">
              ‹
            </button>
            <button className="carousel-btn next-btn" onClick={nextImage} aria-label="Next image">
              ›
            </button>
            
            <div className="carousel-dots">
              {diningImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="dining-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="menu-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Dining
