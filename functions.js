function elementByIndex(arr, x) {
    if (x < 0 || x > arr.length) {
        return arr[-1]
    } else {
        return arr[x]
    }
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index)
}

function arraySum(arr) {
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum
}

function randomInRange(x, y) {
    if (x < y) {
        return Math.floor(Math.random() * (y - x) + x)
    } else {
        return Math.floor(Math.random() * (x - y) + y)
    }
}

function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizedAll(string) {
    return string.toUpperCase();
}

let lastLetter = (string, x) => string.slice(-1) == x ?  true : false;
    


module.exports = {
    elementByIndex,
    removeItemAll,
    removeDuplicates,
    arraySum,
    randomInRange,
    capitalFirstLetter,
    capitalizedAll,
    lastLetter,
}