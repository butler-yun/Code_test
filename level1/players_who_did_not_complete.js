// 배열을 객체로
function convert(arr) {
    return arr.reduce((acc, cur) => {
        acc[cur] = ++acc[cur] || 1;
        return acc;
    }, {});
};


// 객체의 value로 key 값 찾기
function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
};


// solution func
function solution(participant, completion) {
    // array -> object
    // {mislav: 2, stanko: 1, ana: 1}
    const partiObj = convert(participant);

    for (let i = 0; i <= completion.length - 1; i += 1) {
        // partiObj 객체에 completion 원소가 있는지 체크.
        const hasProp = partiObj.hasOwnProperty(completion[i]);

        // 값이 있다면, 해당 value 1씩 감산
        if (hasProp) {
            partiObj[completion[i]] -= 1;
        };
    }

    // 값 출력
    return getKeyByValue(partiObj, 1);
}