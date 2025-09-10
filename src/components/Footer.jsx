import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/prathickshaselvaraj',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/prathickshaselvaraj',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:prathicksha006@gmail.com',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'Experience', href: 'experience' },
    { label: 'Resume', href: 'resume' },
    { label: 'Blog', href: 'blog' },
    { label: 'Contact', href: 'contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="brand-name">Prathicksha S</h3>
              <p className="brand-tagline">
                M.Sc. Decision & Computing Science Student
              </p>
              <p className="brand-description">
                Passionate about technology, continuous learning, and building solutions that make a difference. 
                Currently seeking internship opportunities to apply my skills in real-world projects.
              </p>
              <div className="brand-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Leadership Roles</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <div className="links-grid">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="footer-skills">
              <h4>Core Skills</h4>
              <div className="skills-list">
                <span className="skill-item">Python</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">React</span>
                <span className="skill-item">Machine Learning</span>
                <span className="skill-item">Data Structures</span>
                <span className="skill-item">Full-Stack Development</span>
                <span className="skill-item">Leadership</span>
                <span className="skill-item">Project Management</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Let's Connect</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                  <span>prathicksha006@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Available for Remote/Hybrid Opportunities</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Available for Internships</span>
                </div>
              </div>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Prathicksha S. All rights reserved.</p>
              <p className="built-with">
                Built with React ⚛️ • Designed with ❤️
              </p>
            </div>
            
            <div className="footer-cta">
              <p>Ready to collaborate? Let's build something amazing together!</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      )}

      <style jsx>{`
        .footer {
          background: #1a202c;
          color: white;
          position: relative;
        }

        .footer-content {
          padding: 4rem 0 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brand-name {
          font-size: 2rem;
          font-weight: 800;
          color: #60a5fa;
          margin: 0;
        }

        .brand-tagline {
          font-size: 1.1rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 600;
        }

        .brand-description {
          color: #cbd5e0;
          line-height: 1.6;
          margin: 0;
        }

        .brand-stats {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 800;
          color: #60a5fa;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .footer-links h4,
        .footer-skills h4,
        .footer-contact h4 {
          color: #60a5fa;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #cbd5e0;
          text-align: left;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: #60a5fa;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .contact-item svg {
          color: #60a5fa;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #60a5fa;
          color: white;
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 2rem 0;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .copyright p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .built-with {
          font-size: 0.8rem !important;
          color: #6b7280 !important;
        }

        .footer-cta {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }

        .footer-cta p {
          margin: 0;
          color: #cbd5e0;
          font-size: 0.95rem;
        }

        .cta-button {
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
        }

        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.6);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .brand-stats {
            justify-content: flex-start;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 3rem 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .brand-stats {
            justify-content: space-around;
          }

          .links-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-cta {
            align-items: center;
            text-align: center;
          }

          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .brand-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;