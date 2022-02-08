/*
Crie um array com 5 items (tipos variados).
*/
var myArray = ['abacate', 12 , {curso: 'JavaScript Ninja'}, true, [1,2]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem ( item ) {
	myArray.push( item );
	return myArray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem( [1, false, 'Bola'] ) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + myArray[5][1] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + myArray.length + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( "O segundo array tem " + myArray[5].length + " itens." );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

console.log( 'Números pares entre 10 e 20:' );
var number = 10;
while (number <= 20) {
	number % 2 === 0 ? console.log(number) : '';
	number++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var number = 10;
while (number < 20) {
	number % 2 !== 0 ? console.log(number) : '';
	number++
}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for (let evenNumber = 100; evenNumber <= 120 ; evenNumber++) {
	evenNumber % 2 == 0 ? console.log(evenNumber) : ''
};

console.log( 'Números ímpares entre 111 e 125:' );
// Aqui farei com if para poder mostrar outra opção de solução.
for (let oddNumber = 111; oddNumber <= 125 ; oddNumber++) {
	if (oddNumber % 2 !== 0) {
	console.log(oddNumber); 
	}
};