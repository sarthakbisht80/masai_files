function sumEvenNum(num) {
    var sum = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var key = num_1[_i];
        if (key % 2 == 0) {
            sum += key;
        }
    }
    console.log(sum);
    return sum;
}

