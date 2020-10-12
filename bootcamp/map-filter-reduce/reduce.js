const pets = [
    {
        name: 'bolinha',
        type: 'dog',
        age: 15,
        weight: 30
    },
    {
        name: 'mingau',
        type: 'gato',
        age: 6,
        weight: 2
    },
    {
        name: 'rex',
        type: 'dog',
        age: 4,
        weight: 5
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 1
    }
]

// const totalWeight = pets.reduce((total, pet) => {
//     return total + pet.weight
// }, 0)

// console.log(totalWeight.toFixed(2))

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0})

console.log(totalWeight)