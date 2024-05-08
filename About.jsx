import React from 'react'
import './About.css'

import countryImage7 from './assets/grid-5.jpg'
import countryImage8 from './assets/grid-6.jpg'
import countryImage9 from './assets/grid-3.jpg'

function About() {
  return (
    <div>
        <section id='service' className="display__container">
      <div className="section__container">
        <h2 className="section__title">Why Choose Us</h2>
        <p className="section__subtitle">
          The gladdest moment in human life, is a departure into unknown lands.
        </p>
        <div className="display__grid">
          <div className="display__card grid-1">
            <img src={countryImage7} alt="grid" />
          </div>
          <div className="display__card">
            <i className="ri-earth-line"></i>
            <h4>Passionate Travel</h4>
            <p>Fuel your passion for adventure and discover new horizons</p>
          </div>
          <div className="display__card">
            <img src={countryImage8} alt="grid" />
          </div>
          <div className="display__card">
            <img src={countryImage9} alt="grid" />
          </div>
          <div className="display__card">
            <i className="ri-road-map-line"></i>
            <h4>Beautiful Places</h4>
            <p>Uncover the world's most breathtakingly beautiful places</p>
          </div>
        </div>
      </div>
    </section>

    </div>

    
  )
}

export default About