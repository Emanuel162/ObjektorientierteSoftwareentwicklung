package homeworks.homework_1.exercise_2.user_implementations;

public class Employee extends UniMember implements homeworks.homework_1.exercise_2.interfaces.Employee {
    private final float salary;
    public Employee(String name, float salary) {
        super(name);
        this.salary = salary;
    }

    @Override
    public float getSalary() {
        return salary;
    }
}
