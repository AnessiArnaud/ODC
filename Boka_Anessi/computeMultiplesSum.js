const computerMultiplesSum = (n) => {
        if (0 <= n < 1000) {
            let result = [];
            for (let i = 0; i < n; i++) {

                if (i % 3 === 0) {
                    result.push(i);
                }
                if (i % 5 === 0) {
                    result.push(i);
                }
                if (i % 7 === 0) {
                    result.push(i);
                }

            }
            console.log(result.reduce((acc, val) => acc + val, 0))

        } else {
            console.log("Le nombre n'est pas compris entre 0 et 1000")
        }

    }
    //EXEMPLE
const n = 11;
computerMultiplesSum(n)