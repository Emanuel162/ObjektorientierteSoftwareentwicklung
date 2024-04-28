package homeworks.homework_1.exercise_2.user_implementations;

public class Student extends UniMember implements homeworks.homework_1.exercise_2.interfaces.Student {
    private final String subject;
    public Student(String name, String subject) {
        super(name);
        this.subject = subject;
    }

    @Override
    public String getSubject() {
        return subject;
    }
}
