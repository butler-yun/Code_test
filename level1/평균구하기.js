function solution(arr) {
    // reduce로 원소의 합계를 구한 뒤 배열의 길이로 나눔.
    let result = arr.reduce((acc, cur) => {
        return acc + cur;
    }) / arr.length;

    return result;
}