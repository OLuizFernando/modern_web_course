// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    if (num == 1 || num == 0) {
        return 1
    }
    return num * fatorial(num - 1)
}