// chave - valor

// sitaxe

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
// }

// declaração literal

let someObj = {}

// sitaxe de construtor

let constructorObject = new Object();

// let constrcutorString = new String();

// let constructorArray = new Array();

// exemplo

const olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel',
}

console.log(olympicRecords);

// acessar uma chave dot notation

console.log(olympicRecords.athletics100Men);

let cat = {
    name: 'Matilde',
    age: 7,
    sound: 'Miauuuu'
}

console.log(cat.name);

// bracket notation

console.log(cat['age']);

let key = 'sound'

console.log(cat[key])

function printAtribute (atribute) {
    console.log(cat[atribute])
}

printAtribute('name')
printAtribute('age')
printAtribute('sound')


// adicionar uma propriedade nova em um objeto

cat.human = 'Gabriel'
cat['angry'] = false

console.log(cat)


// verificando se existe uma propriedade

console.log('angry' in cat)
console.log('sleep' in cat)


// remover uma propriedade

delete cat.human // não é comum utilizarmos

console.log(cat)

// listando propriedades / chaves

console.log(Object.keys(cat));

// listar valores 

console.log(Object.values(cat));

// for in

for (let key in cat) {
    console.log(`${key} ----> ${cat[key]}`)
}

// Objeto misto:

const person = {
    firstName: 'Gabriel',
    hobies: ['origami', 'javascript', 'fazer kata', 'dar aula'],
    maried: false,
    address: {
        street: 'Rua 1',
        number: 32,
        city: 'Jamaica'
    }
}

console.log(person);

console.log(person.address.city);

console.log(person.hobies[2])