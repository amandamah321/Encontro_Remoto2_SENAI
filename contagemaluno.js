//let index = 0 - Variavel que conta
//index < array.length - ele checa se ta maior ou menor e se deve continuar a repetição
//index++ - se add ou tira (+,-,%) se adiciona, multiplica, reduz e bla ba bla

//---------------------------------------------------------------------------------------------------------

/*for (let index = 0; index < array.length; index++) {}*/

//---------------------------------------------------------------------------------------------------------

//GERALMENTE SE UTILIZA PARA CRIAR UMA LISTA(array = lista)

//array.forEach(element => {})

//---------------------------------------------------------------------------------------------------------

/*WHILE É PARA UMA CONDIÇÃO, ENQUANTO A CONDIÇÃO FOR VERDADEIRO...ELE VAI SEGUINDO

while (condition) {
    
}*/

//---------------------------------------------------------------------------------------------------------

/* PRIMEIRO ELE EXECUTA E DEPOIS ELE PERGUNTA, O WHILE SOZINHA PERGUNTA PRIMEIRO)
do {
    
} while (condition);*/

//---------------------------------------------------------------------------------------------------------

/*let quantidade = 10

for (let contador = 0; contador < quantidade; contador++) {
  console.log(`Numero de voltas é ${contador + 1}`)
}*/

//---------------------------------------------------------------------------------------------------------

let numeroDeAlunos = ['Ana', 'Bea', 'Caio', 'Dani', 'Elias']

for (let contador = 0; contador < numeroDeAlunos.length; contador++) {
  if (contador == 0) {
    console.log('Zero')
  } else if (contador % 2 == 0) {
    console.log(`O número ${contador} é par`)
  } else {
    console.log(`O número ${contador} é impar`)
  }
}
