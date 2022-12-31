const findTheOldest = function(persons) {
    const age = function(person) {
        const date = new Date()
        const actualYear = date.getFullYear();
        if (person.yearOfDeath === undefined) {
            return  (actualYear - person.yearOfBirth);
        }
        else return  (person.yearOfDeath - person.yearOfBirth);
    }
    let oldest = persons[0]
    for (element of persons) {
         element.age = age(element);
         console.log(element.age);
         if (element.age > oldest.age) {
            oldest = element;
         }
    }
return oldest
};
// Do not edit below this line
module.exports = findTheOldest;
