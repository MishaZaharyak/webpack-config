function sum(...num) {
    let sum = 0;

    num.forEach(el => sum += el);

    return sum
}

export default sum;
