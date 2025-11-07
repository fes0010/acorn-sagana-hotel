import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Calendar, Users, Bed } from 'lucide-react'
import '../styles/Booking.css'

const Booking = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Booking request submitted! We will contact you shortly.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.div
      className="booking-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="booking-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="booking-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2>Book Your Stay</h2>
        <p className="booking-subtitle">Fill in your details and we'll get back to you</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="0701155589"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Calendar size={16} /> Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label><Calendar size={16} /> Check-out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><Users size={16} /> Guests</label>
              <select name="guests" value={formData.guests} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label><Bed size={16} /> Room Type</label>
              <select name="roomType" value={formData.roomType} onChange={handleChange}>
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="family">Family Suite</option>
              </select>
            </div>
          </div>

          <button type="submit" className="booking-submit">
            Check Availability & Book
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Booking
