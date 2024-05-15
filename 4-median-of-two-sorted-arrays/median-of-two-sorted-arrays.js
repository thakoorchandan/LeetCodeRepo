/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var findMedianSortedArrays = function (arr1, arr2) {
    const array = [];
    for (let j = i = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] !== undefined && (arr2[j] === undefined || arr1[i] <= arr2[j])) array.push(arr1[i++])
        else array.push(arr2[j++]);
    }
    const half = array.length / 2;
    const isOdd = array.length % 2;
    if (isOdd) return array[Math.floor(half)]
    else return (array[half] + array[half - 1]) / 2

};