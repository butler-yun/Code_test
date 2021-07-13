function solution(x, n) {
    const result = [];
    
    for (let i = 1; i <= n; i += 1) {
        result.push(x * i);
    }
    
    return result;
}