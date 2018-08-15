// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(num, row = 0, stair = '') {
  /// MB Solution ///
  // for (let i = 1; i <= num; i++) {
  //   console.log(`${'#'.repeat(i)}${' '.repeat(num-i)}`)
  // }

  // for (let row = 0; row < num; row++) {
  //   let stair = '';
  //
  //   for (let col = 0; col < num; col++) {
  //     if (col <= row) {
  //       stair += '#'
  //     } else {
  //       stair += ' '
  //     }
  //   }
  //   console.log(stair)
  // }

  if (row === num) {
    return;
  }

  if (stair.length === num) {
    console.log(stair);
    return steps(num, row + 1);
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

 steps(num, row, stair);
}

module.exports = steps;
