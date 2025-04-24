import React from 'react'
import Slider from 'react-slick'
import './Gallery.css'

const images = [
  '/assets/hero.webp',
  '/assets/hero1.webp',
  '/assets/hero.webp',
  '/assets/hero1.webp',
]

export default function Gallery() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Gallery Of Godrej Horizon Wadala</h2>
        <button className="btn download">Download Gallery</button>
      </div>
      <Slider {...settings} className="gallery-slider">
        {images.map((src, i) => (
          <div key={i} className="gallery-card">
            <img src={src} alt={`Gallery ${i+1}`} />
          </div>
        ))}
      </Slider>
    </section>
  )
}
