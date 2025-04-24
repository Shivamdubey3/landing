import React from 'react'
import './PriceTable.css'

const data = [
  { type: '2 BHK Premier', area: '745 Sq. ft.', price: '₹ 2.91 Cr Onwards' },
  { type: '2 BHK Luxe',    area: '733 Sq. ft.', price: '₹ 2.94 Cr Onwards' },
  { type: '2 BHK Premier', area: '745 Sq. ft.', price: '₹ 2.99 Cr Onwards' },
  { type: '3 BHK Premier', area: '1053/1059/1070 Sq. ft.', price: '₹ 4.26 Cr Onwards' },
  { type: '3 BHK Royal',   area: '1240 Sq. ft.',   price: '₹ 4.99 Cr Onwards' },
]

export default function PriceTable() {
  return (
    <section className="price-section container">
      <div className="price-table-wrapper">
        <h2 className="price-title">Price</h2>
        <table className="price-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Carpet Area</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'even' : ''}>
                <td>{row.type}</td>
                <td>{row.area}</td>
                <td>{row.price}</td>
                <td>
                  <button className="breakup-btn">Price Breakup</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="costing-card">
        <img src="/assets/hero.webp" alt="Costing Details" className="cost-img" />
        <div className="cost-overlay">
          <span>Complete Costing Details</span>
        </div>
      </div>
    </section>
  )
}
