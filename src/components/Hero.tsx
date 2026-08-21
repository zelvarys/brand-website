const Hero = () => {
  const stats = [
    { number: '5+', label: 'Projects' },
    { number: '2yrs', label: 'Experience' },
    { number: '13', label: 'Stacks' },
    { number: '100%', label: 'Satisfied' },
    { number: '24/7', label: 'Support' },
  ]

  const skills = [
    {
      icon: 'fa-server',
      title: 'Backend Development',
      description: 'RESTful APIs, authentication, database design, and scalable server architectures',
    },
    {
      icon: 'fa-cloud',
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, containerization, cloud hosting, and infrastructure management',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Frontend Engineering',
      description: 'Responsive interfaces, state management, and optimized user experiences',
    },
    {
      icon: 'fa-robot',
      title: 'Automation',
      description: 'Process scripting, data processing, web scraping, and workflow automation',
    },
  ]

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge">Software Developer</div>
          <h1 className="hero-title">
            Building <span className="gradient">practical and reliable</span> solutions from complex requirements
          </h1>
          <img src="/assets/banner.png" alt="Developer illustration" className="hero-image-mobile" />
          <p className="hero-description">
            Software developer with 2+ years of experience architecting and deploying production-grade applications. I focus on writing clean, maintainable code that solves real problems and performs reliably under load.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View my projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-comment"></i> Let's connect
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/banner.png" alt="Developer illustration" className="hero-image" />
        </div>
      </div>
      <div className="skills-summary">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-title">
                <i className={`fas ${skill.icon}`}></i>
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero