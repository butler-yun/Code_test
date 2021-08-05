function solution(dartResult) {
    const regExp = /\d{1,2}[SDT][*#]?/g;
    const str = dartResult.match(regExp);
    // 문자열의 토큰화
    // ["1S","2D*","3T"]
    
    let result = [];
    
    for (let i = 0; i < str.length; i += 1) {
        const num = str[i].match(/\d{1,2}/g);
        const bonus = str[i].match(/[SDT]/g);
        const option = str[i].match(/[*#]/g);
        // ["1S","2D*","3T"] 이걸 다시 한 번 쪼개줌
        // num = 2, pow = D, option = * 
        
        // Single
        if (bonus[0] === "S") {
            result.push(Math.pow(num[0], 1));
        };
        
        // Double
        if (bonus[0] === "D") {
            result.push(Math.pow(num[0], 2));
        };
        
        // Triple
        if (bonus[0] === "T") {
            result.push(Math.pow(num[0], 3));
        };
        
        // Option "*"
        if (option !== null && option[0] === "*") {
            // option 값이 없는 경우 null이 나오기 때문에
            // 위와 같이 조건을 적어줌
            
            if (i === 0) {
                result[i] *= 2;
                // 첫번째 다트를 던졌을 때
                // 스타상 당첨
                // 이전 값이 없으므로 위와 같이 처리.
            } else {
                result[i] *= 2;
                result[i-1] *= 2;
                // 현재 값과 이전 값에 *2를 해주어야 함.
            }
        };
        
        // Option "#"
        if (option !== null && option[0] === "#") {
            // option 값이 없는 경우 null이 나오기 때문에
            // 위와 같이 조건을 적어줌 
            
            result[i] *= (-1);
        };
        
    };
    
    return result.reduce((acc, cur) => acc + cur);
};