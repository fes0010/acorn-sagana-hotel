import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wifi, Tv, Coffee, Wind } from 'lucide-react'
import '../styles/Rooms.css'

const Rooms = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const rooms = [
    {
      name: 'Standard Room',
      price: 'KSh 3,500',
      amenities: ['Free WiFi', 'TV', 'Hot Shower', 'Breakfast'],
      image: '/images/rooms/Screenshot From 2025-10-30 22-35-25.png'
    },
    {
      name: 'Deluxe Room',
      price: 'KSh 5,000',
      amenities: ['Free WiFi', 'TV', 'AC', 'Breakfast', 'Mini Bar'],
      image: '/images/rooms/Screenshot From 2025-10-30 22-32-48.png'
    },
    {
      name: 'Family Suite',
      price: 'KSh 7,500',
      amenities: ['Free WiFi', 'TV', 'AC', 'Breakfast', 'Living Area'],
      image: '/images/rooms/Screenshot From 2025-10-30 22-35-03.png'
    }
  ]

  return (
    <section id="rooms" className="rooms" ref={ref}>
      <div className="rooms-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Accommodations</h2>
          <p>Comfortable rooms designed for your perfect stay</p>
        </motion.div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.name} className="room-img" />
                <div className="room-badge">{room.price}/night</div>
              </div>
              <div className="room-info">
                <h3>{room.name}</h3>
                <div className="room-amenities">
                  {room.amenities.map((amenity, i) => (
                    <span key={i} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
                <button className="room-btn">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
