let arr = [3, 54, 67, 78, 3, 3, 7, 34];
let ar2 = arr.reduce((acc, obj, el) => {
  console.log(acc, ">>>>");
  return acc + obj;
});
