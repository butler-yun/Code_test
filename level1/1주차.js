function solution(price, money, count) {
    let total = 0;
    // price = 3, money = 20, count = 4
    // 놀이기구의 이용금액은 3, 이용회수는 4
    // 즉 3+6+9+12 = 30; 이용할수록 가격은 n배 증가

    for (let i = 1; i <= count; i += 1) {
        total += price * i
    };

    const result = total - money;
    // 총 금액 - 가진 돈(money)

    return result > 0 ? result : 0;
};