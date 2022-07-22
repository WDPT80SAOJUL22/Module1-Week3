// Object literal

// let obj = {}

// Board
const board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, 200, -100, 10, 20, -10];

const player1 = {
    name: 'Lena',
    color: 'gray',
    position: 10,
    cash: 1000
}

const player2 = {
    name: 'Anneliese',
    color: 'purple',
    position: 0,
    cash: 1000
}

const player3 = {
    name: 'Roxanie',
    color: 'green',
    position: 0,
    cash: 1000
}

// Primeiro turno do primeiro Jogador
let dice;
// Jogar o dado
dice = Math.floor(1 + Math.random() * 6)
//Mudar de posição
player1.position = (player1.position + dice) % board.length
player1.cash += board[player1.position]
console.log(player1);

// Primeiro Turno do segundo jogador

dice = Math.floor(1 + Math.random() * 6)
player2.position = (player2.position + dice) % board.length
player2.cash += board[player2.position]
console.log(player2);

//Primeiro Turno do Terceiro jogador

dice = Math.floor(1 + Math.random() * 6)
player3.position = (player3.position + dice) % board.length
player3.cash += board[player3.position]
console.log(player3);

// Segundo Turno

if (player1.cash <= 0 || player2.cash <= 0 || player3.cash <= 0){
    console.log(`Alguém perdeu`)
}

console.log('-----segundo turno----')

dice = Math.floor(1 + Math.random() * 6)
player1.position = (player1.position + dice) % board.length
player1.cash += board[player1.position]
console.log(player1);


dice = Math.floor(1 + Math.random() * 6)
player2.position = (player2.position + dice) % board.length
player2.cash += board[player2.position]
console.log(player2);


dice = Math.floor(1 + Math.random() * 6)
player3.position = (player3.position + dice) % board.length
player3.cash += board[player3.position]
console.log(player3);

console.log('-----Terceiro Turno-----');

dice = Math.floor(1 + Math.random() * 6)
player1.position = (player1.position + dice) % board.length
player1.cash += board[player1.position]
console.log(player1);


dice = Math.floor(1 + Math.random() * 6)
player2.position = (player2.position + dice) % board.length
player2.cash += board[player2.position]
console.log(player2);


dice = Math.floor(1 + Math.random() * 6)
player3.position = (player3.position + dice) % board.length
player3.cash += board[player3.position]
console.log(player3);