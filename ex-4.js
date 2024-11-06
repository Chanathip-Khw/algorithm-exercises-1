function findOdd(nums) {
  let countNumObj = {};
  for (num of nums) {
    if (countNumObj[num] === undefined) {
      countNumObj[num] = 1;
    } else {
      countNumObj[num] += 1;
    }
  }
  for (num in countNumObj) {
    if (countNumObj[num] % 2 === 1) {
      return Number(num);
    }
  }
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
