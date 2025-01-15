function add(a, b) {                      //Example of user-defined modules
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

module.exports = {
    add, multiply
}