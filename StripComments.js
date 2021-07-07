// Complete the solution so that it strips all text that follows any of a set of 
// comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
   input = input.split('\n');
   let array = []
   for(let i=0;i<input.length;i++){
       let arr = ""
      for(let j =0;j <input[i].length;j++){
          if( input[i][j] === " " && markers.includes(input[i][j+1])){
              break;
          }else{
              arr+=input[i][j];
          }
      }
      array.push(arr);
   }

   return array.join('\n')
};
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
// "apples, pears\ngrapes\nbananas"