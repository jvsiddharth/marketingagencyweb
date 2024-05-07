import React from 'react';
import './OurWork.css';

const OurWork = () => {
  return (
    <div className="our-work">
      <h2 className="section-title">Our Work</h2>
      <div className="work-grid">
        <div className="work-item">
          <h3 className="work-title">Project Name 1</h3>
          <p className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus et magna tempus, vel faucibus elit faucibus.
          </p>
        </div>
        <div className="work-item">
          <h3 className="work-title">Project Name 2</h3>
          <p className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus et magna tempus, vel faucibus elit faucibus.
          </p>
        </div>
        <div className="work-item">
          <h3 className="work-title">Project Name 3</h3>
          <p className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus et magna tempus, vel faucibus elit faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;