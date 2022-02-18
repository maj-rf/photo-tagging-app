//route fxns
function getCurrentTime() {
  let today = new Date();
  let totalSeconds =
    today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();
  return totalSeconds;
}

//leaderboard fxns
function calculateFinalScore(user) {
  let final = user.timeEnd - user.timeStart;
  let minutes = Math.floor(final / 60);
  let seconds = final % 60;
  if (seconds < 10) seconds = '0' + seconds;
  return `${minutes}:${seconds}`;
}

//game fxns
function convertCoordstoPercent(e) {
  let x = Math.round(
    (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
  );
  let y = Math.round(
    (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
  );
  return { x, y };
}

export { getCurrentTime, calculateFinalScore, convertCoordstoPercent };
