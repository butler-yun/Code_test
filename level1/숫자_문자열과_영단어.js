function solution(s) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", ];
    // 정규식으로 찾을 영어단어가 들어있는 num 배열.

    let str = s;
    // 매개변수 s를 str에 담음.

    for (let i = 0; i < num.length; i += 1) {
        str = str.replace(new RegExp(`${num[i]}`, 'g'), i);
        // 정규식에 변수를 넣어 사용하기 위해 new RegExp로 정규식 작성
    };

    return +str;
    // 문자열인 결과 값을 숫자로 바꿔서 출력하기 위해 '+' 사용
    // parseInt를 사용해도 된다.
};