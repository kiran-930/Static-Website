import React from 'react'
import './Journey.css'

import countryImage from './assets/country-1.jpg'
import countryImage2 from './assets/country-2.jpg'
import countryImage3 from './assets/country-3.jpg'
import countryImage4 from './assets/country-4.jpg'
import countryImage5 from './assets/country-5.jpg'
import countryImage6 from './assets/country-6.jpg'

function Journey() {
  return (
    <div>
        <section id='blog' class="journey__container">
      <div class="section__container">
        <h2 class="section__title">Start Your Journey</h2>
        <p class="section__subtitle">The most searched countries in March</p>
        <div class="journey__grid">
          <div class="country__card">
            <img src={countryImage} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Santorini, Greece</span>
            </div>
          </div>
          <div class="country__card">
            <img src={countryImage2} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Vernazza, Italy</span>
            </div>
          </div>
          <div class="country__card">
            <img src={countryImage3} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>San Francisco</span>
            </div>
          </div>
          <div class="country__card">
            <img src={countryImage4} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>navagio, Greece</span>
            </div>
          </div>
          <div class="country__card">
            <img src={countryImage5} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Ao Nang, Thailand</span>
            </div>
          </div>
          <div class="country__card">
            <img src={countryImage6} alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Phi Phi Island, Thailand</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Journey