// Utilizando Metodos

const board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, 200, -100, 10, 20, -10];

const throwDice = () => {
    return Math.floor(1 + Math.random() * 6)
}

const player1 = {
    name: 'Lena',
    color: 'gray',
    position: 10,
    cash: 1000,

    move() {     
        this.position = (this.position + throwDice()) % board.length // refactor - levando o jogar o dado para uma função de ajuda (helper)
        this.cash += board[this.position]
        if (this.cash <= 0){
            console.log(`${this.name} Perdeu o jogo`);
        }
    },

    displayInfo(){
        console.log(`${this.name}, está na posição ${this.position} e tem ${this.cash} dinheiros`)
    }
}

const player2 = {
    name: 'Anneliese',
    color: 'purple',
    position: 0,
    cash: 1000,
    move() {
        let dice = Math.floor(1 + Math.random() * 6)
        this.position = (this.position + dice) % board.length
        this.cash += board[this.position]
        if (this.cash <= 0){
            console.log(`${this.name} Perdeu o jogo`);
        }
    },

    displayInfo(){
        console.log(`${this.name}, está na posição ${this.position} e tem ${this.cash} dinheiros`)
    }
}

const player3 = {
    name: 'Roxanie',
    color: 'green',
    position: 0,
    cash: 1000,
    move() {
        let dice = Math.floor(1 + Math.random() * 6)
        this.position = (this.position + dice) % board.length
        this.cash += board[this.position]
        if (this.cash <= 0){
            console.log(`${this.name} Perdeu o jogo`);
        }
    },

    displayInfo(){
        console.log(`${this.name}, está na posição ${this.position} e tem ${this.cash} dinheiros`)
    }
}

console.log('turno 1');
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

console.log('turno 2');
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

console.log('turno 3');
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();



