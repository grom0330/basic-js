const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let members1 = members.filter(item => { if (typeof (item) === 'string') return item; });

  let arr = [];

  for (let i = 0; i < members1.length; i++) {
    for (let j = 0; j < members1.length; j++) {
      if (members1[i][j] != ' ') {
        arr.push(members1[i][j].toUpperCase());
        break;
      }
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
