import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./SyntaxSprint.css";
import SettingsPanel from "../SettingsPanel/SettingsPanel";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import ResultPopup from "../ResultPopup/ResultPopup";
import TimeoutPopup from "../TimeoutPopup/TimeoutPopup";
import { jsSnippets } from "../../assets/js-snippets";
import { pythonSnippets } from "../../assets/python-snippets";
import { javaSnippets } from "../../assets/java-snippets";
import { cppSnippets } from "../../assets/cpp-snippets";
import { getScores, addScore, calculatePoints, getPerfectRuns } from "../../services/scoreService";

const SyntaxSprint = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "javascript"
  );
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("playerName") || ""
  );
  const [scores, setScores] = useState(getScores());
  const [showNamePrompt, setShowNamePrompt] = useState(!localStorage.getItem("playerName"));
  const [showPlayerSelect, setShowPlayerSelect] = useState(false);
  const [players, setPlayers] = useState(
    () => JSON.parse(localStorage.getItem("players") || "[]")
  );

  const getSnippets = () => {
    switch (selectedLanguage) {
      case "python":
        return pythonSnippets;
      case "java":
        return javaSnippets;
      case "cpp":
        return cppSnippets;
      default:
        return jsSnippets;
    }
  };

  const codeBlocks = getSnippets();

  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    localStorage.getItem("timeLimit") || 15
  );
  const [mistakes, setMistakes] = useState(0);
  const [wins, setWins] = useState(
    () => Number(localStorage.getItem("wins")) || 0
  );
  const [losses, setLosses] = useState(
    () => Number(localStorage.getItem("losses")) || 0
  );
  const [gameStatus, setGameStatus] = useState("playing");
  const [completionTime, setCompletionTime] = useState(null);
  const [code, setCode] = useState(codeBlocks[0]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [selectedTimeLimit, setSelectedTimeLimit] = useState(
    localStorage.getItem("selectedTimeLimit") || "15"
  );
  const [showResults, setShowResults] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [showTimeout, setShowTimeout] = useState(false);

  const tryAgainButtonRef = useRef(null);

  useEffect(() => {
    if (playerName) {
      localStorage.setItem("playerName", playerName);
    }
  }, [playerName]);

  // Function to handle player selection or creation
  const handlePlayerSelect = (name) => {
    if (name === "new") {
      setShowNamePrompt(true);
    } else {
      setPlayerName(name);
    }
    setShowPlayerSelect(false);
  };

  // Function to add new player
  const addNewPlayer = (name) => {
    const newPlayers = [...players];
    if (!newPlayers.includes(name)) {
      newPlayers.push(name);
      setPlayers(newPlayers);
      localStorage.setItem("players", JSON.stringify(newPlayers));
    }
  };

  const handleNameSubmit = (name) => {
    setPlayerName(name);
    setShowNamePrompt(false);
    addNewPlayer(name);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStatus !== "playing") return;

      if (!startTime && e.key.length === 1) {
        setStartTime(Date.now());
      }

      // Prevent default behavior for tab and space (when in code)
      if ((e.key === "Tab" || e.key === " ") && currentIndex < code.length) {
        e.preventDefault();
      }

      // Handle tab key
      if (e.key === "Tab") {
        // Check if next 4 characters are spaces
        const nextFourChars = code.slice(currentIndex, currentIndex + 4);
        if (nextFourChars === "    ") {
          setInput((prevInput) => prevInput + "    ");
          setCurrentIndex((prevIndex) => prevIndex + 4);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
        return;
      }

      // Handle space key
      if (e.key === " ") {
        if (code[currentIndex] === " ") {
          setInput((prevInput) => prevInput + " ");
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
        return;
      }

      // Handle Enter key
      if (e.key === "Enter") {
        if (code[currentIndex] === "\n") {
          setInput((prevInput) => prevInput + "\n");
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
        return;
      }

      // Handle regular characters
      if (e.key.length === 1 && e.key !== " ") {
        if (code[currentIndex] === e.key) {
          setInput((prevInput) => prevInput + e.key);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
      }

      // Check if game is complete
      if (currentIndex + 1 === code.length) {
        handleGameEnd(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, code, gameStatus, startTime]);

  useEffect(() => {
    if (timeLeft === 0 && gameStatus === "playing") {
      handleGameEnd(false);
      setShowTimeout(true);
      setGameStatus("timeout"); // Add this line to prevent multiple timeouts
    }
  }, [timeLeft, gameStatus]);

  const handleGameEnd = (won) => {
    if (won) {
      const timeTaken = (Date.now() - startTime) / 1000;
      setCompletionTime(timeTaken);
      const currentWpm = Math.round((code.length / 5) / (timeTaken / 60));
      const points = calculatePoints(currentWpm, mistakes, timeLeft, code.length);
      
      // Update scores
      const newScores = addScore(
        playerName || "Anonymous",
        selectedLanguage,
        points,
        mistakes,
        currentWpm,
        timeLeft
      );
      setScores(newScores);
      setGameStatus("win");
      
      // Set game result for popup
      setGameResult({
        playerName: playerName || "Anonymous",
        points,
        wpm: currentWpm,
        mistakes,
        completionTime: timeTaken,
        language: selectedLanguage,
        timeLeft
      });
      setShowResults(true);
    } else {
      setGameStatus("lose");
    }
  };

  const handleTryAgain = () => {
    setGameStatus("playing");
    setCurrentIndex(0);
    setInput("");
    setMistakes(0);
    setStartTime(null);
    setTimeLeft(parseInt(selectedTimeLimit));
    setCompletionTime(0);
    setWpm(0);
    setShowResults(false);
    setShowTimeout(false);
    setCode(getSnippets()[Math.floor(Math.random() * getSnippets().length)]);
  };

  const handleTimeoutClose = () => {
    setShowTimeout(false);
    setGameStatus("idle");
  };

  useEffect(() => {
    if (gameStatus === "win") {
      const notification = new Audio('/success.mp3'); // Add this sound file to your public folder
      notification.play().catch(e => console.log('Audio play failed:', e));
    }
  }, [gameStatus]);

  // Function to handle time limit selection
  const handleTimeLimitchange = (time) => {
    setSelectedTimeLimit(time);
    setTimeLeft(time);
    localStorage.setItem("selectedTimeLimit", time);
  };

  // Function to reset wins and losses
  const resetScores = () => {
    let text =
      "Are you sure you want to reset your scores?\nThis cannot be undone!";
    if (confirm(text)) {
      setWins(0);
      setLosses(0);
      localStorage.setItem("wins", 0);
      localStorage.setItem("losses", 0);
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    const newCodeBlocks = getSnippets();
    const randomCode =
      newCodeBlocks[Math.floor(Math.random() * newCodeBlocks.length)];
    setCode(randomCode);
    setInput("");
    setCurrentIndex(0);
    setStartTime(null);
    setWpm(0);
    setTimeLeft(localStorage.getItem("timeLimit") || 15);
    setMistakes(0);
    setCompletionTime(null);
    setGameStatus("playing");
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  useEffect(() => {
    if (startTime && timeLeft > 0 && gameStatus === "playing") {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [startTime, timeLeft, gameStatus]);

  useEffect(() => {
    if (startTime && currentIndex > 0 && gameStatus === "playing") {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60;
      const wordsTyped = currentIndex / 5;
      const calculatedWpm = Math.floor(wordsTyped / timeElapsed);

      if (calculatedWpm >= 0) {
        setWpm(calculatedWpm);
      } else {
        setWpm(0);
      }
    }
  }, [currentIndex, startTime, gameStatus]);

  // Persist wins and losses to localStorage when they change
  useEffect(() => {
    localStorage.setItem("wins", wins);
  }, [wins]);

  useEffect(() => {
    localStorage.setItem("losses", losses);
  }, [losses]);

  return (
    <div className="game-container">
      {showPlayerSelect ? (
        <div className="overlay">
          <div className="modal player-modal">
            <h2>Select Player</h2>
            <div className="player-list">
              {players.map((name, index) => (
                <button
                  key={index}
                  className="player-button"
                  onClick={() => handlePlayerSelect(name)}
                >
                  <span className="player-icon">👤</span>
                  {name}
                </button>
              ))}
              <button
                className="new-player-button"
                onClick={() => handlePlayerSelect("new")}
              >
                <span className="plus-icon">+</span>
                New Player
              </button>
            </div>
          </div>
        </div>
      ) : showNamePrompt ? (
        <div className="overlay">
          <div className="modal name-modal">
            <h2>Enter Your Name</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && playerName.trim()) {
                    handleNameSubmit(playerName);
                  }
                }}
              />
              <button
                className="primary-button"
                onClick={() => handleNameSubmit(playerName)}
                disabled={!playerName.trim()}
              >
                Start Playing
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="game-content">
          <div className="header">
            <div className="player-info">
              <span className="player-name">{playerName}</span>
              <button
                className="change-player-button"
                onClick={() => setShowPlayerSelect(true)}
                title="Change Player"
              >
                <span className="icon">↺</span>
              </button>
            </div>
            <div className="stats-bar">
              <div className="stat">
                <span className="stat-label">Time</span>
                <span className="stat-value">{timeLeft}s</span>
              </div>
              <div className="stat">
                <span className="stat-label">WPM</span>
                <span className="stat-value">{wpm}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Mistakes</span>
                <span className="stat-value">{mistakes}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Score</span>
                <span className="stat-value">{wins}</span>
              </div>
            </div>
          </div>

          <div className="code-container">
            <pre className="code-block">
              <code>
                {gameStatus === "playing" &&
                  code.split("").map((char, idx) => {
                    let colorClass = "untyped";
                    if (idx < currentIndex) {
                      colorClass = input[idx] === char ? "correct" : "incorrect";
                    } else if (idx === currentIndex) {
                      colorClass = "current";
                    }

                    return (
                      <span
                        key={idx}
                        className={`code-char ${colorClass}`}
                        data-char={char === "\t" ? "tab" : undefined}
                      >
                        {char === "\n" ? "↵\n" : char}
                      </span>
                    );
                  })}
              </code>
            </pre>
            {gameStatus === "win" && (
              <div className="result-overlay success">
                <div className="congratulations">
                  <h2>🎉 Excellent!</h2>
                  <div className="stats-summary">
                    <p>Time: {completionTime.toFixed(2)}s</p>
                    <p>WPM: {Math.round((code.length / 5) / (completionTime / 60))}</p>
                    <p>Mistakes: {mistakes}</p>
                    {mistakes === 0 && <p className="perfect">Perfect Run! +500 points</p>}
                  </div>
                  <button className="primary-button" onClick={handleTryAgain}>
                    Next Challenge
                  </button>
                </div>
              </div>
            )}
            {gameStatus === "lose" && (
              <div className="result-overlay failure">
                <div className="game-over">
                  <h2>Time's Up!</h2>
                  <div className="stats-summary">
                    <p>WPM: {wpm}</p>
                    <p>Mistakes: {mistakes}</p>
                    <p>Progress: {Math.round((currentIndex / code.length) * 100)}%</p>
                  </div>
                  <button className="primary-button" onClick={handleTryAgain}>
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>

          <LeaderBoard scores={scores} />

          <div className="footer">
            <button
              className="action-button"
              onClick={handleTryAgain}
              ref={tryAgainButtonRef}
            >
              Skip Challenge
            </button>
            <button
              className="settings-button"
              onClick={() => setSettingsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <SettingsPanel
          onClose={() => setSettingsOpen(false)}
          onResetScores={resetScores}
          onTimeLimitChange={handleTimeLimitchange}
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
          playerName={playerName}
          onPlayerNameChange={setPlayerName}
        />
      )}
      <ResultPopup
        show={showResults}
        result={gameResult}
        onClose={() => setShowResults(false)}
        onTryAgain={handleTryAgain}
      />
      <TimeoutPopup
        show={showTimeout}
        onTryAgain={handleTryAgain}
        onClose={handleTimeoutClose}
      />
    </div>
  );
};

export default SyntaxSprint;
