const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (sampleActivity == 0 || sampleActivity / 15 > 1 || sampleActivity / 15 < 0 || typeof (sampleActivity) !== 'string') {
    return false;
  }
  else {
    a = Number(sampleActivity);

    let t = Math.log(MODERN_ACTIVITY / a) / (0.693 / HALF_LIFE_PERIOD);

    if (t >= 0) {
      return Math.ceil(t);
    }
    else return false;
  };
}

module.exports = {
  dateSample
};
