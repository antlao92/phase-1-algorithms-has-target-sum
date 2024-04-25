function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i<array.length; i++){
    for(let j = i+1; j<array.length; j++){
      if (array[i]+array[j] === target){
        return true;
      }
      // if (array[i+1]+array[j]===target){
      //   return true;
      // }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0n^2
*/

/* 
  Add your pseudocode here
  1. check to see if first number plus second is equal to target
  2. iterate through the rest of the array and check 
  3. now start with second value in array and add the next index to the end of array
  4. continue until all values in array are tested
*/

/*
  Add written explanation of your solution here
  we need to iterate through each number in the array starting from the beginning and add it to each number in the array to check to see if it matches target. If it does, we return true else we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
