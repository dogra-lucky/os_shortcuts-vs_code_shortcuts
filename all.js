const arr = [3, 3, 34, 44, 5];
const arr1 = [];
for (let index = 0; index < arr.length; index++) {
  new Promise((resolve, reject) => {
    let count = 1;
    arr1.push(count);
    count++;
    resolve(arr);
  }).then((ar) => {
    console.log(ar);
  });
}
