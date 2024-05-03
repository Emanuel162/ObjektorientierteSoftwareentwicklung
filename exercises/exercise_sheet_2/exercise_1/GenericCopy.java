package exercises.exercise_sheet_2.exercise_1;

import java.util.ArrayList;
import java.util.List;

public class GenericCopy {

    public static void main(String[] args) {
        List<Number> original = List.of(43, 241, 34, 546, 2, 5, 3246);
        List<Number> copy = new ArrayList<>();

        GenericCopy.copy(original, copy);

        System.out.println(copy);
    }

    public static <T> void copy(List<T> source, List<T> destination) {
        destination.addAll(source);
    }
}
