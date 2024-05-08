import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>


  <nav>
        <div className="nav__logo"><a href="#">Travel Go</a></div>
        <ul className="nav__links">
          <li className="link" href="#home" target="_blank"><a href="#home">Home</a></li>
          <li className="link" href="#blog" target="_blank"><a href="#blog">Blog</a></li>
          <li className="link"  href="#offer" target="_blank"><a href="#offer">Offers</a>     </li>
          <li className="link" href="#service" target="_blank"><a href="#service">Services</a></li>
          <li className="link" href="#contact" target="_blank"><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <section id='home'>
      <header>
        <div className="section__container">
          <div className="header__content">
            <h1>Travel</h1>
            <p>
              Embark on a journey of a lifetime and explore the world's most
              breathtaking destinations with our expert travel advice. From exotic
              beaches to cultural wonders, we've got you covered with our
              comprehensive travel guides and insider tips.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </header>
</section>
    </div>
  )
}

export default Header