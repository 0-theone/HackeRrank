//Given an array of integers, where all elements but one occur twice, find the unique element.

//Example
// a = [1,2,3,4,3,2,1] - the unique element is 4.

function lonelyinteger(a) {
    let unique = a.filter(item => a.indexOf(item) === a.lastIndexOf(item));
    console.log(unique[0])
    return unique[0];
}

lonelyinteger([1,2,3,4,3,2,1])