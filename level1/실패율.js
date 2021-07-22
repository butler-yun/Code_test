function solution(N, stages) {
    
    const failRate = {};
    
    for (let i = 0; i < N; i += 1) {
        
        const x = stages.filter((elm) => elm === i+1).length; // [1, 2, 3, 4, 5 ...]
        const y = stages.filter((elm)=> elm >= i+1).length; // [8, 7, 4, 2, 1...]
        
        // 실패율 계산
        // 1/8, 3/7, 2/4, 1/2, 0/1
        failRate[i+1] =  x / y; 
    };
    
    // failRate 객체의 실패율 값을 기준으로 내림차순으로 정렬하고 키 값을 result 변수에 담음. 
    // ["3", "4", "2", "1", "5"]
    const result = Object.keys(failRate).sort((a, b) => failRate[b] - failRate[a]);
    
    // failRate의 key는 문자열이므로 map을 통해 숫자로 변경한 뒤 출력
    return result.map((elm) => parseInt(elm));
    
};