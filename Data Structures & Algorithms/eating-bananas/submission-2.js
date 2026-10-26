class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        function findTime(speed) {
            let time = 0;
            for (let pile of piles) {
                time += Math.ceil(pile/speed);
            }

            return time;
        }

        while (left <= right) {
           let mid = Math.floor((left+right)/2);
           if(findTime(mid) <= h) {
            result = mid;
            right = mid -1;
           } else {
            left = mid +1;
           }
        }

        return result;
    }
}
