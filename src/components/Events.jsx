import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Users, Briefcase, Music } from 'lucide-react'
import '../styles/Events.css'

const Events = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const eventTypes = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Create unforgettable memories on your special day',
      capacity: 'Up to 200 guests'
    },
    {
      icon: Users,
      title: 'Ruracios',
      description: 'Traditional ceremonies in a beautiful setting',
      capacity: 'Up to 150 guests'
    },
    {
      icon: Briefcase,
      title: 'Conferences',
      description: 'Professional venues for corporate events',
      capacity: 'Up to 100 guests'
    },
    {
      icon: Music,
      title: 'Parties',
      description: 'Celebrate any occasion with us',
      capacity: 'Flexible arrangements'
    }
  ]

  return (
    <section id="events" className="events" ref={ref}>
      <div className="events-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Host Your Event</h2>
          <p>Perfect venue for weddings, ruracios, conferences & celebrations</p>
        </motion.div>

        <div className="events-grid">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              className="event-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="event-icon">
                <event.icon size={48} />
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="event-capacity">{event.capacity}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="event-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="event-inquiry-btn">Request Event Quote</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
