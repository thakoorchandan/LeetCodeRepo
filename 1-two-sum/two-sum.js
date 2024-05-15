/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    // Use a map to store the difference and its index
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        // If the difference exists in the map, we found a pair
        if (numMap.has(difference)) {
            result.push(numMap.get(difference), i);
            return result;
        }
        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }
    // If no pair is found, return an empty array
    return result;
};
