import React from 'react'
import './Welcome.css'

export default function Welcome() {
  return (
    <section className="welcome container">
      <h2 className="welcome-title">Welcome To Godrej Horizon Wadala</h2>
      <p className="welcome-text">
        A residential address at the premium locale of Wadala, Signature Tower at Godrej Horizon offers a world of grandeur in the heart of Mumbai.
        Its modern 2 and 3‑BHK residences with balcony offer views of the breathtaking sunrise at Eastern bay and the unique Mumbai skyline.
        Amenities include a 5‑storeyed clubhouse, steam room, sky lounge, and an infinity pool – all crafted to provide a luxurious, almost regal lifestyle.
      </p>
      <a href="#" className="welcome-link">Read more</a>
      <button className="welcome-button">
        <i className="fa fa-download" aria-hidden="true" /> Download Brochure
      </button>
    </section>
  )
}
