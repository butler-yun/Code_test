function solution(numbers, hand) {
    // 키패드
    const keyPad = {
        1: [1, 1, ],
        2: [2, 1, ],
        3: [3, 1, ],
        4: [1, 2, ],
        5: [2, 2, ],
        6: [3, 2, ],
        7: [1, 3, ],
        8: [2, 3, ],
        9: [3, 3, ],
        '*': [1, 4, ],
        0: [2, 4, ],
        '#': [3, 4, ],
    }

    let result = '';
    let leftHand = keyPad['*'] // 왼손 엄지손가락
    let rightHand = keyPad['#'] // 오른손 엄지손가락
    let moveHand = '';

    numbers.forEach((elm) => {

        // 1, 4, 7번은 왼손 엄지손가락으로 누름
        if (elm === 1 || elm === 4 || elm === 7) {
            leftHand = keyPad[elm];
            return result += "L";
        }

        // 3, 6, 9번은 오른손 엄지손가락으로 누름
        if (elm === 3 || elm === 6 || elm === 9) {
            rightHand = keyPad[elm];
            return result += "R";
        }

        return result += padPosition(elm);
    });


    function padPosition(elm) {
        let leftSum = 0;
        let rightSum = 0;

        moveHand = keyPad[elm];

        for (let i = 0; i < 2; i += 1) {
            leftSum += Math.max(leftHand[i], moveHand[i]) - Math.min(leftHand[i], moveHand[i]);
            rightSum += Math.max(rightHand[i], moveHand[i]) - Math.min(rightHand[i], moveHand[i]);
        }

        // 왼손과 오른손의 거리가 같을 때
        if (leftSum === rightSum) {
            if (hand === 'left') {
                leftHand = keyPad[elm];
                return "L";
            }

            if (hand === 'right') {
                rightHand = keyPad[elm];
                return "R";
            }
        }

        // 왼손이 더 가까울 때
        if (leftSum < rightSum) {
            leftHand = keyPad[elm];
            return "L";
        }

        // 오른손이 더 가까울 때
        if (leftSum > rightSum) {
            rightHand = keyPad[elm];
            return "R";
        }
    }

    return result;
}