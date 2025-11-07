import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ACORN SAGANA</h3>
            <p>Your home away from home in the heart of Sagana</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#rooms">Rooms</a>
            <a href="#dining">Dining</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: 0701-155-589</p>
            <p>Email: info@acornsagana.com</p>
            <p>Sagana, Kirinyaga County</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Acorn Sagana Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
