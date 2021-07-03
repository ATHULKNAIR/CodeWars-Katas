// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    str = str.split('')
   let len = str.length;

   if(len%2!==0) str[len]="_";

   let arr = [];
   for(let i =0;i <str.length;i++){
       arr.push(str[i]+str[i+1])
       i++
   }
   return arr;
}
console.log(solution("abcde"))



console.log(one(times(two())))
