function solution(a, b) {
    let answer = 0;

    for (let i = 0; i <= a.length - 1; i += 1) {
        answer += a[i] * (b[i]);
    }

    return answer;
}