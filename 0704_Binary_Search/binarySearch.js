function binarySearch(nums, target) {
    let start = 0
    let end = nums.length - 1;

    while(start <= end)  {
        let middle = Math.floor((start + end) / 2)

        if(nums[middle] === target) return middle

        if(nums[middle] > target) end = middle - 1;
        else start = middle + 1;
        
    }

    return -1
    
} 

console.log(binarySearch([-1,0,5,3,9,12], 9));