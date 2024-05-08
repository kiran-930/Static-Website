import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <section id='contacts'>
           <footer>
        <div className="section__container">
          <h4>Travel Go</h4>
          <div className="social__icons">
            <span><i className="ri-facebook-fill"></i></span>
            <span><i className="ri-twitter-fill"></i></span>
            <span><i className="ri-instagram-line"></i></span>
            <span><i className="ri-linkedin-fill"></i></span>
          </div>
          <p>
            Travel makes one modest. You see what a tiny place you occupy in the
            world.
          </p>
        </div>
      </footer>
  
        </section>
    </div>
  )
}

export default Footer