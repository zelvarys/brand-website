import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear().toString()
  }, [])
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/assets/favicon.svg" alt="Zelvarys" />
        <div className="footer-brand">
          <p>Software developer building clean and efficient solutions.</p>
          <div className="social-links">
            <a href="https://github.com/zelvarys" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:zelvarys.dev@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/2348101730524" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <i className="fas fa-phone"></i> +234 810 173 0524
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Ondo State, &nbsp;Nigeria
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; <span id="year"></span> Zelvarys. &nbsp;All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer