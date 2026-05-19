import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modulesData } from '../../data/mockData';
import { moduleContent } from '../../data/moduleContent';
import * as Icons from 'react-icons/fa';
import './ModuleDetail.css';

const ModuleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleId = parseInt(id);
  const module = modulesData.find(m => m.id === moduleId);
  const content = moduleContent[moduleId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [moduleId]);

  if (!module || !content) {
    return (
      <div className="module-detail-page animate-fade-in">
        <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <h2>Module Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The module you're looking for doesn't exist.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/modules')}>
            ← Back to Syllabus
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[module.icon] || Icons.FaBook;
  const prevModule = modulesData.find(m => m.id === moduleId - 1);
  const nextModule = modulesData.find(m => m.id === moduleId + 1);

  return (
    <div className="module-detail-page animate-fade-in">
      {/* Hero Header */}
      <header className="module-detail-hero">
        <div className="container">
          <button className="back-button" onClick={() => navigate('/modules')}>
            <Icons.FaArrowLeft /> Back to Syllabus
          </button>
          <div className="hero-content">
            <div className="hero-icon-wrapper">
              <IconComponent className="hero-icon" />
            </div>
            <div className="hero-text">
              <span className="module-badge">Module {module.id} of {modulesData.length}</span>
              <h1>{content.title}</h1>
              <p className="hero-subtitle">{content.subtitle}</p>
            </div>
          </div>
          {/* Progress indicator */}
          <div className="module-progress-bar">
            {modulesData.map((m) => (
              <div
                key={m.id}
                className={`progress-dot ${m.id === moduleId ? 'active' : ''} ${m.id < moduleId ? 'completed' : ''}`}
                onClick={() => navigate(`/modules/${m.id}`)}
                title={m.title}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="container">
        <div className="module-content-wrapper">
          {content.sections.map((section, index) => (
            <section key={index} className="content-section glass" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="section-number">{String(index + 1).padStart(2, '0')}</div>
              <h2 className="section-heading">{section.heading}</h2>
              <div className="section-text">
                {section.content.split('\n').map((paragraph, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/`(.*?)`/g, '<code>$1</code>')
                      .replace(/^• /, '• ')
                  }} />
                ))}
              </div>
              {section.code && (
                <div className="code-block-wrapper">
                  <div className="code-block-header">
                    <Icons.FaCode className="code-icon" />
                    <span>Code Example</span>
                  </div>
                  <pre className="code-block">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Navigation between modules */}
        <div className="module-nav-footer">
          {prevModule ? (
            <button className="module-nav-btn prev" onClick={() => navigate(`/modules/${prevModule.id}`)}>
              <Icons.FaChevronLeft />
              <div>
                <span className="nav-label">Previous Module</span>
                <span className="nav-title">{prevModule.title}</span>
              </div>
            </button>
          ) : <div />}
          {nextModule ? (
            <button className="module-nav-btn next" onClick={() => navigate(`/modules/${nextModule.id}`)}>
              <div>
                <span className="nav-label">Next Module</span>
                <span className="nav-title">{nextModule.title}</span>
              </div>
              <Icons.FaChevronRight />
            </button>
          ) : (
            <button className="module-nav-btn next completed-btn" onClick={() => navigate('/modules')}>
              <div>
                <span className="nav-label">🎉 All Done!</span>
                <span className="nav-title">Back to Syllabus</span>
              </div>
              <Icons.FaCheckCircle />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
