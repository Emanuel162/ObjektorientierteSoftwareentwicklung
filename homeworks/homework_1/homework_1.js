const dummyPerson = {
    first_name: "Alice",
    last_name: "Wonderland",
    age: 99
}

const roleProfessor = {
    position: "full professor",
    level: "W1",
    chair: "SSE",
    getDescription: function () {
        return `${this.first_name} ${this.last_name} is chair of ${this.chair}`
    },
    getInfo: function () {
        return `${this.getDescription()} and the position is ${this.position} and the level is ${this.level}`
    }
}

function clone(object) {
    let clone = {};
    for(let key in object) {
        clone[key] = object[key];
    }
    return clone;
}

const makeProfessorWithTitle = (person, title) => {
    let professor = clone(roleProfessor);
    professor.__proto__ = person;
    professor.title = title;
    const info = professor.getInfo()
    const description = professor.getDescription()
    professor.getInfo = function () {
        return `${info} with title: ${this.title}.`;
    }
    professor.getDescription = function () {
        return `${description} with title: ${this.title}.`;
    }
    return professor;
}


const roleHeadOfTheDepartment = makeProfessorWithTitle(dummyPerson, "head of the department");
const roleHeadOfTheExaminationBoard = makeProfessorWithTitle(dummyPerson, "head of examination board")

console.log("Rolle 'head of examination board' getInfo: ", roleHeadOfTheExaminationBoard.getInfo())
console.log("Rolle 'head of examination board' getDescription: ", roleHeadOfTheExaminationBoard.getDescription())
console.log("Rolle 'head of the department' getInfo: ", roleHeadOfTheDepartment.getInfo())
console.log("Rolle 'head of the department' getDescription: ", roleHeadOfTheDepartment.getDescription())
