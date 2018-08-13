// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return justLetters(stringA).split('').sort().join('') === justLetters(stringB).split('').sort().join('')
}


//// ALT SOLUTION ////

// function anagrams(stringA, stringB) {
//   const charsA = createCharMap(justLetters(stringA));
//   const charsB = createCharMap(justLetters(stringB));
//
//   if (Object.keys(charsA).length !== Object.keys(charsB).length) {
//     return false;
//   }
//
//   for (let char in charsA) {
//     if (charsA[char] !== charsB[char]) {
//       return false;
//     }
//   }
//
//  return true;
// }
//
// function createCharMap(string) {
//   const charCount = {};
//
//   for (let char of string) {
//     if (charCount[char]) {
//       charCount[char]++
//     } else {
//       charCount[char] = 1
//     }
//   }
//   return charCount;
// }
//

function justLetters(string) {
  return string.replace(/[^\w]/g, "").toLowerCase()
}

module.exports = anagrams;
