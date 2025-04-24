import React from 'react'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="about-section ">
      {/* About Godrej Properties */}
      <div className="block">
        <h2>About Godrej Properties</h2>
        <p>
          Founded in 1897, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed‑use properties as part of its portfolio. The firm’s properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting‑edge technologies. With a grand legacy of 125 years in the real estate industry, Godrej Properties has changed the skyline of many cities in the country.
        </p>
      </div>

      {/* RERA Information */}
      <div className="block rera-block">
        <h3>RERA Information</h3>
        <div className="rera-cards">
          <div className="rera-card">
            <img src="/assets/sca.png" alt="QR Code 1" />
            <p><strong>Godrej Horizon MahaRERA</strong><br/>P51900034851</p>
          </div>
          <div className="rera-card">
            <img src="/assets/sca.png" alt="QR Code 2" />
            <p><strong>Godrej Horizon MahaRERA</strong><br/>P51900049757</p>
          </div>
        </div>
        <p className="rera-note">
          Godrej has been registered via MahaRERA registration number and is available on the RERA website under registered projects.
        </p>
      </div>

      {/* About HouseBazaar */}
      <div className="block">
        <h2>About HouseBazaar</h2>
        <p>
          HouseBazaar, an esteemed initiative of HomeBazaar.com, operates as a dedicated platform exclusively designed to promote our esteemed partner brands. With a commitment to facilitating effective and transparent promotion, our platform empowers brands to efficiently reach their target audience. Through a comprehensive range of tools, including targeted advertising campaigns and data‑driven analytics, HouseBazaar equips brands with the essential resources needed to optimize their promotional endeavours and drive substantial growth.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="block disclaimer">
        <p>
          <strong>Disclaimer:</strong> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content are for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
        </p>
        <div className="footer">
          <span>Contact Us at - #2304, Cyber One, Sector 30(A), Vashi, Navi Mumbai - 400703</span>
          <span>© Copyright</span>
          <nav>
            <a href="#">Terms & Conditions</a> |
            <a href="#">Privacy Policy</a> |
            <a href="#">Cookies Policy</a>
          </nav>
        </div>
      </div>
    </section>
  )
}
