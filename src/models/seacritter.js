let seaCritters = [
    {
        id: 1,
        name: "Salmon",
        count: 27
    },
    {
        id: 2,
        name: "Shark",
        count: 4
    },
    {
        id: 3,
        name: "Penguin",
        count: 8
    },
    {
        id: 4,
        name: "Octopus",
        count: 3
    },
    {
        id: 5,
        name: "Dewgong",
        count: 19
    },
    {
        id: 6,
        name: "Sea Lion",
        count: 93
    }
]

let nextID = 7

// Read

function all() {
    seaCritters.sort(function(a, b) {
        if (a.name < b.name) {
            return -1
        }
        else if (a.name > b.name) {
            return 1
        }
        else {
            return 0
        }
    })
    return seaCritters
}

function search(query) {
    const searchedSeaCritters = new Array()
    seaCritters.forEach((seaCritter) => {
        const name = seaCritter.name.toLowerCase()
        if (name.includes(query)) {
            searchedSeaCritters.push(seaCritter)
        }
    })
    searchedSeaCritters.sort(function(a, b) {
        if (a.name < b.name) {
            return -1
        }
        else if (a.name > b.name) {
            return 1
        }
        else {
            return 0
        }
    })
    return searchedSeaCritters
}

function find(id) {
    // Ensure an id in an integer
    id = parseInt(id, 10)
    let foundSeaCritter = null
    seaCritters.forEach((seaCritter) => {
        if (seaCritter.id === id) {
            foundSeaCritter = seaCritter
        }
    })
    return foundSeaCritter
}

// Create

function create(attributes) {
    // Create new animal 'record' copying attributes across and assign an id to it
    const newSeaCritter = Object.assign({}, attributes, {
        id: nextID
    })
    // Increment id for next animal
    nextID += 1
    // Add to our array that stores our data
    seaCritters.push(newSeaCritter)
    return newSeaCritter
}

// Update

function update(id, attributes) {
    const seaCritter = find(id)
    if (!seaCritter) {
        return null
    }
    Object.assign(seaCritter, attributes)
    return seaCritter
}

// Destroy

function destroy(id) {
    id = parseInt(id, 10)
    index = seaCritters.findIndex((seaCritter) => seaCritter.id === id )
    if (index === -1) {
        return null
    }
    else {
        removedSeaCritter = seaCritters.splice(index, 1)
    }
    return removedSeaCritter[0]
}


module.exports = {
    all,
    find, 
    create,
    update,
    destroy,
}