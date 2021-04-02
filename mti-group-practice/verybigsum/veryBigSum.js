function aVeryBigSum(arr) {
  let filtered = arr.toString().replace(/[a-z]/g, "");
  return filtered
    .split(",")
    .map((el) => el * 1)
    .reduce((a, b) => a + b);
}
// function aVeryBigSum(arr) {
//     let testNum=0;

//     arr.forEach((item) => {
//       if (Number.isInteger(item)) {
//         testNum+=item;
//       } else {
//         let regex = /[0-9]/g;
//         let found = item.match(regex);
//         if (found) {
//           testNum+= eval(found.join(''));
//         }
//       }
//     });

//     return testNum;
//   }
console.log(aVeryBigSum([10001232432, "10003432asdsa", 4328723, "234324dfg"]));
const result = (testStudent, testCase) => testStudent === testCase;

console.log(result(aVeryBigSum([1000123, 1000555, 1000171, 1000223]), 4001072));
console.log(result(aVeryBigSum([100071, 99935, 12341, 127833]), 340180));
console.log(result(aVeryBigSum([21376743, 21438743, 23123, 43242]), 42881851));
console.log(
  result(aVeryBigSum([21376743, 21438743, "ini string", 43242]), 42858728)
);
console.log(
  result(
    aVeryBigSum([10001232432, "10003432asdsa", 4328723, "234324dfg"]),
    10015798911
  )
);
