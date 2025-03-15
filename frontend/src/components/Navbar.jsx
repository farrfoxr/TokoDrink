"use client"

import "./Navbar.css"

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand"></div>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={() => scrollToSection("top")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("locations")}>
              Our Locations
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("promos")}>
              Promos
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("footer")}>
              Contact Us
            </a>
          </li>
        </ul>
        {/* This empty div helps maintain the centering */}
        <div className="navbar-placeholder"></div>
      </div>
    </nav>
  )
}

export default Navbar

