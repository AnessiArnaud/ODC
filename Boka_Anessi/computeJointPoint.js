function computeJointPoint(s1, s2) {


    //Fonction compute
    function compute(params) {
        return params.toString().split('').reduce((acc, val) => acc + parseInt(val, 10), 0) + params
    }


    let result1 = compute(s1)
    let result2 = compute(s2)
    while (result1 !== result2) {
        result1 = compute(result1)
        result2 = compute(result2)
    }
    return result1
}

//Exemple
console.log(computeJointPoint(471, 480))