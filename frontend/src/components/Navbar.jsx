"use client"

import "./Navbar.css"

function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // This line prevents the default jump-to-top behavior
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
            <a href="#top" onClick={(e) => scrollToSection(e, "top")}>
              Home
            </a>
          </li>
          <li>
            <a href="#locations" onClick={(e) => scrollToSection(e, "locations")}>
              Our Locations
            </a>
          </li>
          <li>
            <a href="#promos" onClick={(e) => scrollToSection(e, "promos")}>
              Promos
            </a>
          </li>
          <li>
            <a href="#footer" onClick={(e) => scrollToSection(e, "footer")}>
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