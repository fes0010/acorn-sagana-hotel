import React, { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Rooms from './components/Rooms'
import Dining from './components/Dining'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="app">
      <Navigation onBookClick={() => setShowBooking(true)} />
      <Hero onBookClick={() => setShowBooking(true)} />
      <Features />
      <Rooms />
      <Dining />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
      {showBooking && <Booking onClose={() => setShowBooking(false)} />}
    </div>
  )
}

export default App
