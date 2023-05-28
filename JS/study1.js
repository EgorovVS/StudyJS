//Рекурсивный вывод строки от 1 до n

function my_function(n) {
    return n > 1 ? my_function(n - 1) + " " + n.toString() : 1
}

console.log(my_function(8))