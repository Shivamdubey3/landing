// src/components/TestSlider.jsx
import React from 'react';
import Slider from 'react-slick';

export default function TestSlider() {
  const settings = { slidesToShow: 3, slidesToScroll: 1, infinite: false };
  return (
    <div style={{ padding: 20 }}>
      <h2>Test Slider</h2>
      <Slider {...settings}>
        {[1,2,3,4,5].map(n => (
          <div key={n}>
            <div style={{
              height: 150,
              background: ['#e74c3c','#3498db','#2ecc71','#9b59b6','#f1c40f'][n%5],
            }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
