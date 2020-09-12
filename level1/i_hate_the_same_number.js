function solution(arr) {
    const resultArr = [];

    for (let i = 0, j = 0; i < arr.length; i += 1) {
        if (resultArr.length === 0) {
            resultArr.push(arr[i]);
        } else if (resultArr[j] !== arr[i]) {
            resultArr.push(arr[i]);
            j += 1;
        };
    };

    return resultArr;
}



// filter를 사용해서 풀 수도 있다.
function solution(arr) {
    return arr.filter((elm, idx) => elm !== arr[idx + 1]);
}