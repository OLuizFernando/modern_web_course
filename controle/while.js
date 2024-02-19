function inteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)
}

let opcao = 0 // é necessário declarar a variável 'opcao' antes do laço

while (opcao != -1) { // se a condição 'opção != 1' for falsa, o laço não será executado
     opcao = inteiroAleatorioEntre(-1, 10)
     console.log(`O valor sorteado foi ${opcao}`)
}