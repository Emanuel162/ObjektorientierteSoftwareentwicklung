package homeworks.homework_1.exercise_2.user_implementations;

import homeworks.homework_1.exercise_2.interfaces.UniversityMember;

public class UniMember implements UniversityMember {
    private final String name;

    public UniMember(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}
