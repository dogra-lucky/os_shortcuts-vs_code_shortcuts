let qual = [
  { degree: "a" },
  { degree: "a" },
  { degree: "b" },
  { degree: "c" },
  { degree: "a" },
];
let uniqueArr = qual.reduce((acc, obj) => {
  if (!acc.some((t) => t.degree === obj.degree && t.name === obj.name)) {
    acc.push(obj);
  }
  return acc;
}, []);
console.log("@@", uniqueArr);
