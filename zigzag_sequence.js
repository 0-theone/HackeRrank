const zigZagArray = (input) => {
    const seen = {};

    //convert input into arra, sort and remove duplicated values
    let sequence = Array.from(input).sort().filter(item => {
        return seen.hasOwnProperty(item) ? false : /^\d+$/.test(item) ? (seen[item] = true) : false;
    });
    const n = sequence.length;

    //find a middle position in the array
    const mid = ((n + 1) / 2) - 1;

    //set middle position equal to last position and vice versa
    const temp = sequence[mid];
    sequence[mid] = sequence[n -1];
    sequence[n -1] = temp;

    let st = mid + 1;
    let ed = n - 2; 

    // Sort second half of array
    while (st <= ed) {
        const temp2 = sequence[st];
        sequence[st] = sequence[ed];
        sequence[ed] = temp2;
        st = st + 1;
        ed = ed - 1;
    }
    console.log(sequence.join(" "))
}

zigZagArray([1,2,3,4,5,6,7])