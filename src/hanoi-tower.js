const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 1
  for (i = 1; i < disksNumber; i++) turn = turn * 2 + 1
  let seconds = Math.floor((turn * 3600) / turnsSpeed)
  return { turns: turn, seconds: seconds }
}

module.exports = {
  calculateHanoi
};
