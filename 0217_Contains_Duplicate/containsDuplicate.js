function containsDuplicate(nums) {
    let set = new Set();
    nums.forEach(item => set.add(item))
    return set.size !== nums.length;
}

console.log(containsDuplicate([1,2,3,4]));
