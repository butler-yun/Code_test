function solution(n, arr1, arr2) {
    
    const result = [];
    // 결과 값이 저장될 배열
    const a1 = arr1.map((elm) => elm.toString(2).padStart(n, 0));
    const a2 = arr2.map((elm) => elm.toString(2).padStart(n, 0));
    // arr1, arr2 배열의 원소를 2진수로 변환
    // toString 메소드 사용
    // [ '01001', '10100', '11100', '10010', '01011' ]
    // padStart 메소드는 2진수의 자릿수를 맞추기 위해 사용
    
    let str = "";
    
    for (let i = 0; i < n; i += 1) {
        const x = a1[i].split("");
        const y = a2[i].split("");
        // '01001' -> ["0", "1", "0", "0", "1"]
        
        for (let j = 0; j < n; j += 1) {
            x[j] | y[j] ? str += "#" : str += " ";
            // 비트 연산 사용
            // 둘 중 하나라도 1일 경우 1 반환
            // 둘 다 0이어야 0 반환
            // str 변수에 "#" 혹은 " " 가산
        };
        
        result.push(str);
        str = "";
        // 연산 완료 후 result 변수에 str 푸쉬
        // str에 "" 재할당 (초기화)
    };
    
    return result;
};