function sumEvenNumbers(arr) {
    var evenSum = arr
        .filter(function (num) { return num % 2 === 0; })
        .reduce(function (acc, num) { return acc + num; }, 0);
    return evenSum;
}
