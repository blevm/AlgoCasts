// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
  // for (let row = 0; row < n; row++) {
  //   let string = '';
  //
  //   for (let col = 0; col < (n + (n-1)); col++) {
  //     let midpoint = Math.floor((n + (n-1)) /2)
  //     if ((midpoint-row) <= col && (midpoint+row) >= col ) {
  //       string += '#'
  //     } else {
  //       string += ' '
  //     }
  //   }
  //   console.log(string)
  // }

  if (row === n) {
    return;
  }

  if (level.length === (n + (n-1))) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((n + (n-1)) /2)
  if ((midpoint-row) <= level.length && (midpoint+row) >= level.length ) {
    level += '#'
  } else {
    level += ' '
  }

 pyramid(n, row, level);
}

module.exports = pyramid;
