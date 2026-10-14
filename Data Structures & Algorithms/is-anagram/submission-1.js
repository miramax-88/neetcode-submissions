class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = new Map();
        if (s.length !== t.length) return false;

        for (let key of s) {
            if(!count.has(key)) {
                count.set(key, 1)
            } else {
                count.set(key, count.get(key)+1)
            }
        }

        for (let key of t) {
            if (count.has(key)) {
                count.set(key, count.get(key) -1)
            }
        }

        for (let key of t) {
            if (count.get(key) === 0) {
                count.delete(key);
            }
        }

        if (count.size !== 0) {
            return false;
        } else {
            return true;
        }

    }
}
