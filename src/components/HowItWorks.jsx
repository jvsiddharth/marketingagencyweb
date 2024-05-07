import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="section-title">How it Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3 className="step-title">Step 1</h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentesque
            felis, non sollicitudin diam bibendum a.
          </p>
        </div>
        <div className="step">
          <h3 className="step-title">Step 2</h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentesque
            felis, non sollicitudin diam bibendum a.
          </p>
        </div>
        <div className="step">
          <h3 className="step-title">Step 3</h3>
          <p className="step-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentesque
            felis, non sollicitudin diam bibendum a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
