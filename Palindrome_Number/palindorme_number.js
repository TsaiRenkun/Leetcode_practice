console.log("im working")

x = 10

var isPalindrome = function(x) {
    var newX = x.toString().split('').reverse().join('')
    console.log(newX)
    console.log(x.toString())
    if (x.toString() === newX){
        console.log(true)
    } else {
        console.log(false)
    }
};

isPalindrome(x)