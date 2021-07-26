function solution(s, n) {
    const str = [...s.toLowerCase()];
    // 대소문자 구분을 하지 않고 풀기 위해 소문자로 만듬.
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    // 알파벳을 원소로 갖는 배열 alphabet.

    const password = str.map((elm) => {
        const index = (alphabet.indexOf(elm) + n) % 26;

        if (elm === " ") {
            return " ";
        }
        // elm가 공백일 경우 아무일도 일어나지 않음.

        return alphabet[index];
    });

    return convertStr(s, password);
}

function convertStr(s, password) {
    const str = [...s];

    return password.map((elm, idx) => {
        return str[idx].charCodeAt() > 90 ? elm : elm.toUpperCase();
        // 소문자 "a" ~ "z"는 97 ~ 122
        // 대문자 "A" ~ "Z"는 65 ~ 90
    }).join('');
}