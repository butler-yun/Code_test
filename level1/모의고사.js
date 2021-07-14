function solution(answers) {
    const x = [1, 2, 3, 4, 5]; // 수포자 1
    const y = [2, 1, 2, 3, 2, 4, 2, 5]; // 수포자 2
    const z = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 수포자 3

    let correct = [0, 0, 0];

    answers.forEach((elm, idx) => {
        // 수포자 1
        if (elm === x[idx % x.length]) {
            correct[0] += 1;
        }

        // 수포자 2
        if (elm === y[idx % y.length]) {
            correct[1] += 1;
        }

        // 수포자 3
        if (elm === z[idx % z.length]) {
            correct[2] += 1;
        }
    });

    let maxCorrect = Math.max.apply(null, correct);
    let result = [];

    correct.filter((elm, idx) => {
        if (elm === maxCorrect) {
            result.push(idx + 1);
        }
    });

    return result;
}