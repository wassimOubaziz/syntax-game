const STORAGE_KEY = 'scores';

export const getScores = () => {
  const scores = localStorage.getItem(STORAGE_KEY);
  return scores ? JSON.parse(scores) : [];
};

export const addScore = (playerName, language, points, mistakes, wpm, timeLeft) => {
  const scores = getScores();
  const date = new Date().toISOString();
  const validPlayerName = playerName || 'Anonymous';
  
  const existingScoreIndex = scores.findIndex(score => score.playerName === validPlayerName);

  if (existingScoreIndex !== -1) {
    // Update existing score
    const existingScore = scores[existingScoreIndex];
    existingScore.points += points;
    existingScore.perfectRuns += mistakes === 0 ? 1 : 0;
    existingScore.totalRuns += 1;
    existingScore.lastPlayed = date;
    existingScore.bestWpm = Math.max(existingScore.bestWpm || 0, wpm);
    existingScore.language = language; // Update language in case it changed
  } else {
    // Add new score
    scores.push({
      playerName: validPlayerName,
      language,
      points,
      perfectRuns: mistakes === 0 ? 1 : 0,
      totalRuns: 1,
      bestWpm: wpm,
      lastPlayed: date
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  return scores;
};

export const calculatePoints = (wpm, mistakes, timeLeft, snippetLength) => {
  const wpmPoints = wpm * 10;
  const noMistakesBonus = mistakes === 0 ? 500 : 0;
  const mistakePenalty = mistakes * -50;
  const timeBonus = timeLeft * 10;
  const lengthBonus = Math.floor(snippetLength / 10) * 20;

  return wpmPoints + noMistakesBonus + mistakePenalty + timeBonus + lengthBonus;
};

export const getPerfectRuns = (scores, playerName) => {
  return scores.filter(score => 
    score.playerName === playerName && 
    score.mistakes === 0
  ).length;
};
