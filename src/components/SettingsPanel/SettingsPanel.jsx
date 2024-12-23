import "./SettingsPanel.css";
import { useState, useEffect } from "react";

const SettingsPanel = ({
  onClose,
  onResetScores,
  onTimeLimitChange,
  selectedLanguage,
  onLanguageChange,
}) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Function to handle timer change
  const handleTimeChange = (e) => {
    const selectedTime = parseInt(e.target.value);
    onTimeLimitChange(selectedTime);
    localStorage.setItem("timeLimit", selectedTime);
  };

  const changeTheme = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }

  return (
    <div className="settings-overlay">
      <div className="settings-container">
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-button" onClick={onClose} title="Close">
            &times;
          </button>
        </div>
        <div className="settings-content">
          <h3>Game</h3>
          <p className="settings-label">
            Programming Language:{" "}
            <select
              name="language"
              id="language"
              className="choices"
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </p>

          <p className="settings-label">Time limit:</p>

          <select
            name="time-limit"
            id="time-limit"
            className="choices"
            onChange={handleTimeChange} // Call handleTimeChange function on selection
            defaultValue={localStorage.getItem("timeLimit") || "15"}
          >
            <option value="15">15 seconds</option>
            <option value="30">30 seconds</option>
            <option value="60">60 seconds</option>
          </select>

          <button
            className="reset-scores-button"
            onClick={onResetScores} // Call resetScores function on click
            title="Reset scores"
          >
            Reset scores
          </button>

          <h3>Personalization</h3>

          <p className="settings-label">Color theme:</p>
          <select name="theme" id="theme" className="choices" onChange={changeTheme} value={theme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <p className="coming-soon">More coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
