let animals = [
    {
        id: 1,
        name: "Meerkat",
        count: 27
    },
    {
        id: 2,
        name: "Rhinoceros",
        count: 4
    },
    {
        id: 3,
        name: "Giraffe",
        count: 8
    }
]

let nextID = 4

// Read

function all() {
    return animals
}

function find(id) {
    // Ensure an id in an integer
    id = parseInt(id, 10)
    let foundAnimal = null
    animals.forEach((animal) => {
        if (animal.id === id) {
            foundAnimal = animal
        }
    })
    return foundAnimal
}

// Create

function create(attributes) {
    // Create new animal 'record' copying attributes across and assign an id to it
    const newAnimal = Object.assign({}, attributes, {
        id: nextID
    })
    // Increment id for next animal
    nextID += 1
    // Add to our array that stores our data
    animals.push(newAnimal)
    return newAnimal
}

// Update

function update(id, attributes) {
    const animal = find(id)
    if (!animal) {
        return null
    }
    Object.assign(animal, attributes)
    return animal
}

// Destroy

function destroy(id) {
    id = parseInt(id, 10)
    index = animals.findIndex((animal) => animal.id === id )
    if (index === -1) {
        return null
    }
    else {
        removedAnimal = animals.splice(index, 1)
    }
    return removedAnimal[0]
}


module.exports = {
    all,
    find, 
    create,
    update,
    destroy,
}