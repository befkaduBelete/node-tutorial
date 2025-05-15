/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
    let l11 = parseInt(l1.join(""));  // Convert array to number
    let l22 = parseInt(l2.join(""));  // Convert array to number

    let sum = l11 + l22;
    console.log("Sum as number:", sum);

    // Optional: convert sum back to array of digits
    let result = sum.toString().split('').map(Number);
    return result;
};


let arr1 = [4, 8, 6, 2];
let arr2 = [4, 8, 6];

console.log(addTwoNumbers(arr1, arr2))



