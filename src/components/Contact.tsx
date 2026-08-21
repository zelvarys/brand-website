const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement).value
    const email = (form.querySelector('#email') as HTMLInputElement).value
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value

    const whatsappMessage = `*NEW PROJECT INQUIRY*%0A%0A
*Name:* ${name || 'Not provided'}%0A
*Email:* ${email || 'Not provided'}%0A%0A
*Message:* ${message || 'Not provided'}`

    const whatsappNumber = '2348101730524'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')
    form.reset()
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact Page</h2>
        <p>Reach out and let's discuss how I can help build your next project, right from planning to deployment.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Get in Touch</h2>
          </div>

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <i className="fas fa-user"></i> PROSPECT NAME
              </label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label>
                <i className="fas fa-envelope"></i> EMAIL ADDRESS
              </label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label>
                <i className="fas fa-comment"></i> PROJECT DETAILS
              </label>
              <textarea id="message" rows={3} required placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <i className="fas fa-paper-plane"></i> Send message
            </button>
            <div id="formStatus" className="form-status btn-outline">
              <i className="fas fa-info-circle"></i> You will be redirected to confirm your inquiry after submitting the form
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-item-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Download Resumé</h4>
                  <p className="contact-item-desc">Get my complete resume featuring detailed work experience, technical skills, education background, and professional certifications.</p>
                </div>
                <a href="#" className="contact-item-btn" target="_blank" rel="noopener" title="Download CV">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-item-icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Discovery Form</h4>
                  <p className="contact-item-desc">Fill out a quick discovery form to help me understand your project requirements better and provide an accurate timeline and cost estimate.</p>
                </div>
                <a href="#" className="contact-item-btn" target="_blank" rel="noopener" title="Fill Project Brief">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <div className="contact-item-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Project Planning</h4>
                  <p className="contact-item-desc">Free initial consultation to discuss your project requirements, technical feasibility, and my proven process for delivering projects on time.</p>
                </div>
                <a href="https://wa.me/2348101730524" target="_blank" rel="noopener" className="contact-item-btn" title="Book Consultation">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact