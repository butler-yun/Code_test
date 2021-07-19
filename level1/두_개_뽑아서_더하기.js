function solution(numbers) {
    const result = [];
    
    for (let i = 0; i <= numbers.length-1; i += 1) {
        
        for (let j = 0; j <= numbers.length-1; j += 1) {
            // i와 j의 값이 다를 경우에만 연산
            if (i !== j) {
                result.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    return [...new Set(result)].sort((a, b) => a - b);
}