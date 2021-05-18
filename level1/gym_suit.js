function solution(n, lost, reserve) {
    let result = n - lost.length;

    // lost, reserve 배열 비교 (교집합)
    // 여벌 체육복을 가져온 학생이 체육복을 도난당한 학생을 구하고, 결과 값을 더해준다.
    const interSectionArr = lost.filter((x) => reserve.includes(x)).length;
    // lost, reserve 배열 비교 (차집합)
    const diffLostArr = lost.filter((elm) => !reserve.includes(elm)).sort();
    const diffReserveArr = reserve.filter((elm) => !lost.includes(elm)).sort();
    result += interSectionArr;

    // 위에서 구한 차집합으로 값 구하기
    for (let i = 0; i <= diffReserveArr.length - 1; i += 1) {

        if (diffLostArr.indexOf(diffReserveArr[i] - 1) !== -1 || diffLostArr.indexOf(diffReserveArr[i] + 1) !== -1) {
            result += 1;
            diffLostArr.shift();
        }

    };
    return result;
}