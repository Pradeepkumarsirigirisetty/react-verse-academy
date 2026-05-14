import React from 'react';
import LabCard from '../../components/LabCard/LabCard';
import { labsData } from '../../data/mockData';

const Labs = () => {
  return (
    <div className="labs-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Practice Labs</h1>
          <p>Apply your knowledge with these hands-on exercises and mini-projects.</p>
        </div>
      </header>

      <div className="container">
        <div className="grid-cards">
          {labsData.map(lab => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;
