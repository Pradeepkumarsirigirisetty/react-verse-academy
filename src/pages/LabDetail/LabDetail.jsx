import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { labsData } from '../../data/mockData';
import { labContent } from '../../data/labContent';
import { FaArrowLeft, FaCode, FaLightbulb, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import GreetingApp from './apps/GreetingApp';
import TaskManager from './apps/TaskManager';
import CharacterExplorer from './apps/CharacterExplorer';
import ProductCatalog from './apps/ProductCatalog';
import AuthFlow from './apps/AuthFlow';
import './LabDetail.css';

const labApps = {
  1: GreetingApp,
  2: TaskManager,
  3: CharacterExplorer,
  4: ProductCatalog,
  5: AuthFlow,
};

const LabDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const labId = parseInt(id);
  const lab = labsData.find(l => l.id === labId);
  const content = labContent[labId];
  const LiveApp = labApps[labId];
  const [showExplain, setShowExplain] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowExplain(false);
  }, [labId]);

  if (!lab || !content || !LiveApp) {
    return (
      <div className="lab-detail-page animate-fade-in">
        <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <h2>Lab Not Found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/labs')}>← Back to Labs</button>
        </div>
      </div>
    );
  }

  const prevLab = labsData.find(l => l.id === labId - 1);
  const nextLab = labsData.find(l => l.id === labId + 1);

  return (
    <div className="lab-detail-page animate-fade-in">
      {/* Header */}
      <header className="lab-detail-header">
        <div className="container">
          <button className="lab-back-button" onClick={() => navigate('/labs')}>
            <FaArrowLeft /> Back to Labs
          </button>
          <div className="lab-header-info">
            <div>
              <span className={`lab-diff-badge ${lab.difficulty.toLowerCase()}`}>{lab.difficulty}</span>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
            </div>
            <div className="lab-concepts">
              {content.concepts.map((c, i) => (
                <span key={i} className="concept-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content: App + Code side by side */}
      <div className="container">
        <div className="lab-split-view">
          {/* Live App */}
          <div className="lab-live-panel">
            <div className="panel-header">
              <span className="panel-dot green" /> Live Preview
            </div>
            <div className="lab-live-content">
              <LiveApp />
            </div>
          </div>

          {/* Source Code */}
          <div className="lab-code-panel">
            <div className="panel-header">
              <FaCode style={{ fontSize: '0.85rem' }} /> Source Code
            </div>
            <pre className="lab-code-block">
              <code>{content.sourceCode}</code>
            </pre>
          </div>
        </div>

        {/* Explain Button */}
        <div className="lab-explain-area">
          <button className="lab-explain-btn" onClick={() => setShowExplain(!showExplain)}>
            <FaLightbulb />
            {showExplain ? 'Hide Explanation' : 'Explain Every Line'}
          </button>
        </div>

        {/* Explanation Panel */}
        {showExplain && (
          <div className="lab-explanation-panel animate-fade-in">
            <div className="explanation-header">
              <h3><FaLightbulb /> Line-by-Line Explanation</h3>
              <button className="explanation-close" onClick={() => setShowExplain(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="explanation-list">
              {content.explanations.map((item, index) => (
                <div key={index} className="explanation-item">
                  <div className="explanation-line-num">{index + 1}</div>
                  <div className="explanation-content">
                    <code className="explanation-code">{item.line}</code>
                    <p className="explanation-text">{item.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="lab-nav-footer">
          {prevLab ? (
            <button className="lab-nav-btn" onClick={() => navigate(`/labs/${prevLab.id}`)}>
              <FaChevronLeft />
              <div><span className="lab-nav-label">Previous Lab</span><span className="lab-nav-title">{prevLab.title}</span></div>
            </button>
          ) : <div />}
          {nextLab ? (
            <button className="lab-nav-btn next" onClick={() => navigate(`/labs/${nextLab.id}`)}>
              <div><span className="lab-nav-label">Next Lab</span><span className="lab-nav-title">{nextLab.title}</span></div>
              <FaChevronRight />
            </button>
          ) : (
            <button className="lab-nav-btn next" onClick={() => navigate('/labs')}>
              <div><span className="lab-nav-label">🎉 All Done!</span><span className="lab-nav-title">Back to Labs</span></div>
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabDetail;
