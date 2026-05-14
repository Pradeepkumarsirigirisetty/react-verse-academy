import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import './LabCard.css';

const LabCard = ({ lab }) => {
  return (
    <div className="lab-card glass">
      <div className="lab-badge">{lab.difficulty}</div>
      <div className="lab-icon-wrapper">
        <FaLaptopCode className="lab-icon" />
      </div>
      <h3>{lab.title}</h3>
      <p>{lab.description}</p>
      <Link to={lab.path} className="lab-link">
        Start Lab <FaArrowRight />
      </Link>
    </div>
  );
};

export default LabCard;
