function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(param1: number[]): number {
    var sum :number = 0;
    var i : number;
    for (i = 0 ; i < param1.length ; i++) 
    {
        sum += param1[i];
    }
    return sum;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2([1,2,3,4,5]));
console.log(add2([2,3]));

