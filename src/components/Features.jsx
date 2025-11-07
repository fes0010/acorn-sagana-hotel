import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bed, Utensils, Car, PartyPopper } from 'lucide-react'
import '../styles/Features.css'

const features = [
  {
    icon: Bed,
    title: 'Comfortable Rooms',
    description: 'Spacious accommodations with modern amenities'
  },
  {
    icon: Utensils,
    title: 'Delicious Dining',
    description: 'Fresh local and international cuisine'
  },
  {
    icon: Car,
    title: 'Ample Parking',
    description: 'Secure covered parking for all guests'
  },
  {
    icon: PartyPopper,
    title: 'Event Hosting',
    description: 'Perfect venue for weddings, ruracios & conferences'
  }
]

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="features" ref={ref}>
      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="feature-icon">
              <feature.icon size={40} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
