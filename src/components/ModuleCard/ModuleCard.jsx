import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import './ModuleCard.css';

const ModuleCard = ({ module }) => {
  const navigate = useNavigate();
  // Dynamically render icon based on string name from mock data
  const IconComponent = Icons[module.icon] || Icons.FaBook;

  const handleClick = () => {
    navigate(`/modules/${module.id}`);
  };

  return (
    <div className="module-card glass" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      <div className="module-card-header">
        <div className="module-icon-wrapper">
          <IconComponent className="module-icon" />
        </div>
        <h3>{module.title}</h3>
      </div>
      <p className="module-description">{module.description}</p>
      <div className="module-lessons">
        <h4>Key Topics:</h4>
        <ul>
          {module.lessons.map((lesson, index) => (
            <li key={index}>
              <Icons.FaCheckCircle className="lesson-check-icon" />
              {lesson}
            </li>
          ))}
        </ul>
      </div>
      <div className="module-card-cta">
        <span>Start Reading <Icons.FaArrowRight className="cta-arrow" /></span>
      </div>
    </div>
  );
};

export default ModuleCard;
