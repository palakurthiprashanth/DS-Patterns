function maxProduct(nums) {
    let max_overall = nums[0];
    let max_ending_here = nums[0], min_ending_here = nums[0];
        
    for(var i = 1; i < nums.length; i++){
        max_ending_here = Math.max(nums[i], Math.max(nums[i]*max_ending_here, nums[i]*min_ending_here));
        min_ending_here = Math.min(nums[i], Math.min(nums[i]*max_ending_here, nums[i]*min_ending_here));
        max_overall = Math.max(max_overall, max_ending_here);
    }
    return max_overall;
}
console.log(maxProduct([6, -3, -10, 0, 2]))// 180
