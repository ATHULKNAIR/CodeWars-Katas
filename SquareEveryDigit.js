// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let sum = "";
    if(num === 0) return 0;
    while (num > 0) {

        let rem = parseInt(num % 10);
        sum =  (rem * rem) + sum
        num = parseInt(num / 10);
    }
    return Number(sum)
}
console.log(squareDigits(996));
