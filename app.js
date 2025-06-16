// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//     return el < 5;

// });

let nums = [1, 2, 3, 4];
let finalVal = nums.reduce((res, el) => {
    console.log(res);
    return res + el;
});
console.log(finalVal);

