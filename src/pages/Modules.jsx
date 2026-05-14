import React, { useState } from 'react';
import ModuleCard from '../components/ModuleCard/ModuleCard';
import { modulesData } from '../data/mockData';
import { FaSearch } from 'react-icons/fa';

const Modules = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = modulesData.filter(module => 
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modules-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Course Syllabus</h1>
          <p>Comprehensive curriculum covering everything from React basics to advanced state management.</p>
        </div>
      </header>

      <div className="container">
        <div className="search-bar" style={{ marginBottom: '3rem', position: 'relative', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
          <FaSearch style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            className="input-field" 
            placeholder="Search modules..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        <div className="grid-cards">
          {filteredModules.length > 0 ? (
            filteredModules.map(module => (
              <ModuleCard key={module.id} module={module} />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              No modules found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modules;
