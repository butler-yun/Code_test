function solution(strings, n) {
    
    // sort 메소드를 통한 문자열 정렬
    return strings.sort((a, b) => {
        
        // a가 b 보다 작을 때
        if (a[n] < b[n]) { return -1;}
        
        // a가 b 보다 클 때
        if (a[n] > b[n]) { return 1; };
        
        // a와 b가 같을 때
        if (a[n] === b[n]) {

            // 문자열(단어) 비교로 오름차순 정렬
            if (a < b) { return -1;};
            if (a > b) { return 1;};
        };
    });
    
}