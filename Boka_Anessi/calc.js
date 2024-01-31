let tableau = [1, 8, 9, 3, 4, 7, 4];
const calc = (array, n1, n2) => {

    let arrayChild = array.reduce((acc, val) => acc + val, 0)

    console.log(arrayChild)
}
calc(tableau, 1, 3)