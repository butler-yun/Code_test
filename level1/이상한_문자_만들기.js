function solution(s) {
    const str = s.split(' ');
    // ["try", "hello", "world"]
    const result = [];
    // 결과 값이 저장될 배열 result

    str.forEach((elm) => {

        if (elm === ' ') {
            result.push('');
        }
        // elm가 공백일 때

        if (elm !== ' ') {
            result.push(convertStr(elm));
        }
        // elm가 공백이 아닐 때
    });

    return result.join(' ');
}

function convertStr(elm) {
    const splitStr = [...elm];
    // 매개변수로 받은 elm를 쪼갠다.
    // "try" -> ["t", "r", "y"]

    return splitStr.map((el, idx) => {
        return idx % 2 ? el.toLowerCase() : el.toUpperCase();
        // idx 값을 2로 나누어 떨어지는 값에 따라
        // 문자열을 소문자 혹은 대문자로 치환하여 출력
    }).join('');
};