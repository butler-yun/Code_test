function solution(new_id) {
    let id = new_id.toLowerCase() // 1. 대문자를 소문자로 변환
             .replace(/[^\w-_\d. ]/g, '') // 2. 사용할 수 없는 특수문자 제거
             .replace(/[.]+/g, '.') // 3. '..'을 '.'으로
             .replace(/(^[.]{1,}|[.]{1,}$)/g, '') // 4. 문자열의 앞과 뒤에 있는 '.' 삭제
             .replace(/\s/g, 'a'); // 5. 공백문자 ' '를 문자열 'a'로 변환
    
    // id 값이 빈 문자열일 때
    if (id === '') {
        return "aaa";
    }
    
    // id의 길이가 16자 이상일 때
    if (id.length >= 16) {
        return id.slice(0, 15).replace(/[.]$/, '');
    }
    
    // id의 길이가 2자 이하일 때
    if (id.length <= 2) {
        for (let i = 0; id.length < 3; i += 1) {
            console.log(i)
            id += id[id.length-1];
        }
        
        return id;
    }
    
    return id;
}