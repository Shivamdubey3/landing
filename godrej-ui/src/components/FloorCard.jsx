import React from 'react'
import './FloorCard.css'

export default function FloorCard({ img, type, area, price }) {
  return (
    <div className="floor-card">
      <div className="image-wrapper">
        <img src={img} alt={`${type} floor plan`} />
      </div>
      <div className="data-strip">
        <div className="strip-item"><strong>Type:</strong> {type}</div>
        <div className="strip-item"><strong>Carpet Area:</strong> {area}</div>
        <div className="strip-item"><strong>Price (Onwards):</strong> {price}</div>
      </div>
      <div className="card-footer">
        <span>{type} {area}</span>
      </div>
    </div>
  )
}
