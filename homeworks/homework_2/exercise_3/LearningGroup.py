class LearningGroup:
    def __init__(self):
        self.studentList = []

    def __str__(self):
        return str([str(student) for student in self.studentList])

    def __add__(self, other):
        self.studentList.append(other)
        return self


class Student:
    def __init__(self, name, matNr):
        self.name = name
        self.matNr = matNr

    def __str__(self):
        return self.name + ' ' + str(self.matNr)

    def __add__(self, other):
        learningGroup = LearningGroup()
        learningGroup.studentList.append(self)
        learningGroup.studentList.append(other)
        return learningGroup


if __name__ == '__main__':
    student1 = Student('Alice Wonderland', 42424242)
    student2 = Student('Bob Miller', 1564153)
    student3 = Student('Charly Robert', 4681398)

    # b)
    # Hier werden zwei Studenten 'addiert'.
    # Da in der Studenten-Klasse der '+'-Operator überschrieben wurde, wird dieser aufgerufen.
    # Es wird dort eine LearningGroup erstellt in der beide Studenten hinzugefügt werden.
    # Diese LearningGroup wird dann zurückgegeben.
    group = student1 + student2
    print("student1 + student2")
    print(group)
    # Nun wird eine Learninggruppe mit einem Studenten addiert.
    # Es wird der '+'-Operator von LearningGroup aufgerufen.
    # Hier wird zur vorhandenen LearningGroup ein neuer Student hinzugefügt.
    # Die aktualisierte LearningGroup wird zurückgegeben.
    group = group + student3
    print("group + student3")
    print(group)
    # Zuerst wird 'student1 + student2' ausgeführt.
    # Hier wird der '+'-Operator von Student aufgerufen, es wird eine neue Gruppe erstellt und diese wird zurückgegeben.
    # Anschließend wird die neu erstellte Gruppe mit einem weiteren Studenten addiert.
    # Jetzt wird der '+'-Operator der LearningGroup aufgerufen und der dritte Student wird dieser hinzugefügt.
    group2 = student1 + student2 + student3

    print("student1 + student2 + student3")
    print(group2)
