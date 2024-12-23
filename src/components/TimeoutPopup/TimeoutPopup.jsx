import React from 'react';
import './TimeoutPopup.css';

const TimeoutPopup = ({ show, onTryAgain, onClose }) => {
  if (!show) return null;

  return (
    <div className="timeout-popup-overlay" onClick={onClose}>
      <div className="timeout-popup" onClick={e => e.stopPropagation()}>
        <div className="timeout-content">
          <button className="close-button" onClick={onClose}>×</button>
          <div className="timeout-icon">⏰</div>
          <h2>Time's Up!</h2>
          <p>Don't worry! Practice makes perfect. Ready to try again?</p>
          
          <div className="timeout-tips">
            <h3>Quick Tips</h3>
            <ul>
              <li>🎯 Focus on accuracy first, speed will follow</li>
              <li>⌨️ Practice proper typing posture</li>
              <li>👀 Read ahead while typing</li>
              <li>🔄 Take short breaks between attempts</li>
            </ul>
          </div>

          <div className="timeout-actions">
            <button className="try-again-button" onClick={onTryAgain}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeoutPopup;
