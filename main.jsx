import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Header.jsx'
import Header from './Header.jsx'
import Journey from './Journey.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Journey/>
    <Banner/>
    <About/>
    <Footer/>
  </React.StrictMode>,
)
