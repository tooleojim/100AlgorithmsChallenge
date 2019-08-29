function absoluteValuesSumMinimization(a: number[]): number {

    var len : number = a.length;
    var median : number;

    if (len == 0)
    {
         median = null;
    }
    else
    {
        a.sort();

        var middle : number = Math.floor((a.length - 1) / 2);

        median = a[middle];
    }

    return median;
}

console.log(absoluteValuesSumMinimization([]));
console.log(absoluteValuesSumMinimization([2]));
console.log(absoluteValuesSumMinimization([2, 4]));
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));