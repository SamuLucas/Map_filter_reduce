// Exercício utilizando o map :

const maçã = {
    value: 2,
}
const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);

}
const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maçã));

console.log('this -> laranja', mapComThis(nums, laranja));

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;

    });
}

// Exercício utilizando o filter :

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

function filtraPares(arr) {
    return arr.filter(callback)

}

function callback(item) {
    return item % 2 === 0;
}
const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));

// Exercício utilizando o reduce :

function somaNumero(arr) {
    arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });

        return prev + current;
    }, 0);
}
const arr = [1, 2];
console.log(somaNumero(arr));

const lista = [{
        name: 'sabão em pó',
        preço: 30,
    },
    {
        name: 'cereal',
        preço: 12,
    },
    {
        name: 'toalha',
        preço: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preço;
    }, saldoDisponivel)

}
console.log(calculaSaldo(saldoDisponivel, lista));