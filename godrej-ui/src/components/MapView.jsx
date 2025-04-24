import React from 'react'
import './MapView.css'

export default function MapView() {
  return (
    <section className="map-view container">
      <div className="map-header">
        <div>
          <small>Address Of Godrej Horizon Wadala</small>
          <h2>Map View</h2>
        </div>
      </div>
      <div className="map-content">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
          loading="lazy"
        ></iframe>
        <img src="/assets/locationmap.webp" alt="Location Map" className="static-map"/>
      </div>
      <ul className="map-list">
        <li>♞ Reach Wadala Railway Station within 5 mins</li>
        <li>♞ Get to St Joseph High School in 3 mins</li>
        <li>♞ 10 mins from Tata Memorial and Kem Hospital</li>
        <li>♞ VJTI College is 4 mins drive away</li>
        <li>♞ ITC Grand Central - 15 mins</li>
        <li>♞ Reach Five Gardens in 5 mins</li>
      </ul>
    </section>
  )
}
