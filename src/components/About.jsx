import React from 'react';

const About = () => {
  const interests = [
    'Full-Stack Development',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Backend Development',
    'Database Management',
    'Financial Technology',
    'Software Engineering',
    'Data-Driven Solutions'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about technology and continuous learning
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-paragraph">
              <p>
                I am currently pursuing my M.Sc. in Decision and Computing Science, where I'm building 
                a strong foundation in both computer science and finance. With a background in Computer 
                Science from school, I've grown passionate about combining analytical thinking with 
                programming to solve real-world problems.
              </p>
            </div>

            <div className="bio-paragraph">
              <p>
                Currently, I'm deepening my skills in full-stack development, data structures and 
                algorithms, and machine learning. I'm also actively working on projects using Python, 
                Java, and React, while exploring backend development and database management. My 
                interests lie at the intersection of technology and impact—especially in software 
                engineering, data-driven solutions, and AI.
              </p>
            </div>

            <div className="bio-paragraph">
              <p>
                My future goal is to secure a competitive internship that provides hands-on development 
                experience and to transition into a dynamic role in the tech industry after graduation. 
                I am focused on continuous learning, building impactful solutions, and contributing to 
                innovative projects in a professional setting.
              </p>
            </div>

            <div className="career-goals">
              <h3>Career Goals</h3>
              <ul>
                <li>Secure an internship with real development experience</li>
                <li>Strengthen full-stack and backend engineering skills</li>
                <li>Master DSA, core CS subjects, and backend systems</li>
                <li>Contribute to tech projects solving real-world problems</li>
                <li>Land a growth-oriented software developer role post-grad</li>
              </ul>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>M.Sc. Decision and Computing Science</h4>
                <p>3rd Year, 5th Semester</p>
                <span className="status">Currently Pursuing</span>
              </div>
            </div>

            <div className="interests-card">
              <h3>Areas of Interest</h3>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="leadership-card">
              <h3>Leadership</h3>
              <div className="leadership-item">
                <h4>Executive Director</h4>
                <p>Women Empowerment Cell (WEC)</p>
              </div>
              <div className="leadership-item">
                <h4>Public Relations Officer</h4>
                <p>Women Empowerment Cell (WEC)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
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

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          space-y: 2rem;
        }

        .bio-paragraph {
          margin-bottom: 2rem;
        }

        .bio-paragraph p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin: 0;
        }

        .career-goals {
          margin-top: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .career-goals h3 {
          color: #2563eb;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .career-goals ul {
          list-style: none;
          padding: 0;
        }

        .career-goals li {
          padding: 0.75rem 0;
          color: #4a5568;
          position: relative;
          padding-left: 1.5rem;
        }

        .career-goals li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-card,
        .interests-card,
        .leadership-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #2563eb;
        }

        .education-card h3,
        .interests-card h3,
        .leadership-card h3 {
          color: #2563eb;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .education-item h4 {
          color: #1a202c;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .education-item p {
          color: #64748b;
          margin-bottom: 0.5rem;
        }

        .status {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .interest-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .leadership-item {
          margin-bottom: 1.5rem;
        }

        .leadership-item:last-child {
          margin-bottom: 0;
        }

        .leadership-item h4 {
          color: #1a202c;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .leadership-item p {
          color: #64748b;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .career-goals,
          .education-card,
          .interests-card,
          .leadership-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;