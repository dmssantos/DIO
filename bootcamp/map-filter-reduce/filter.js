const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'gato',
        age: 2
    },
    {
        name: 'gulp',
        type: 'peixe',
        age: 1
    }
]

const eMenorQueCinto = (numero) => {
    return numero < 5
}

const newPets = pets.filter(({age}) => eMenorQueCinto(age));

// const newPets = pets.filter((pet) => {
//     return pet.age < 5
// })

console.log(pets)
console.log(newPets)