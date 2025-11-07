import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import '../styles/Hero.css'

const Hero = ({ onBookClick }) => {
  const [currentBg, setCurrentBg] = useState(0)

  const heroImages = [
    '/images/hero/hero-1.jpeg',
    '/images/hero/hero-2.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="home" className="hero">
      <div className="hero-background-container">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentBg ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="hero-title">
            Welcome to <span className="highlight">Acorn Sagana</span>
          </h1>
          <p className="hero-subtitle">
            Your Perfect Destination for Comfort, Events & Memorable Experiences
          </p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={onBookClick}>
              Book Your Stay
            </button>
            <a href="#rooms" className="cta-secondary">
              Explore Rooms
            </a>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
