// Bitcoin difficulty adjustment
// Adjusts every 2016 blocks (~2 weeks)
function newDifficulty(oldDiff, actualTime, targetTime = 1209600) {
  return oldDiff * (targetTime / actualTime);
}
module.exports = { newDifficulty };
