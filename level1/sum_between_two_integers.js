function solution(a, b) {
    
    // a와 b 중 작은 숫자는 minNum에, 큰 숫자는 maxNum에 할당
    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);
    
    let sum = 0;

    for (let i = minNum; i <= maxNum; i += 1) {
        sum += i;
    }
    
    return sum;
}