// 다중 배열을 객체로
// 얼굴, 상의, 하의, 겉옷 별로 key를 만들고 value 값 할당
function getArrByObj(array) {
    return array.reduce((acc, cur) => {
        acc[[cur[1]]] = ++acc[[cur[1]]] || 1;
        return acc;
    }, {});
};

function solution(clothes) {
    const clothesObj = getArrByObj(clothes);
    let result = 1;

    // (의상 갯수 + 1 (안 입은 경우)) * ... -1 (모든 의상을 안 입은 경우) = 결과값
    for (const item in clothesObj) {
        result *= (clothesObj[item] + 1);
    }

    return result - 1;
}