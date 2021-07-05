function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]; // 로또 등수

    const sameCount = win_nums.filter((elm) => {
        return lottos.indexOf(elm) !== -1;
    }).length;
    // lottos와 win_nums 두 배열 모두에 있는 원소 갯수

    const zeroCount = lottos.filter((elm) => elm === 0).length;
    // 0의 갯수

    const maxSameCount = sameCount + zeroCount;

    return [rank[maxSameCount], rank[sameCount]]
}