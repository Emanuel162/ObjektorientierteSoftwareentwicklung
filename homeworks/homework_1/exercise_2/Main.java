package homeworks.homework_1.exercise_2;

import homeworks.homework_1.exercise_2.user_implementations.*;

public class Main {

    public static void main(String[] args) {
        UniMember uniMember = new UniMember("Alice Wonderland");
        System.out.println("Name des Unimembers: " + uniMember.getName());
        Student student = new Student("Bob Brown", "OOSE");
        System.out.println("Name des Studenten: " + student.getName());
        System.out.println("Fach des Studenten: " + student.getSubject());
        Employee employee = new Employee("Charly Chaplin", 9999);
        System.out.println("Name des Employees: " + employee.getName());
        System.out.println("Gehalt des Employees: " + employee.getSalary() + "0 €");
        Professor professor = new Professor("David", 20);
        System.out.println("Name des Professors: " + professor.getName());
        System.out.println("Gehalt des Professors: " + professor.getSalary() + "0 €");
        PhD phd = new PhD("David Wonderland", 1000);
        System.out.println("Name des PhDs: " + phd.getName());
        System.out.println("Gehalt des PhDs: " + phd.getSalary() + "0 €");
        Tutor tutor = new Tutor("Bob Wonderland", "OOSE");
        System.out.println("Name des Tutors: " + tutor.getName());
        System.out.println("Fach des Tutors: " + tutor.getSubject());
    }
}
