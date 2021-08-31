function solution(table, languages, preference) {
    const rank = [5, 4, 3, 2, 1];
    const obj = {};
    
    for (let i = 0; i < table.length; i += 1) {
        const col = table[i].split(' ');
        // [ 'SI', 'JAVA', 'JAVASCRIPT', 'SQL', 'PYTHON', 'C#' ]
        obj[col[0]] = 0;
        // obj = {"SI: 0",}
        
        for (let j = 0; j < languages.length; j += 1) {
            const searchLang = col.indexOf(languages[j]);
            const point = rank[searchLang-1];
            
            // searchLang이 -1 이면 아무일도 일어나지 않는다.
            // 값을 찾을 경우에만 연산
            searchLang === -1 ? 0 : obj[col[0]] += (point * preference[j]);
            
        };
    };
    
    // 문자열 순으로 정렬한 뒤 높은 점수 순으로 정렬
    const sorting = Object.entries(obj).sort().sort(([,a],[,b]) => b - a);
    
    return sorting[0][0];
};