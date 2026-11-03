class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [3,4,5,6,1,2]
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let mid = Math.floor((l+r)/2);
         
          if (nums[mid] > nums[r]) {
            l = mid + 1;
          } else {
            r = mid;
          }
        }

        return nums[l];
    }
}
