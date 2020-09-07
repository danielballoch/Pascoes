import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

        <Link to="/" className="nav_link">
          Home
        </Link>
        <Link to="/services" className="nav_link">
          Services
        </Link>
        <Link to="/about" className="nav_link">
          About
        </Link>
        <Link to="/contact" className="nav_link">
          Contact
        </Link>

      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
