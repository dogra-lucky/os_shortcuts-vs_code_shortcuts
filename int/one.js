// var str = "Hello hello hello hello";
// var lengthOfE = str.match(/e/gi).length;
// console.log(lengthOfE);

/* function letterCounter(str) {
  var letters = 0;
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ar = alphabet.split("");
  for (var i = 0; i < str.length; i++) {
    if (ar.indexOf(str[i]) > -1) {
      letters = letters + 1;
    }
  }
  return letters;
}
console.log(letterCounter("wel shot")); */

function countLetters(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }
  return counts;
}

// Example usage
console.log(countLetters("coount"));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

/* function revStr(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(revStr("hello  world")); */
