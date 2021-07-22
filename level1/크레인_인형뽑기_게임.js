function solution(board, moves) {
    let b = board; // board
    let basket = []; // 인형을 뽑아서 담을 바구니
    let result = 0; // 결과 값

    moves.forEach((x) => {

        // x === value of moves [1,5,3,5,1,2,1,4...]
        for (let i = 0; i <= b[0].length - 1; i += 1) {

            let move = b[i][x - 1];
            // x에 -1을 해준 이유는 다음과 같다.
            // board[0] === moves[1]-1

            if (move !== 0) {

                basket.push(move);
                b[i][x - 1] = 0;
                // move의 값이 0이 아닐 때 
                // basket 변수에 move 값을 밀어넣는다.
                // b 배열에 0 할당

                if (basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.splice(basket.length - 2, basket.length - 1);
                    result += 2;
                    // basket 배열의 제일 마지막 값과 이전의 값을 비교.
                    // 같은 값일 경우 두 값을 지운다.
                    // 그리고 result 변수에 숫자 2을 가산한다.
                };

                return;
                // if문 빠져나온다.
            };
        };

    });

    return result;
};