// classes

const board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, 200, -100, 10, 20, -10];

const throwDice = () => {
    return Math.floor(1 + Math.random() * 6)
}

class Player {

    constructor(name, color) {
        this.name = name
        this.color = color
        this.position = 0
        this.cash = 1000
    }

    move() {     
        this.position = (this.position + throwDice()) % board.length // refactor - levando o jogar o dado para uma função de ajuda (helper)
        this.cash += board[this.position]
        if (this.cash <= 0){
            console.log(`${this.name} Perdeu o jogo`);
        }
    }

    displayInfo(){
        console.log(`${this.name}, está na posição ${this.position} e tem ${this.cash} dinheiros`)
    }

}

// -- Inicialização jogadores

const player1 = new Player('Iury', 'black')
const player2 = new Player('Everton', 'red')
const player3 = new Player('Deny', 'white')

// turno 1
player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()

//turno 2
player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()

//turno 3
player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()

