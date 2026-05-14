import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaYoutube, FaBook } from 'react-icons/fa';

const Resources = () => {
  const resourceLinks = [
    {
      title: 'Official React Documentation',
      description: 'The best place to start. Comprehensive guides and API references.',
      url: 'https://react.dev/',
      icon: <FaBook />
    },
    {
      title: 'Vite Documentation',
      description: 'Learn how to configure and use the Vite build tool.',
      url: 'https://vitejs.dev/',
      icon: <FaBook />
    },
    {
      title: 'React Router Documentation',
      description: 'Everything you need to know about routing in React.',
      url: 'https://reactrouter.com/',
      icon: <FaBook />
    },
    {
      title: 'React Icons',
      description: 'Search and find the perfect icons for your React projects.',
      url: 'https://react-icons.github.io/react-icons/',
      icon: <FaExternalLinkAlt />
    },
    {
      title: 'Traversy Media React Crash Course',
      description: 'A great video tutorial for absolute beginners.',
      url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
      icon: <FaYoutube />
    },
    {
      title: 'React Awesome Repository',
      description: 'A curated list of awesome React resources, libraries, and tools.',
      url: 'https://github.com/enaqx/awesome-react',
      icon: <FaGithub />
    }
  ];

  return (
    <div className="resources-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Learning Resources</h1>
          <p>Curated links and documentation to help you on your React journey.</p>
        </div>
      </header>

      <div className="container">
        <div className="grid-cards">
          {resourceLinks.map((resource, index) => (
            <a 
              key={index} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  background: 'var(--surface-color)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary-color)', fontSize: '1.25rem'
                }}>
                  {resource.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{resource.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>{resource.description}</p>
              <div style={{ marginTop: '1.5rem', color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Visit Link <FaExternalLinkAlt style={{ fontSize: '0.875rem' }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
