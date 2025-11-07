import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X } from 'lucide-react'
import '../styles/Gallery.css'

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = {
    rooms: {
      title: 'Rooms',
      images: [
        '/images/rooms/Screenshot From 2025-10-30 22-32-48.png',
        '/images/rooms/Screenshot From 2025-10-30 22-35-03.png',
        '/images/rooms/Screenshot From 2025-10-30 22-35-25.png'
      ]
    },
    dining: {
      title: 'Dining',
      images: [
        '/images/dining/Screenshot From 2025-10-30 22-32-35.png',
        '/images/dining/Screenshot From 2025-10-30 22-33-12.png',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM (1).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM.jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM (1).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM.jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.18 PM (2).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.18 PM.jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (2).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (3).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM.jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.20 PM (1).jpeg',
        '/images/dining/WhatsApp Image 2025-11-01 at 4.57.20 PM.jpeg'
      ]
    },
    events: {
      title: 'Events',
      images: [
        '/images/events/Screenshot From 2025-10-30 22-32-17.png',
        '/images/events/Screenshot From 2025-10-30 22-32-48.png',
        '/images/events/Screenshot From 2025-10-30 22-33-19.png',
        '/images/events/Screenshot From 2025-10-30 22-34-39.png',
        '/images/events/Screenshot From 2025-10-30 22-35-43.png',
        '/images/events/WhatsApp Image 2025-11-01 at 4.57.18 PM (3).jpeg',
        '/images/events/WhatsApp Image 2025-11-01 at 4.57.19 PM (1).jpeg',
        '/images/events/WhatsApp Image 2025-11-01 at 4.57.20 PM (2).jpeg'
      ]
    },
    exterior: {
      title: 'Exterior',
      images: [
        '/images/exterior/Screenshot From 2025-10-30 22-33-01.png',
        '/images/exterior/Screenshot From 2025-10-30 22-33-26.png',
        '/images/exterior/Screenshot From 2025-10-30 22-35-51.png',
        '/images/exterior/WhatsApp Image 2025-11-01 at 4.57.20 PM (3).jpeg',
        '/images/exterior/WhatsApp Image 2025-11-01 at 4.57.20 PM (4).jpeg'
      ]
    }
  }

  const allImages = Object.values(categories).flatMap(cat => cat.images)
  const displayImages = activeCategory === 'all' ? allImages : categories[activeCategory].images

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Gallery</h2>
          <p>Explore our facilities and amenities</p>
        </motion.div>

        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {displayImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                className="gallery-image"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close">
              <X size={32} />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Gallery" className="lightbox-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
