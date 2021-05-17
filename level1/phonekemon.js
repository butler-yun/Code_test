function solution(nums) {
    // n/2
    const half = Math.floor(nums.length / 2);

    // uniqNums
    const uniqNums = nums.filter((elm, idx) => {
        return nums.indexOf(elm) === idx;
    });

    return half >= uniqNums.length ? uniqNums.length : half;
}