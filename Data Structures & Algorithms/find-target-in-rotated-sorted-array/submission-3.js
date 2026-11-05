class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     *///L           M     R
// nums=[4, 5, 6, 7, 0, 1, 2]
// target=0
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (target === nums[m]) return m;

            // Определяем, какая половина отсортирована
            if (nums[l] <= nums[m]) {
                // Левая половина отсортирована
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;  // ← Ищем в левой половине
                } else {
                    l = m + 1;  // ← Ищем в правой половине
                }
            } else {
                // Правая половина отсортирована
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1;  // ← Ищем в правой половине
                } else {
                    r = m - 1;  // ← Ищем в левой половине
                }
            }
        }
        return -1;
    }
}
