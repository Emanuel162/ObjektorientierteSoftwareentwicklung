let alice = {
    name: "Alice",
    last_name: "Wonderland",
    age: 24,
    getName: function () {
        return `${this.name} ${this.last_name}`
    },
}

console.log(alice.getName())

const makeTutor = (person, hours, module, exercise_times) => {
    const tutor = clone(person)
    tutor.__proto__ = roleTutor
    tutor.hours = hours
    tutor.module = module
    tutor.exercise_times = exercise_times
    return tutor
}

const makeStudent = (person, matriculation_number, course_description) => {
    const student = clone(person)
    student.__proto__ = roleStudent
    student.matriculation_number = matriculation_number
    student.course_description = course_description
    return student
}

const makePhD = (person, subject, chair) => {
    const phD = clone(person)
    phD.__proto__ = rolePhD
    phD.subject = subject
    phD.chair = chair
    return phD
}


let roleStudent = {
    getNameAndMatNr() {
        return `${this.name} ${this.last_name}, ${this.matriculation_number}`;
    },
    getDetails() {
        return `${this.getNameAndMatNr()}, studies ${this.course_description}.`;
    }
}

let roleTutor = {
    getWorkDescription() {
        return `${this.name} ${this.last_name} has an ${this.hours}h contract as a tutor for ${this.module} and offers exercises at the following dates: ${this.exercise_times}.`
    }
}

let rolePhD = {
    getWorkDescription() {
        return `${this.name} ${this.last_name} is a PhD student at the ${this.chair} chair, studying ${this.subject}.`
    }
}

function clone(object) {
    let clone = {};
    for(let key in object) {
        clone[key] = object[key];
    }
    return clone;
}

let roleStudentAlice = makeStudent(alice, 9349458, "computer science");
console.log(roleStudentAlice.getDetails())

let roleTutorAlice = makeTutor(alice, "oose", 8, ["monday, 14:00-16:30", "wednesday, 12:00-13:30"]);
console.log(roleTutorAlice.getWorkDescription())

let rolePhDAlice = makePhD(alice, "software engineering", "SSE");
console.log(rolePhDAlice.getWorkDescription())