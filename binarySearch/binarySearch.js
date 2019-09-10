function binarySearch(arr, left, right, target) {
    while(left <= right) {
        let mid = (left + (right - left) / 2) >> 0;
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}



module.exports = binarySearch;