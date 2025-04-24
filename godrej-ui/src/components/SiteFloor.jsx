import React from 'react'
import './SiteFloor.css'
import FloorCard from './FloorCard'

// paths to your images
const masterImage = '/assets/masterplan.webp'
const floorPlans = [
  {
    img: '/assets/hero.webp',
    type: '2 BHK',
    area: '733 Sq.ft.',
    price: '₹ 2.94 Cr',
  },
  {
    img: '/assets/hero.webp',
    type: '3 BHK',
    area: '1053 Sq.ft.',
    price: '₹ 4.36 Cr',
  },
  {
    img: '/assets/hero.webp',
    type: '3 BHK',
    area: '1240 Sq.ft.',
    price: '₹ 4.99 Cr',
  },
]

export default function SiteFloor() {
  return (
    <section className="site-floor container">
      <h2 className="section-title">Site & Floor Plan Of Godrej Horizon Wadala</h2>
      {/* Master Plan */}
      <div className="master-plan">
        <h3>Master Plan</h3>
        <img src={masterImage} alt="Master Plan" className="master-img" />
      </div>

      {/* Floor Plans */}
      <div className="floor-plans">
        {floorPlans.map((plan) => (
          <FloorCard key={plan.area} {...plan} />
        ))}
      </div>
    </section>
  )
}
