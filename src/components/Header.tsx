import { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    const icon = document.querySelector('.menu-toggle i')
    if (icon) {
      icon.className = !isOpen ? 'fas fa-times' : 'fas fa-bars'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    const icon = document.querySelector('.menu-toggle i')
    if (icon) {
      icon.className = 'fas fa-bars'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact']
      const scrollPosition = window.scrollY + 120

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['home', 'projects', 'contact']

  return (
    <header className="header">
      <div className="nav">
        <div className="nav-container">
          <a href="#home" className="logo">
            <img src="/assets/favicon.svg" alt="Zelvarys" />
            <span>Zelvarys</span>
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeLink === item ? 'active' : ''}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`} id="navMobile">
        <ul className="nav-links-mobile">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeLink === item ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header