import React from 'react';
import './LeaderBoard.css';

const LeaderBoard = ({ scores }) => {
  // Sort scores by points in descending order
  const sortedScores = [...scores].sort((a, b) => b.points - a.points);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return 'N/A';
    }
  };

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <div>Rank</div>
          <div>Name</div>
          <div>Language</div>
          <div>Points</div>
          <div>Perfect Runs</div>
          <div>Last Played</div>
        </div>
        {sortedScores.map((score, index) => (
          <div key={index} className="leaderboard-row">
            <div>{index + 1}</div>
            <div>{score.playerName || 'Anonymous'}</div>
            <div>{score.language}</div>
            <div>{score.points}</div>
            <div>{score.perfectRuns}</div>
            <div>{formatDate(score.lastPlayed)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
