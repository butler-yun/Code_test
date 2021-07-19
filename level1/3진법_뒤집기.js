function solution(n) {
    // 정수 n을 toString 메소드로 3진수로 변환.
    // 변환된 숫자를 split으로 쪼개고, reverse로 뒤집은 뒤 join으로 붙임.
    const ternary = n.toString(3).split('').reverse().join('');

    // parseInt 메소드로 10진수로 변환.
    return parseInt(ternary, 3)
}