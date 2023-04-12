/* let arr = [3, 6, 9, 15, 18, 21, 24, 27];
for (let i = 0; i < arr.length; i++) {
  const init = arr[0];
  const mul = i + 1;
  if (!(init * mul === arr[i])) {
    console.log(init * mul);
    break;
  }
} */

/* let odd = [3, 5, 7, 9, 11, 15];
for (let i = 0; i < odd.length - 1; i++) {
  if (!(odd[i + 1] - odd[i] == 2)) {
    console.log(odd[i] + 2);
    break;
  }
} */

/* function st(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!count.hasOwnProperty(char)) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  return count;
}
console.log(st("hello")); */
