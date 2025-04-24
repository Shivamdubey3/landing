import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Amenities.css'

const amenities = [
  { img: '/assets/hero1.webp'    },
  { img: '/assets/hero.webp'    },
  { img: '/assets/hero1.webp' },
  { img: '/assets/hero.webp'},
  { img: '/assets/hero1.webp' },
  { img: '/assets/hero.webp' },
]

function PrevArrow({ onClick }) {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  )
}

function NextArrow({ onClick }) {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

export default function Amenities() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="amenities container">
      <div className="amenities-header">
        <h2>Amenities Of Godrej Horizon Wadala</h2>
        <button className="download-btn">Download Amenities</button>
      </div>
      <Slider {...settings} className="amenities-slider">
        {amenities.map((a, i) => (
          <div key={i}>
            <div className="amenity-card">
              <div className="amenity-image">
                <img src={a.img} alt={a.label} />
              </div>
              <div className="amenity-label">{a.label}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
