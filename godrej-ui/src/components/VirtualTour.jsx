import React from 'react'
import './VirtualTour.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function VirtualTour() {
  return (
    <section className="virtual-tour">
      <div className="overlay" />
      <img
        src="/assets/hero.jpg"
        alt="Virtual Site Visit"
        className="background-img"
      />
      <div className="content container">
        <button className="play-btn">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <h2>VIRTUAL SITE VISIT</h2>
        <p>Godrej Horizon Wadala</p>
      </div>
    </section>
  )
}
