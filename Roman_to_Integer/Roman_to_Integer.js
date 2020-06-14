// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

console.log("im working")

s = "III"


var romanToInt = function(s) {
    count = 0;

    var newS = s.toUpperCase().split("");
    console.log(newS)

    for(i = 0; i < newS.length; i ++){
        if((newS[i] === "I" && newS[i+1] === "V") || (newS[i] === "I" && newS[i+1] === "X")){
            count = count - 1;
        }else if((newS[i] === "X" && newS[i+1] === "L") || (newS[i] === "X" && newS[i+1] === "C")){
            count = count - 10;
        }else if((newS[i] === "C" && newS[i+1] === "D") || (newS[i] === "C" && newS[i+1] === "M") ){
            count = count - 100
        }else if(newS[i] === "I"){
            count = count + 1;
        }else if(newS[i] === "V"){
            count = count + 5;
        }else if(newS[i] === "X"){
            count = count + 10
        }else if(newS[i] === "L"){
            count = count + 50
        }else if(newS[i] === "C"){
            count = count + 100
        }else if(newS[i] === "D"){
            count = count + 500
        }else if(newS[i] === "M"){
            count = count + 1000
        }

    };
    return count;
};

romanToInt(s)

