package university;

public class Professor extends Employee {
    private String department;
    private String researchArea;

    public Professor(String name, int age, String designation, double salary, String department, String researchArea) {
        super(name, age, designation, salary);
        this.department = department;
        this.researchArea = researchArea;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Department: " + department + ", Research Area: " + researchArea;
    }

    @Override
    public void printDetails() {
        System.out.println(getDetails());
    }
}
