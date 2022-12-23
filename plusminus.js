// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places.

// Example
//arr = [1, 1, 0, -1, -1]

// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 =  0.200000. 
//Results are printed as:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    const negatives = arr.filter(x=> x < 0);
    const positives = arr.filter(x=> x > 0);
    const zeroes = arr.filter(x=> x === 0);
    
    console.log((positives.length / arr.length).toFixed(6));
    console.log((negatives.length / arr.length).toFixed(6));
    console.log((zeroes.length / arr.length).toFixed(6));
}

function plusMinusReduce(arr) {
    const n = arr.length;
    const counter = arr.reduce((a, b) => b > 0 ? [a[0] + 1, a[1], a[2]] : b < 0 ? [a[0], a[1] + 1, a[2]] : [a[0], a[1], a[2] + 1], [0, 0, 0]);
    const positives = counter[0];
    const negatives = counter[1];
    const zeroes = counter[2];

    console.log((positives / n).toFixed(6));
    console.log((negatives / n).toFixed(6));
    console.log((zeroes / n).toFixed(6));
}


function main() {
    const arr = [1, 1, 0, -1, -1];
    plusMinus(arr);
    plusMinusReduce(arr)
}

main();