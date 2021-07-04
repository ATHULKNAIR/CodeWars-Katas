function makeFunction(operation,num){
     if(operation){
         return operation(num);
     }else{
         return num;
     }
}
function zero(operation){
    return makeFunction(operation,0);
}
function one(operation){cd
    return makeFunction(operation,1);
}
function two(operation){
    return makeFunction(operation,2);
}
function three(operation){
    return makeFunction(operation,3);
}
function four(operation){
    return makeFunction(operation,4);
}
function five(operation){
    return makeFunction(operation,5);
}
function six(operation){
    return makeFunction(operation,6);
}
function seven(operation){
    return makeFunction(operation,7);
}
function eight(operation){
    return makeFunction(operation,8);
}
function nine(operation){
    return makeFunction(operation,9)
}

function plus(right){
    return function(left){
        return left+right;
    }
}
function minus(right){
    return function(left){
        return left-right;
    }
}
function times(right){
    return function(left){
        return left*right;
    }
}
function dividedBy(right){
    return function(left){
        return Math.floor(left/right);
    }
}
console.log(seven(times(five())))