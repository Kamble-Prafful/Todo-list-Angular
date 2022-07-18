const Trying = <T>(arr: T[], value: T) => {
  let arr2 = [value, ...arr];
  return arr2;
};

const demoArr = [1, 2, 6];

const output = Trying(demoArr, -25);
console.log(output);
