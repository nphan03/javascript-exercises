const findTheOldest = function(arr) {
    arr.reduce(oldest, currentPerson => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldest : currentPerson;
    })
};  

function getAge(birthYear, deathYear){
    if(!deathYear)
        deathYear = new Date().getFullYear();
    return deathYear - birthYear;
}
// Do not edit below this line
module.exports = findTheOldest;
