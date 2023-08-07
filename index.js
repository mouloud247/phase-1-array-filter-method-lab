// Code your solution here
function findMatching(list, filterBy) {
    let b = list.filter(function (name) {
        return name.toUpperCase() === filterBy.toUpperCase();
    })
    return b;
}

function fuzzyMatch(list, letters) {
    let b = list.filter(function (name) {
        return name.startsWith(letters);
    })
    return b;
}

function matchName(list, filterBy) {
    let b = list.filter(function (driver) {
        return driver.name === filterBy;
    })
    return b;
}

