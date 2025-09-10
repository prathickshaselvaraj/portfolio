import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'leadership',
      title: 'Executive Director',
      organization: 'Women Empowerment Cell (WEC)',
      period: 'Current',
      description: 'Leading strategic operations to promote women in technology and create inclusive opportunities in the tech industry.',
      responsibilities: [
        'Spearhead strategic initiatives to empower women in technology',
        'Organize workshops, seminars, and tech-focused events',
        'Lead outreach campaigns to increase female participation in STEM',
        'Collaborate with industry professionals for mentorship programs',
        'Manage team operations and coordinate organizational activities'
      ],
      achievements: [
        'Successfully organized multiple tech workshops with 100+ participants',
        'Established partnerships with leading tech companies',
        'Increased WEC membership by 150% during tenure',
        'Launched mentorship program connecting students with industry experts'
      ],
      skills: ['Leadership', 'Event Management', 'Strategic Planning', 'Team Coordination', 'Public Speaking'],
      icon: '👑'
    },
    {
      id: 2,
      type: 'leadership',
      title: 'Public Relations Officer',
      organization: 'Women Empowerment Cell (WEC)',
      period: 'Previous Role',
      description: 'Managed external and internal communications while coordinating high-impact events and outreach initiatives.',
      responsibilities: [
        'Managed external communications and brand representation',
        'Coordinated internal team communications and updates',
        'Organized hackathons and technical competitions',
        'Led social media campaigns and digital outreach',
        'Facilitated collaboration between different departments'
      ],
      achievements: [
        'Increased social media engagement by 200%',
        'Successfully coordinated 3 major hackathons',
        'Established communication protocols for efficient operations',
        'Built strong relationships with external stakeholders'
      ],
      skills: ['Communication', 'Event Planning', 'Social Media Management', 'Stakeholder Relations', 'Content Creation'],
      icon: '📢'
    }
  ];

  const academicProjects = [
    {
      title: 'Student Management System',
      type: 'Full-Stack Development',
      technologies: ['Java', 'MySQL', 'CLI'],
      description: 'Comprehensive CRUD application for managing student records with robust database operations.',
      impact: 'Streamlined student data management processes',
      duration: '3 months'
    },
    {
      title: 'Option Pricing Model',
      type: 'Financial Technology',
      technologies: ['Python', 'Streamlit', 'JAX'],
      description: 'Advanced financial modeling using binomial options pricing and Newton-Raphson method.',
      impact: 'Accurate implied volatility estimation for financial derivatives',
      duration: '4 months'
    },
    {
      title: 'Sentiment Analysis System',
      type: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'NLP'],
      description: 'ML-powered sentiment classification system with comprehensive text preprocessing.',
      impact: 'Achieved 87% accuracy in sentiment prediction',
      duration: '2 months'
    },
    {
      title: 'Smart Delivery System',
      type: 'Algorithm Design',
      technologies: ['Python', 'Graph Algorithms', 'A*'],
      description: 'Logistics optimization using A* search algorithm for efficient route planning.',
      impact: 'Reduced delivery time by 30% in simulation',
      duration: '6 weeks'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Leadership</h2>
          <p className="section-subtitle">
            Building leadership skills while gaining hands-on technical experience
          </p>
        </div>

        <div className="experience-content">
          {/* Leadership Experience */}
          <div className="leadership-section">
            <h3 className="subsection-title">
              <span className="title-icon">🌟</span>
              Leadership Roles
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="marker-icon">{exp.icon}</span>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="card-header">
                        <div className="title-section">
                          <h4 className="role-title">{exp.title}</h4>
                          <p className="organization">{exp.organization}</p>
                        </div>
                        <span className="period-badge">{exp.period}</span>
                      </div>
                      
                      <p className="role-description">{exp.description}</p>
                      
                      <div className="details-grid">
                        <div className="responsibilities">
                          <h5>Key Responsibilities</h5>
                          <ul>
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="achievements">
                          <h5>Major Achievements</h5>
                          <ul>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="skills-gained">
                        <h5>Skills Developed</h5>
                        <div className="skills-tags">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div className="projects-section">
            <h3 className="subsection-title">
              <span className="title-icon">🚀</span>
              Academic Project Experience
            </h3>
            
            <div className="projects-grid">
              {academicProjects.map((project, index) => (
                <div key={index} className="project-experience-card">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <span className="project-type">{project.type}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <span className="detail-label">Impact:</span>
                      <span className="detail-value">{project.impact}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="experience-summary">
            <div className="summary-stats">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Leadership Roles</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Events Organized</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🌱</div>
                <div className="stat-content">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
              </div>
            </div>
            
            <div className="next-goals">
              <h4>What's Next?</h4>
              <p>
                I'm actively seeking internship opportunities where I can apply my leadership experience 
                and technical skills in a professional development environment. My goal is to contribute 
                to meaningful projects while continuing to grow as a software developer.
              </p>
              <div className="goals-list">
                <span className="goal-item">🎯 Secure Development Internship</span>
                <span className="goal-item">💡 Contribute to Open Source</span>
                <span className="goal-item">🚀 Build Production Applications</span>
                <span className="goal-item">🤝 Mentor Other Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience {
          padding: 6rem 0;
          background: #f8fafc;
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

        .experience-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .subsection-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 2rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 2rem;
        }

        .title-icon {
          font-size: 1.5rem;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -1.5rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: white;
          border: 3px solid #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .marker-icon {
          font-size: 1.2rem;
        }

        .timeline-content {
          margin-left: 2rem;
        }

        .experience-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #2563eb;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .role-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.25rem;
        }

        .organization {
          color: #2563eb;
          font-weight: 600;
          margin: 0;
        }

        .period-badge {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .role-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .responsibilities h5,
        .achievements h5 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .responsibilities ul,
        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .responsibilities li,
        .achievements li {
          color: #4a5568;
          padding: 0.4rem 0;
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .responsibilities li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .achievements li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: bold;
        }

        .skills-gained h5 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-experience-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-top: 4px solid #7c3aed;
          transition: transform 0.3s ease;
        }

        .project-experience-card:hover {
          transform: translateY(-4px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
        }

        .project-type {
          background: #f3e8ff;
          color: #7c3aed;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-description {
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .project-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .detail-label {
          font-weight: 600;
          color: #4a5568;
        }

        .detail-value {
          color: #2563eb;
          font-weight: 500;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-badge {
          background: #f1f5f9;
          color: #475569;
          padding: 0.3rem 0.6rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Experience Summary */
        .experience-summary {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #2563eb;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
        }

        .next-goals {
          text-align: center;
        }

        .next-goals h4 {
          font-size: 1.5rem;
          color: #2563eb;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .next-goals p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .goals-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .goal-item {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .experience {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .goals-list {
            flex-direction: column;
            align-items: center;
          }

          .experience-summary {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;