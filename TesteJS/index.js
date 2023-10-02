let soma = 0
let sub = 0
let mult = 0
let div = 0

let teclado = require('prompt-sync')()

let numero1 = teclado('Digite o primeiro numero: ')
let numero2 = teclado('Digite o segundo numero: ')

let n1 = parseInt(numero1)
let n2 = parseInt(numero2)

console.log('[1]-Soma')
console.log('[2]-Subtração')
console.log('[3]-Multiplicação')
console.log('[4]-Divisão')
console.log('[5]-Sair')

let menu = parseInt(teclado('Digite um numero entre 1 e 5: '))
switch (menu) {
  case 1:
    soma = n1 + n2
    console.log(`A soma entre ${n1} e ${n2} é igual a: ${soma}`)
    break
  case 2:
    sub = n1 - n2
    console.log(`A subtração entre ${n1} e ${n2} é igual a: ${sub}`)
    break
  case 3:
    mult = n1 * n2
    console.log(`A multiplicação entre ${n1} e ${n2} é igual a: ${mult}`)
    break
  case 4:
    div = n1 / n2
    console.log(`A divisão entre ${n1} e ${n2} é igual a: ${div}`)
    break
  case 5:
    console.log('Fim do programa')
    break
  default:
    console.log('Opção inválida, digite um numero novamente')
}
