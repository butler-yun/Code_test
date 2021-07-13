function solution(d, budget) {
    const apply = d.sort((a, b) => a - b); // 부서별 신청한 금액
    let b = budget; // 예산
    let result = 0; // 결과값
    
    apply.forEach((elm) => {
        if (b - elm < 0) {
            return;
        } else {
            b -= elm;
            result += 1;
        }
    })
    
    return result;
}