// Hero.jsx
import InfoCard from './InfoCard'
import EnquiryForm from './EnquiryForm'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img src="/assets/hero.webp" className="hero-bg" alt="hero"/>
      <div className="hero-content container">
        <InfoCard/>

        {/* Give this wrapper an ID */}
        <div id="fixed-enquiry">
          <EnquiryForm/>
        </div>
      </div>
    </section>
  )
}
