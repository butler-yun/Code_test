function solution(absolutes, signs) {

    return absolutes.reduce((acc, cur, idx) => {
        // sings 배열의 원소의 boolean 값에 따라
        // absolutes 배열의 원소 값이 음수 혹은 양수가 된다.
        return acc + cur * (signs[idx] ? 1 : -1);
    }, 0);

}