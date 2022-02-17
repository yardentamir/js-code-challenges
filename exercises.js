// function validAnagram(str1, str2){
//   const lookup ={};

//   if(str1.length !== str2.length) return false;

//   for(let letter of str1){
//     lookup[letter] = lookup[letter]++ || 1;
//   }

//   for(let letter of str2) {
//     if(!lookup[letter]) return false;
//     else lookup[letter] -= 1;
//   }

//   return true;

// }

// console.log(validAnagram("car", "rat"));
// console.log(validAnagram("car", "rac"));

// function countUniqueValues(arr){

//   let counter = 0;
//   let isEqual = false;

//   for(let i = 0; i < arr.length; i++){
//     isEqual = false;
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] === arr[j]) isEqual = true;
//     }
//     if(!isEqual) counter++;
//   }

//   return counter;
// }

// console.log(countUniqueValues([1,2,3,1,2]));

// function sameFrequency(num1 , num2){
//   const tempNum1 = num1;

//   while(num1 > 0 || num2 > 0) {
//     const digit1 = num1 % 10;
//     const digit2 = num2 % 10;

// console.log(digit1, digit2);
//     num1 -= digit1;
//     num1 /= 10;
//     if(num1 <= 0) {
//       num1 = tempNum1;
//       num2 -= digit2;
//       num2 /= 10;
//     }
//   }
// return true;

// }

//  console.log(sameFrequency(123,353));

//  function areThereDuplicates() {
//   const obj = {};

//   for(let i = 0; i < arguments.length; i++){
//   let flag = false;
//   obj[arguments[i]] ? flag=true : obj[arguments[i]] = arguments[i];
//   if(flag) return true;
// }
// return false;
// }

// console.log(areThereDuplicates(1,1,2))

// function isSubsequence(str1, str2) {
//   let start1 = 0;
//   let start2 = 0;
//   let end1 = str1.length - 1;
//   let end2 = str2.length - 1;

//   while (start2 <= end2) {
//     if (str1[start1] === str2[start2]) {
//       if (start1 === end1) return true;
//       start1++;
//       start2++;
//     } else {
//       start2++;
//     }
//   }

//   return false;
// }

// console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("stinb", "sbring"));
// console.log(isSubsequence("ac", "dsfadsfabcfgd"));

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) return null;

//   let max = 0;
//   let n = num;

//   for (let i = 0; n <= arr.length; i++) {
//     let temp = arr.slice(i, n).reduce((a, b) => a + b, 0);
//     if (temp > max) max = temp;
//     n++;
//   }

//   return max;
// }

// console.log(maxSubarraySum([3, 6, 88, 22, 9, 55], 3));
// console.log(maxSubarraySum([3, 6, 88, 22, 9, 3], 2));
// console.log(maxSubarraySum([3, 6], 3));

// function avgSequence(arr, target) {
//   const range = [];
//   let sum = 0;

//   for(let i = 0; i < arr.length;i++){
//     let n = i + 1;
//    sum += arr[i];
//    range.push(i);
//    if(sum / n === target) return range;
//    n++;
//   }
// return range

// }

// console.log(avgSequence([3, 5, 7, 2, 9], 5));

// function minSubArray(arr, target) {
//   let temp = 0;
//   let start = 0;
//   let end = 1;

//   if (Math.max(arr) >= target) return 1;

//   while (start < end) {}
// }

// console.log(minSubArray([3, 5, 7, 2, 9], 9));
// console.log(minSubArray([3, 5, 7, 2, 9], 10));

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

// [100,200,300,400] , 2
// 300
// total = 300
// currentTotal = 300
// currentTotal += arr[2] - arr[0] = 300 - 100 = 500
// total = 500

// i = 3 , num = 2
// currentTotal =500
// currentTotal += arr[3] - arr[1] = 400 - 200 = 200
// total = 700

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = 0;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }
