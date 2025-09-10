import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'My Journey into Full-Stack Development',
      excerpt: 'Exploring the transition from theoretical computer science to hands-on full-stack development, sharing lessons learned and challenges overcome.',
      category: 'journey',
      readTime: '5 min read',
      date: 'March 15, 2024',
      image: '/api/placeholder/400/250',
      tags: ['Full-Stack', 'Learning', 'Career'],
      featured: true
    },
    {
      id: 2,
      title: 'Mastering Data Structures: A Practical Approach',
      excerpt: 'Breaking down complex data structures with real-world examples and implementation tips that helped me ace technical interviews.',
      category: 'dsa',
      readTime: '8 min read',
      date: 'March 10, 2024',
      image: '/api/placeholder/400/250',
      tags: ['DSA', 'Algorithms', 'Interview Prep']
    },
    {
      id: 3,
      title: 'Building My First ML Project: Sentiment Analysis',
      excerpt: 'A detailed walkthrough of creating a sentiment prediction system using Python and Scikit-learn, from data preprocessing to model deployment.',
      category: 'projects',
      readTime: '12 min read',
      date: 'March 5, 2024',
      image: '/api/placeholder/400/250',
      tags: ['Machine Learning', 'Python', 'NLP']
    },
    {
      id: 4,
      title: 'Preparing for Tech Internships: A Student\'s Guide',
      excerpt: 'Essential tips for landing your first tech internship, including resume building, technical preparation, and interview strategies.',
      category: 'career',
      readTime: '10 min read',
      date: 'February 28, 2024',
      image: '/api/placeholder/400/250',
      tags: ['Career', 'Internships', 'Interview Tips']
    },
    {
      id: 5,
      title: 'Graph Algorithms in Action: Smart Delivery System',
      excerpt: 'Implementing A* search algorithm for route optimization in logistics, exploring the practical applications of graph theory.',
      category: 'dsa',
      readTime: '15 min read',
      date: 'February 20, 2024',
      image: '/api/placeholder/400/250',
      tags: ['Algorithms', 'Graph Theory', 'Optimization']
    },
    {
      id: 6,
      title: 'Leadership Lessons from Women Empowerment Cell',
      excerpt: 'Insights gained from leading the Women Empowerment Cell, organizing tech events, and promoting diversity in technology.',
      category: 'journey',
      readTime: '7 min read',
      date: 'February 15, 2024',
      image: '/api/placeholder/400/250',
      tags: ['Leadership', 'Diversity', 'Tech Events']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts', count: blogPosts.length },
    { key: 'journey', label: 'Tech Journey', count: blogPosts.filter(post => post.category === 'journey').length },
    { key: 'dsa', label: 'DSA Tips', count: blogPosts.filter(post => post.category === 'dsa').length },
    { key: 'projects', label: 'Project Walkthroughs', count: blogPosts.filter(post => post.category === 'projects').length },
    { key: 'career', label: 'Career Insights', count: blogPosts.filter(post => post.category === 'career').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tech Blog</h2>
          <p className="section-subtitle">
            Sharing my learning journey, technical insights, and career preparation tips
          </p>
        </div>

        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
              <span className="post-count">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="blog-content">
          {selectedCategory === 'all' && featuredPost && (
            <div className="featured-section">
              <h3 className="section-subtitle">Featured Post</h3>
              <article className="featured-post">
                <div className="post-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-date">{featuredPost.date}</span>
                    <span className="post-read-time">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="post-title">{featuredPost.title}</h3>
                  <p className="post-excerpt">{featuredPost.excerpt}</p>
                  <div className="post-tags">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button className="read-more-btn">
                    Read Full Article
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          )}

          <div className="posts-section">
            <h3 className="section-subtitle">
              {selectedCategory === 'all' ? 'Recent Posts' : categories.find(cat => cat.key === selectedCategory)?.label}
            </h3>
            <div className="posts-grid">
              {regularPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-overlay">
                      <button className="read-btn">Read Article</button>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-cta">
          <div className="cta-content">
            <h3>Want to read more?</h3>
            <p>
              I'm constantly sharing new insights about my learning journey, technical projects, 
              and career preparation. Follow me on LinkedIn or GitHub to stay updated with my latest posts.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://linkedin.com/in/prathickshaselvaraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow on LinkedIn
              </a>
              <a 
                href="https://github.com/prathickshaselvaraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog {
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
          margin-bottom: 3rem;
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
          margin: 0 auto 2rem;
        }

        .blog-categories {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 2px solid #e2e8f0;
          color: #64748b;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .category-btn.active {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .post-count {
          background: rgba(0, 0, 0, 0.1);
          color: inherit;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .category-btn.active .post-count {
          background: rgba(255, 255, 255, 0.2);
        }

        .blog-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .featured-section h3 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .featured-post {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .post-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .post-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #64748b;
        }

        .post-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .post-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: #f1f5f9;
          color: #475569;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .read-more-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .posts-section h3 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .card-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .image-overlay {
          opacity: 1;
        }

        .read-btn {
          background: white;
          color: #2563eb;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .blog-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          color: white;
          margin-top: 4rem;
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
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
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
          .blog {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .blog-categories {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .featured-post {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .post-image {
            height: 250px;
          }

          .post-content {
            padding: 1.5rem;
          }

          .post-title {
            font-size: 1.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;