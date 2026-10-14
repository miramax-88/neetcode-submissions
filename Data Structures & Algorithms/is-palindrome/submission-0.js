class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length -1;
        s = s.toLowerCase();

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }
            if(s[left] === s[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        } 
        return true;
    }

     isAlphaNumeric(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
