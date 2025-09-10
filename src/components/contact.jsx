import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      ),
      title: 'Email',
      description: 'Send me a message anytime',
      value: 'prathicksha006@gmail.com',
      link: 'mailto:prathicksha006@gmail.com',
      color: '#10b981'
    },
    {
      icon: (
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/prathickshaselvaraj',
      link: 'https://linkedin.com/in/prathickshaselvaraj',
      color: '#0077b5'
    },
    {
      icon: (
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      description: 'View my code and projects',
      value: 'github.com/prathickshaselvaraj',
      link: 'https://github.com/prathickshaselvaraj',
      color: '#333'
    }
  ];

  const quickMessages = [
    "I'd like to discuss internship opportunities",
    "I'm interested in your projects",
    "Let's collaborate on a project",
    "I have a question about your experience"
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to start a conversation? I'd love to hear from you about opportunities, collaborations, or just to chat about technology.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="intro-section">
              <h3>Get In Touch</h3>
              <p>
                I'm actively seeking internship opportunities and always open to discussing 
                interesting projects, learning opportunities, or connecting with fellow developers. 
                Whether you're a recruiter, fellow student, or industry professional, I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method"
                  style={{ '--method-color': method.color }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p>{method.description}</p>
                    <span className="method-value">{method.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="quick-contact">
              <h4>Quick Response Time</h4>
              <div className="response-info">
                <div className="response-item">
                  <span className="response-icon">📧</span>
                  <span>Email: Usually within 24 hours</span>
                </div>
                <div className="response-item">
                  <span className="response-icon">💼</span>
                  <span>LinkedIn: Usually within 12 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3>Send a Message</h3>
              <p>Prefer to send a direct message? Fill out the form below and I'll get back to you soon.</p>

              {submitStatus === 'success' && (
                <div className="status-message success">
                  <span className="status-icon">✅</span>
                  Thanks for your message! I'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  <span className="status-icon">❌</span>
                  Something went wrong. Please try again or send me an email directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="quick-subjects">
                  <p>Or choose a quick subject:</p>
                  <div className="subject-buttons">
                    {quickMessages.map((message, index) => (
                      <button
                        key={index}
                        type="button"
                        className="subject-btn"
                        onClick={() => setFormData(prev => ({ ...prev, subject: message }))}
                      >
                        {message}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me more about what you'd like to discuss..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="availability">
            <h4>Current Availability</h4>
            <div className="availability-status">
              <span className="status-indicator available"></span>
              <span>Available for internships and part-time opportunities</span>
            </div>
            <p>
              I'm currently in my 3rd year of M.Sc. Decision and Computing Science and actively 
              seeking internship opportunities for hands-on development experience. I'm also 
              open to freelance projects and collaborative opportunities.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .intro-section {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        .intro-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .intro-section p {
          opacity: 0.9;
          line-height: 1.6;
          margin: 0;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
        }

        .contact-method:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(8px);
          border-color: var(--method-color);
        }

        .method-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: var(--method-color);
        }

        .method-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .method-content p {
          opacity: 0.8;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .method-value {
          font-size: 0.9rem;
          color: var(--method-color);
          font-weight: 600;
        }

        .quick-contact {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .quick-contact h4 {
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .response-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .response-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .response-icon {
          font-size: 1.2rem;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-container h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .form-container > p {
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.2);
          border: 2px solid #10b981;
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid #ef4444;
        }

        .status-icon {
          font-size: 1.2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 1rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.2);
        }

        .quick-subjects {
          margin: 1rem 0;
        }

        .quick-subjects p {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .subject-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .subject-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subject-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .contact-footer {
          background: rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .availability h4 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .availability-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-indicator.available {
          background: #10b981;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .availability p {
          opacity: 0.9;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .method-icon {
            width: 50px;
            height: 50px;
          }

          .form-container {
            padding: 1.5rem;
          }

          .subject-buttons {
            flex-direction: column;
          }

          .contact-footer {
            padding: 2rem;
          }

          .availability-status {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;