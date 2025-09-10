import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description:
        'A comprehensive CLI CRUD application built with Java and MySQL for managing student records. Features include student registration, grade tracking, and data management with robust database operations.',
      technologies: ['Java', 'MySQL', 'CLI'],
      category: 'fullstack',
      features: ['CRUD Operations', 'Database Management', 'CLI Interface', 'Data Validation'],
      demoLink: '#',
      codeLink: 'https://github.com/prathickshaselvaraj/student-management-system',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Option Pricing with Binomial Model',
      description:
        'Advanced financial modeling application using Python, Streamlit, and JAX to estimate implied volatility through binomial options pricing model and Newton‑Raphson method.',
      technologies: ['Python', 'Streamlit', 'JAX', 'NumPy'],
      category: 'datascience',
      features: ['Financial Modeling', 'Newton‑Raphson Method', 'Interactive UI', 'Real‑time Calculations'],
      demoLink: '#',
      codeLink: 'https://github.com/prathickshaselvaraj/option-pricing',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Sentiment Prediction System',
      description:
        'Machine learning and NLP system for classifying text sentiment using Python and Scikit‑learn. Implements various ML algorithms for accurate sentiment analysis with data preprocessing.',
      technologies: ['Python', 'Scikit‑learn', 'NLP', 'Pandas'],
      category: 'ml',
      features: ['Text Classification', 'ML Algorithms', 'Data Preprocessing', 'Model Evaluation'],
      demoLink: '#',
      codeLink: 'https://github.com/prathickshaselvaraj/sentiment-prediction',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Smart Parcel Delivery System',
      description:
        'Academic logistics simulation project using Python and graph algorithms, specifically implementing A* Search algorithm for optimal route planning in parcel delivery systems.',
      technologies: ['Python', 'Graph Algorithms', 'A* Search', 'Data Structures'],
      category: 'algorithms',
      features: ['Route Optimization', 'Graph Algorithms', 'A* Search Implementation', 'Logistics Simulation'],
      demoLink: '#',
      codeLink: 'https://github.com/prathickshaselvaraj/smart-parcel-delivery',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Gamma Distribution Analysis',
      description:
        'Statistical modeling and visualization project using R and ggplot2 for comprehensive analysis of Gamma distribution patterns, including parameter estimation and data visualization.',
      technologies: ['R', 'ggplot2', 'Statistics', 'Data Visualization'],
      category: 'datascience',
      features: ['Statistical Modeling', 'Data Visualization', 'Parameter Estimation', 'Distribution Analysis'],
      demoLink: '#',
      codeLink: 'https://github.com/prathickshaselvaraj/gamma-distribution',
      image: '/api/placeholder/400/250'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'datascience', label: 'Data Science' },
    { key: 'algorithms', label: 'Algorithms' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link demo-link">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="project-link code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a
            href="https://github.com/prathickshaselvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All on GitHub
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* (your CSS here — omitted for brevity) */
      `}</style>
    </section>
  );
};

export default Projects;
