let areas = [
    {
        id: 1,
        name: "Forest"
    },
    {
        id: 2,
        name: "Rainforest"
    },
    {
        id: 3,
        name: "Desert"
    },
    {
        id: 4,
        name: "Lake"
    },
    {
        id: 5,
        name: "Ocean"
    },
    {
        id: 6,
        name: "Coral"
    }
]

let nextID = 7

function all() {
    areas.sort(function(a, b) {
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
    return areas
}

function search(query) {
    const searchedAreas = new Array()
    areas.forEach((area) => {
        let name = area.name.toLowerCase()
        if (name.includes(query)) {
            searchedAreas.push(area)
        }
    })
    searchedAreas.sort(function(a, b) {
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
    return searchedAreas
}

function find(id) {
    id = parseInt(id, 10)
    let foundArea = null
    areas.forEach((area) => {
        if (area.id === id) {
            foundArea = area
        }
    })
    return foundArea
}

function create(attributes) {
    const newArea =  Object.assign({}, attributes, {
        id: nextID
    })
    nextID += 1
    areas.push(newArea)
    return newArea
}

function update(id, attributes) {
    const area = find(id)
    if (!area) {
        return null
    }
    Object.assign(area, attributes)
    return area
}

function destroy(id) {
    id = parseInt(id, 10)
    index = areas.findIndex((area) => area.id === id )
    if (index === -1) {
        return null
    }
    else {
        removedArea = areas.splice(index, 1)
    }
    return removedArea[0]
}

module.exports = {
    all,
    search,
    find,
    create,
    update,
    destroy
}