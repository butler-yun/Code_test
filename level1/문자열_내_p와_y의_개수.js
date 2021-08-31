function solution(s){
    const str = s.toLowerCase().split('');
    let p = 0;
    let y = 0;
    
    str.map((elm) => {
        if (elm === "p") { p += 1; };
        if (elm === "y") { y += 1; };
    });
    
    // p와 y의 개수가 다를 때
    if (p !== y) {
        return false;
    };
    
    // p와 y의 개수가 같을 때
    // p와 y가 모두 없을 때
    return true;
};