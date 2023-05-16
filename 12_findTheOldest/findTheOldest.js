const findTheOldest = function (persons) {
    return persons.reduce(findTheOldestBetweenTwo);
};

function findTheOldestBetweenTwo(firstPerson, secondPerson) {
    if (getAgeOfPerson(firstPerson) < getAgeOfPerson(secondPerson)) {
        return secondPerson;
    }
    return firstPerson;
}

function getAgeOfPerson(person) {
    let endDate = person.yearOfDeath;
    if (!endDate) {
        endDate = new Date().getFullYear();
    }
    return endDate - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
