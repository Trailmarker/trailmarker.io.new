import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        {/* <li>
          <a href="https://twitter.com/attentive" aria-label="Twitter" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Facebook" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Instagram" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/Trailmarker" aria-label="GitHub" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tflynch/" aria-label="LinkedIn" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Trailmarker {new Date().getFullYear()}</li>
        <li>This site is developed and maintained on Larrakia country.</li>
      </ul>
    </div>
  </footer>
)

export default Footer
