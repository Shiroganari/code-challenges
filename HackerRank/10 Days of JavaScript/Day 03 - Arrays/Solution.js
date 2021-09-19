function getSecondLargest(nums) {
    // Complete the function
    let sortedArray = nums.sort(function(a, b) {
        return a - b;
    });

    let resultArray = sortedArray.filter(function(elem, index) {
        return index === sortedArray.indexOf(elem);
    })

    return resultArray[resultArray.length - 2];
}