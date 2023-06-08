
function updateInventory(arr1, arr2) {
    const nestedArray = arr1.concat(arr2)
    const nestedSetArray = [...new Set(arr1.concat(arr2).map(el => el[1]).sort())]
    const resultObj = {};

    nestedSetArray.forEach((key) => {
        resultObj[key] = 0
    })

    nestedArray.forEach(item => {
        resultObj[item[1]] += item[0]
    })

    console.log(Object.entries(resultObj).map(el => el.reverse()))
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);