import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/assets/prathicksha-S.pdf';
    link.download = 'Prathicksha-S-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const resumeHighlights = [
    {
      category: 'Education',
      items: [
        'M.Sc. Decision and Computing Science (3rd Year)',
        'Strong foundation in CS and Finance',
        'Focus on practical application of theory'
      ]
    },
    {
      category: 'Technical Skills',
      items: [
        '10+ Programming Languages & Tools',
        'Full-Stack Development Experience',
        'Machine Learning & Data Science'
      ]
    },
    {
      category: 'Leadership',
      items: [
        'Executive Director - Women Empowerment Cell',
        'Public Relations Officer Experience',
        'Event Management & Team Leadership'
      ]
    },
    {
      category: 'Projects',
      items: [
        '5+ Technical Projects Completed',
        'Financial Modeling Applications',
        'ML/AI Implementation Experience'
      ]
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Get a comprehensive overview of my qualifications and experience
          </p>
        </div>

        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-card">
              <div className="resume-header">
                <div className="profile-section">
                  <div className="profile-info">
                    <h3 className="name">Prathicksha S</h3>
                    <p className="title">M.Sc. Decision & Computing Science Student</p>
                    <p className="subtitle">Aspiring Software Developer</p>
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <span>prathicksha006@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">🔗</span>
                      <span>linkedin.com/in/prathickshaselvaraj</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">💻</span>
                      <span>github.com/prathickshaselvaraj</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-highlights">
                <h4>Key Qualifications</h4>
                <div className="highlights-grid">
                  {resumeHighlights.map((highlight, index) => (
                    <div key={index} className="highlight-section">
                      <h5>{highlight.category}</h5>
                      <ul>
                        {highlight.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="resume-preview-note">
                <p>This is a preview of my resume. Download the full PDF for complete details including projects, skills, and achievements.</p>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <div className="download-section">
              <h3>Download My Resume</h3>
              <p>Get the complete resume with detailed information about my education, projects, skills, and experience.</p>
              
              <button className="download-btn" onClick={handleDownload}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="download-icon">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Download PDF Resume
              </button>

              <div className="file-info">
                <span className="file-detail">📄 PDF Format</span>
                <span className="file-detail">📏 2 Pages</span>
                <span className="file-detail">⚡ Updated Recently</span>
              </div>
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <p>Let's connect on professional platforms and stay in touch for opportunities and collaborations.</p>
              
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <p>Ready to discuss opportunities? Feel free to reach out directly.</p>
              
              <div className="contact-options">
                <a 
                  href="mailto:prathicksha006@gmail.com?subject=Opportunity Discussion"
                  className="contact-btn email-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                  Send Email
                </a>
                
                <a 
                  href="https://linkedin.com/in/prathickshaselvaraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn linkedin-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-cta">
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleDownload}>
                Download Resume
              </button>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resume {
          padding: 6rem 0;
          background: white;
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
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .resume-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .resume-preview {
          position: sticky;
          top: 2rem;
        }

        .resume-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .resume-header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .profile-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-info {
          text-align: center;
        }

        .name {
          font-size: 2rem;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.2rem;
          color: #1a202c;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: #64748b;
          font-size: 1rem;
          margin: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .contact-icon {
          font-size: 1rem;
        }

        .resume-highlights h4 {
          font-size: 1.3rem;
          color: #2563eb;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: center;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .highlight-section h5 {
          color: #1a202c;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .highlight-section ul {
          list-style: none;
          padding: 0;
        }

        .highlight-section li {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1rem;
        }

        .highlight-section li::before {
          content: '•';
          color: #2563eb;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .resume-preview-note {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #f1f5f9;
          text-align: center;
        }

        .resume-preview-note p {
          color: #64748b;
          font-size: 0.9rem;
          font-style: italic;
          margin: 0;
        }

        .resume-actions {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .download-section,
        .social-section,
        .quick-contact {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 16px;
          border-left: 4px solid #2563eb;
        }

        .download-section h3,
        .social-section h3,
        .quick-contact h3 {
          color: #2563eb;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .download-section p,
        .social-section p,
        .quick-contact p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .download-icon {
          transition: transform 0.3s ease;
        }

        .download-btn:hover .download-icon {
          transform: translateY(2px);
        }

        .file-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .file-detail {
          font-size: 0.9rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: white;
          color: #4a5568;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 2px solid #e2e8f0;
        }

        .social-link:hover {
          border-color: #2563eb;
          color: #2563eb;
          transform: translateX(8px);
        }

        .social-icon {
          display: flex;
          align-items: center;
        }

        .social-name {
          font-weight: 600;
        }

        .contact-options {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .email-btn {
          background: #10b981;
          color: white;
        }

        .email-btn:hover {
          background: #059669;
          transform: translateY(-2px);
        }

        .linkedin-btn {
          background: #0077b5;
          color: white;
        }

        .linkedin-btn:hover {
          background: #005885;
          transform: translateY(-2px);
        }

        .resume-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          color: white;
        }

        .cta-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1rem;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .resume {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .resume-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .resume-preview {
            position: static;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .profile-section {
            text-align: center;
          }

          .contact-options {
            flex-direction: column;
          }

          .file-info {
            flex-direction: column;
            text-align: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;