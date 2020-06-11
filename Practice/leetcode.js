/**
 * @param {number[]} nums
 * @return {number}
 */

// nums = [1, 1, 1] ;
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
nums = [1,2]
var removeDuplicates = function (nums) {
    const n = nums;
    leng = n.length - 1;
    i = 0;

    while (i < leng) {
        for (j = 0; j < leng; j++) {
            console.log(`Postion I: ${i} value: ${n[i]}`);
            console.log(`Postion J: ${j + 1} value: ${n[j + 1]}`);
            console.log(`${n[i] === n[j + 1]}`);
            if (n[i] === n[j]) {
                if(i === n.length -1){
                    console.log(n)
                } else {
                    n.splice(i, 1);
                    console.log(n);
                }
                
            }
        }
        i++;
    }
};

console.log("working");
removeDuplicates(nums);
