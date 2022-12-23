//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//Example
// arr = [1,3,5,7,9]

//The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is  3 + 5 + 7 + 9 = 24. The function prints
//16 24

//BAD
function minMaxSum(arr) {
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    const minSum = arr.reduce((a,b) => a + b) - max;
    const maxSum = arr.reduce((a,b) => a + b) - min;
    console.log(minSum,maxSum);
}

//GOOD
function minMax2(arr) {
    const sums = [];
    let i = 0;
    while (i < arr.length) {
        const numbers = [...arr];
        numbers.splice(i, 1);
        const sum = numbers.reduce((a, b) => a + b);
        sums.push(sum);
        console.log(`Sum everything except ${arr[i]}, the sum is ${numbers.join('+')} = ${sum}`);
        i++;
    }
}

function main() {
    const arr = [7, 69, 2, 221, 8974];
    minMaxSum(arr);
    minMax2(arr);
}

main();
