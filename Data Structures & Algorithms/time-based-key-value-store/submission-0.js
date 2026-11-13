class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, [{value: value, timestamp: timestamp}])
        } else {
            this.keyStore.get(key).push({ value: value, timestamp: timestamp });
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = "";
        let currentKey = this.keyStore.get(key) ?? "";
        let l = 0, r = currentKey.length -1;
        while( l<=r) {
            let mid = Math.floor((l+r)/2);
            if (currentKey[mid].timestamp <= timestamp) {
                result = currentKey[mid].value;

                l = mid +1;
            } else {
               r = mid -1;
            }
        }

        return result;
    }
}
