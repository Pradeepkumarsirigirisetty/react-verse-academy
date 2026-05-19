import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import './LabCard.css';

const LabCard = ({ lab }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/labs/${lab.id}`);
  };

  return (
    <div className="lab-card glass" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      <div className="lab-badge">{lab.difficulty}</div>
      <div className="lab-icon-wrapper">
        <FaLaptopCode className="lab-icon" />
      </div>
      <h3>{lab.title}</h3>
      <p>{lab.description}</p>
      <span className="lab-link">
        Start Lab <FaArrowRight />
      </span>
    </div>
  );
};

export default LabCard;
