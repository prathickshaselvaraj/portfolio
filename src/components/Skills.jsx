import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillsData = {
    languages: {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90, description: 'Advanced proficiency in data analysis, ML, and backend development' },
        { name: 'Java', level: 85, description: 'Strong OOP skills, desktop applications, and system development' },
        { name: 'SQL', level: 80, description: 'Database design, complex queries, and data manipulation' },
        { name: 'JavaScript', level: 70, description: 'Frontend development and basic Node.js applications' },
        { name: 'R', level: 75, description: 'Statistical analysis, data visualization, and research projects' },
        { name: 'HTML/CSS', level: 85, description: 'Responsive web design and modern CSS techniques' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Tools',
      icon: '🛠️',
      skills: [
        { name: 'React', level: 80, description: 'Modern frontend development with hooks and components' },
        { name: 'Node.js', level: 65, description: 'Backend development and API creation (learning)' },
        { name: 'Streamlit', level: 85, description: 'Interactive web applications for data science projects' },
        { name: 'Git', level: 80, description: 'Version control, collaboration, and project management' },
        { name: 'MySQL', level: 85, description: 'Database administration and optimization' },
        { name: 'VS Code', level: 90, description: 'Primary development environment with extensions' }
      ]
    },
    libraries: {
      title: 'Libraries & Technologies',
      icon: '📚',
      skills: [
        { name: 'Pandas', level: 85, description: 'Data manipulation and analysis for Python projects' },
        { name: 'NumPy', level: 80, description: 'Numerical computing and array operations' },
        { name: 'Scikit-learn', level: 75, description: 'Machine learning algorithms and model building' },
        { name: 'Matplotlib', level: 80, description: 'Data visualization and plotting' },
        { name: 'Seaborn', level: 75, description: 'Statistical data visualization' },
        { name: 'JAX', level: 70, description: 'High-performance computing and numerical analysis' },
        { name: 'ggplot2', level: 75, description: 'Advanced data visualization in R' }
      ]
    },
    concepts: {
      title: 'CS Concepts & Subjects',
      icon: '🧠',
      skills: [
        { name: 'Data Structures & Algorithms', level: 80, description: 'Problem-solving with efficient algorithms' },
        { name: 'Object-Oriented Programming', level: 85, description: 'Design patterns and clean code practices' },
        { name: 'Database Management', level: 80, description: 'Relational databases and query optimization' },
        { name: 'Operating Systems', level: 75, description: 'System concepts and resource management' },
        { name: 'Computer Networks', level: 65, description: 'Basic networking concepts and protocols' },
        { name: 'Machine Learning', level: 70, description: 'Supervised learning and model evaluation' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        { name: 'Leadership', level: 90, description: 'Executive Director experience in WEC' },
        { name: 'Communication', level: 85, description: 'Public speaking and technical writing' },
        { name: 'Problem-solving', level: 88, description: 'Analytical thinking and creative solutions' },
        { name: 'Teamwork', level: 85, description: 'Collaborative project management' },
        { name: 'Time Management', level: 80, description: 'Balancing academics and leadership roles' },
        { name: 'Adaptability', level: 85, description: 'Learning new technologies quickly' }
      ]
    }
  };

  const categories = Object.keys(skillsData);

  const getSkillColor = (level) => {
    if (level >= 85) return '#10b981'; // Green
    if (level >= 75) return '#3b82f6'; // Blue
    if (level >= 65) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="skills-navigation">
          {categories.map((category) => (
            <button
              key={category}
              className={`nav-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="nav-icon">{skillsData[category].icon}</span>
              <span className="nav-label">{skillsData[category].title}</span>
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-header">
            <h3 className="category-title">
              {skillsData[activeCategory].icon} {skillsData[activeCategory].title}
            </h3>
          </div>

          <div className="skills-grid">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: getSkillColor(skill.level)
                    }}
                  ></div>
                </div>
                
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Programming Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Frameworks & Tools</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">CS Core Subjects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
          
          <div className="learning-journey">
            <h3>Currently Learning</h3>
            <div className="learning-items">
              <span className="learning-tag">Advanced React Patterns</span>
              <span className="learning-tag">Backend System Design</span>
              <span className="learning-tag">Deep Learning</span>
              <span className="learning-tag">Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
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
          max-width: 600px;
          margin: 0 auto;
        }

        .skills-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .nav-btn.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .nav-label {
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
        }

        .skills-content {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          margin-bottom: 3rem;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .category-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .skill-percentage {
          font-size: 0.9rem;
          font-weight: 700;
          opacity: 0.9;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom:H
           1rem;
        }

        .skill-progress {
          height: 100%;
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .skill-description {
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.4;
          margin: 0;
        }

        .skills-summary {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 1rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .learning-journey {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .learning-journey h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .learning-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .learning-tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .skills-navigation {
            gap: 0.5rem;
          }

          .nav-btn {
            padding: 0.75rem 1rem;
          }

          .nav-label {
            font-size: 0.8rem;
          }

          .skills-content {
            padding: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-summary {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;