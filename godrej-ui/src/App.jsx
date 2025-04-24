import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import PriceTable from './components/PriceTable'
import SiteFloor from './components/SiteFloor'
import Amenities from './components/Amenities'
import TestSlider from './components/TestSlider'
import Gallery from './components/Gallery'
import MapView from './components/MapView'
import VirtualTour from './components/VirtualTour'
import './components/VirtualTour.css'
import AboutSection from './components/AboutSection'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <PriceTable />
      <SiteFloor />
      <Amenities />
      {/* <TestSlider /> */}
      <Gallery />
      <MapView />
      <VirtualTour />
      <AboutSection />
    </>
  )
}

export default App
