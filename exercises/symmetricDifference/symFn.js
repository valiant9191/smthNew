

function sym(...args) {
    const argArray = [...args];
    let output = argArray[0];
    for (let i = 1; i < argArray.length; i++) {
        output = symOfTwo(output, argArray[i])
    }
    console.log([... new Set(output.sort((a, b) => a - b))])
}

function symOfTwo(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!(arr1.includes(arr2[i]))) {
            result.push(arr2[i])
        }
    }
    return result
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3], [5, 2, 1, 9], [5, 2, 1, 8], [5, 2, 1, 1]);