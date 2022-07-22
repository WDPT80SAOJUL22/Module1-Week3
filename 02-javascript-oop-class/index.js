class Animal {
    constructor(name, mainColor, sound){
        this.name = name
        this.mainColor = mainColor
        this.sound = sound
    }

    scream(intensity) {
        console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
}

const doguinho = new Animal('Mocha', 'caramelo', 'woof')
doguinho.scream(0)

// Herança / inheritance

class Cat extends Animal {
    constructor(name, mainColor){
        super(name, mainColor, 'Miau')
    }
}

const catzinho = new Cat('Matilde', 'rajada')

catzinho.scream(4)

class Chameleon extends Animal {
    constructor(name) {
        super(name, 'green', '...')
    }

    scream() {
        console.log('Chameleons don\'t produce sound')
    }

    changeColor(newColor) {
        this.mainColor = newColor
    }

}

const chameleonzito = new Chameleon('Holo')

chameleonzito.scream()
console.log(chameleonzito)
chameleonzito.changeColor('red')

chameleonzito.mainColor = 'blue'
console.log(chameleonzito)


// function Fish (name) {
//     this.name = name
// }

// Fish.prototype.swimm = function () {
//     console.log(this.name + ' está nadando')
// }

// const peixe = new Fish('Nemo')
// console.log(peixe);

// peixe.swimm()