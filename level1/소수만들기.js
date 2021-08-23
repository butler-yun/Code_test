function solution(nums) {
    const len = nums.length;
    // nums 배열의 길이
    let num = 0;
    let result = 0;

    // 0~len-2 -> 첫번째 인덱스
    // 1~len-1 -> 두번째 인덱스
    // 2~len -> 세번째 인덱스
    // 3중 for문으로 (중복을 제외한) 3개의 수를 찾을 수 있다.
    for (let i = 0; i < len - 2; i += 1) {
        for (let j = i + 1; j < len - 1; j += 1) {
            for (let k = j + 1; k < len; k += 1) {
                num = nums[i] + nums[j] + nums[k];
                result += isPrime(num);
                // isPrime === 소수 판별 함수
            };
        };
    };

    return result;
};

function isPrime(num) {

    // 어떠한 수를 제곱하여 num이 되는 모든 숫자를 제곱근이라 한다.
    // 제곱근보다 작은 수로 나누었을 때 나누어지지 않는다면
    // 제곱근보다 큰 수로도 나누어지지 않기 때문에 소수다.
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
        if (num % i === 0) {
            return 0;
        };
    };

    return 1;
};