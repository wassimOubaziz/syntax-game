import React from 'react';
import './ResultPopup.css';

const ResultPopup = ({ show, result, onClose, onTryAgain }) => {
  if (!show) return null;

  const {
    playerName,
    points,
    wpm,
    mistakes,
    completionTime,
    language,
    timeLeft
  } = result;

  const calculateBonuses = () => {
    const wpmPoints = wpm * 10;
    const noMistakesBonus = mistakes === 0 ? 500 : 0;
    const mistakePenalty = mistakes * -50;
    const timeBonus = timeLeft * 10;

    return {
      wpmPoints,
      noMistakesBonus,
      mistakePenalty,
      timeBonus
    };
  };

  const bonuses = calculateBonuses();

  return (
    <div className="result-popup-overlay" onClick={onClose}>
      <div className="result-popup" onClick={e => e.stopPropagation()}>
        <div className="result-header">
          <h2>🎉 Excellent, {playerName}!</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">Final Score</span>
            <span className="stat-value highlight">{points} points</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Time</span>
            <span className="stat-value">{completionTime.toFixed(2)}s</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Speed</span>
            <span className="stat-value">{wpm} WPM</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Accuracy</span>
            <span className="stat-value">{mistakes === 0 ? 'Perfect!' : `${mistakes} mistake${mistakes === 1 ? '' : 's'}`}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Time Left</span>
            <span className="stat-value">{timeLeft}s</span>
          </div>
        </div>

        <div className="score-breakdown">
          <h3>Score Breakdown</h3>
          <div className="breakdown-item">
            <span>Speed Bonus (WPM × 10)</span>
            <span className="points">+{bonuses.wpmPoints}</span>
          </div>
          {bonuses.noMistakesBonus > 0 && (
            <div className="breakdown-item perfect">
              <span>Perfect Run Bonus</span>
              <span className="points">+{bonuses.noMistakesBonus}</span>
            </div>
          )}
          {bonuses.mistakePenalty < 0 && (
            <div className="breakdown-item penalty">
              <span>Mistakes Penalty ({mistakes} × -50)</span>
              <span className="points">{bonuses.mistakePenalty}</span>
            </div>
          )}
          <div className="breakdown-item">
            <span>Time Left Bonus (seconds × 10)</span>
            <span className="points">+{bonuses.timeBonus}</span>
          </div>
          <div className="breakdown-item total">
            <span>Total Score</span>
            <span className="points">{points}</span>
          </div>
        </div>

        <div className="scoring-rules">
          <h3>Scoring Rules</h3>
          <ul>
            <li>🚀 Speed: 10 points per WPM</li>
            <li>✨ Perfect Run: +500 bonus points</li>
            <li>❌ Mistakes: -50 points each</li>
            <li>⏱️ Time Left: +10 points per second</li>
          </ul>
        </div>

        <div className="result-actions">
          <button className="next-challenge-button" style={{ backgroundColor: '#65c96a' }} onClick={onTryAgain}>
            Next Challenge ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPopup;
