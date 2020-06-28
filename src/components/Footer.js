import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>For More</h2>
      <p>
        You can check my GitHub to see all my latest projects
      </p>
      <ul className="actions">

      </ul>
    </section>
    <section>
      <h2>Contact Info</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Fortaleza &bull; Ceará &bull; Brazil</dd>

        <dt>Email</dt>
        <dd>
          <a href="mailto:rodrigojin@gmail.com">rodrigojin@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://linkedin.com/in/roddcm"
            className="icon fa-linkedin alt"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>

        <li>
          <a href="https://instagram.com/roddcm" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RohanMelo"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>

      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a> Implementation by Rodrigo Melo.
    </p>
  </footer>
)

export default Footer
